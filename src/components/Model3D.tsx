import { Model, ModelProps } from "@webspatial/react-sdk";
import "./Model3D.css";

export type Model3DProps = ModelProps & {
  src: string;
  imgSrc: string;
  alt: string;
}
export default function Model3D({ className, imgSrc, alt, ...restProps }: Model3DProps) {
  return (
    <Model enable-xr className={`model3D ${className}`} {...restProps}>
      <img src={imgSrc} alt={alt} />
    </Model>
  );
}
