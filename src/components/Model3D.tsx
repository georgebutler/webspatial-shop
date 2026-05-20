import type { Ref } from "react";
import { Model, ModelRef, ModelProps } from "@webspatial/react-sdk";
import "./Model3D.css";

export type Model3DProps = ModelProps & {
  src?: string;
  imgSrc: string;
  alt: string;
  ref?: Ref<ModelRef>;
}
export default function Model3D({ className, imgSrc, alt, ref, ...restProps }: Model3DProps) {
  if (!restProps.src) {
    return (
      <div className={`model3D model3D--fallback ${className ?? ""}`.trim()}>
        <img src={imgSrc} alt={alt} />
      </div>
    );
  }

  return (
    <Model enable-xr className={`model3D ${className}`} ref={ref} {...restProps}>
      <img src={imgSrc} alt={alt} />
    </Model>
  );
}
