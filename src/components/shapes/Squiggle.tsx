import { FC } from "react";
import { ShapeProps } from "../../types/CardProps";
import BaseShape from "./BaseShape";

const Squiggle: FC<ShapeProps> = (props: ShapeProps) => {
  const path = "M 100 15 C 50 30 50 30 100 15 S 180 0 195 20 S 180 100 150 95 S 150 70 100 85 S 20 100 5 80 S 20 0 50 5 S 50 30 100 15"
  return (
    <BaseShape {...props} path={path} shape="squiggle"/>
  )
}

export default Squiggle