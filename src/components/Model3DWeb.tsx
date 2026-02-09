import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Environment } from "@react-three/drei";
import { USDZLoader } from "three-usdz-loader";
import * as THREE from "three";

function USDZModel({ url }: { url: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    let mounted = true;

    const loadModel = async () => {
      try {
        setLoading(true);
        setError(null);

        // Clear previous model
        groupRef.current?.clear();

        // Fetch the file
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}`);
        const blob = await response.blob();
        const file = new File([blob], url.split("/").pop() || "model.usdz");

        if (!mounted) return;

        // Initialize loader
        // Pointing to root as we copied files to public/
        const loader = new USDZLoader("");

        // Pass the group to loadFile
        if (groupRef.current) {
          await loader.loadFile(file, groupRef.current);

          // Center and scale the model
          const group = groupRef.current;
          group.updateMatrixWorld(true);

          const box = new THREE.Box3().setFromObject(group);
          const center = new THREE.Vector3();
          const size = new THREE.Vector3();

          box.getCenter(center);
          box.getSize(size);

          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            const targetSize = 3; // Fit into a 3 unit box (adjust as needed)
            const scale = targetSize / maxDim;

            group.scale.set(scale, scale, scale);
            group.position.copy(center).multiplyScalar(-scale);
          }
        }

        if (mounted) setLoading(false);
      } catch (err) {
        if (mounted) {
          console.error("Error loading USDZ:", err);
          setError(err instanceof Error ? err.message : "Unknown error");
          setLoading(false);
        }
      }
    };

    loadModel();

    return () => {
      mounted = false;
      if (groupRef.current) {
        groupRef.current.clear();
        // Reset transforms
        groupRef.current.scale.set(1, 1, 1);
        groupRef.current.position.set(0, 0, 0);
      }
    };
  }, [url]);

  return (
    <group>
      <group ref={groupRef} />
      {loading && <Html center>Loading 3D Model...</Html>}
      {error && <Html center><div style={{ color: 'red' }}>Error: {error}</div></Html>}
    </group>
  );
}

export default function Model3DWeb({ url }: { url: string }) {
  return (
    <div style={{ width: "100%", height: "400px", background: "#f0f0f0", borderRadius: "8px" }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.9 }}
      >
        {/* Soft ambient fill — kept low since Environment IBL provides most illumination */}
        <ambientLight intensity={0.3} />
        {/* Single soft directional for subtle shadow directionality */}
        <directionalLight position={[0, 5, 5]} intensity={0.3} castShadow />
        {/* IBL environment — primary light source, matching RealityKit's approach */}
        <Environment preset="city" environmentIntensity={1.2} background={false} />
        <USDZModel url={url} />
        <OrbitControls autoRotate enableZoom={true} />
      </Canvas>
    </div>
  );
}
