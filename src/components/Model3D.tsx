import { Model, ModelProps } from "@webspatial/react-sdk";

export default function Model3D({ className, ...restProps }: ModelProps) {
  return (
    <Model enable-xr className={`model3D ${className}`} {...restProps} />
  );
}