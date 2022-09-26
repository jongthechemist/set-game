import { FC } from "react";
import { CardProps, ShapeProps } from "../types/CardProps";
import Diamond from "./shapes/Diamond";
import Ellipse from "./shapes/Ellipse";
import Squiggle from "./shapes/Squiggle";

const ShapeComponentMap: { [key in CardProps['shape']]: FC<ShapeProps> } = {
  'diamond': Diamond,
  'ellipse': Ellipse,
  'squiggle': Squiggle
}

const Card: FC<CardProps> = ({ shape, number, ...shapeProps }) => {
  const ShapeComponent = ShapeComponentMap[shape];
  const content = Array.from({ length: number }, (_, index) => <ShapeComponent key={index} {...shapeProps} />);

  return (
    <div className={`flex justify-self-center self-center justify-center p-4 rounded-lg shadow-lg border-2 border-slate-200 w-60 h-40`}>
      {content}
    </div>
  )
}

export default Card