import { FC } from "react";
import { ShapeProps } from "../../types/CardProps";
import BaseShape from "./BaseShape";

const Ellipse: FC<ShapeProps> = (props: ShapeProps) => {
  const path = "M 50 5 L 150 5 A 20 20 0 0 1 150 95 L 50 95 A 20 20 0 0 1 50 5 Z";
  return (
    <BaseShape {...props} path={path} clipId="ellipse"/>
  )
}

export default Ellipse