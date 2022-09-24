import { FC } from "react";
import { ShapeProps } from "../../types/CardProps";
import BaseShape from "./BaseShape";

const Diamond: FC<ShapeProps> = (props: ShapeProps) => {
  const path = "M 0 50 L 100 0 L 200 50 L 100 100 Z";
  return (
    <BaseShape {...props} path={path} shape="diamond"/>
  )
}

export default Diamond