import { FC } from "react";
import { CardProps, ShapeProps } from "../../types/CardProps";

const BaseShape: FC<ShapeProps & {path: string, shape: CardProps['shape']}> = (props) => {
  const { color: stroke, shape, path, shading } = props;
  const strokeWidth = 6;
  const stripeId = `stripe-${stroke}`;
  const fill = props.shading === 'solid' ? stroke : shading === 'hashed' ? `url(#${stripeId}` : "transparent";

  return (
    <svg width={200} height={100} viewBox={"0 0 200 100"}>
      <defs>
        <path id={shape} d={path} />
        <clipPath id={`clip-${shape}`}>
          <use xlinkHref={`#${shape}`} />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-${props.shape})`}>
        <path d={props.path} fill={fill} stroke={stroke} strokeWidth={strokeWidth * 2} />
      </g>
    </svg>
  )
}

export default BaseShape