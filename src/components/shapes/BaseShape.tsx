import { FC } from "react";
import { ShapeProps } from "../../types/CardProps";

const BaseShape: FC<ShapeProps & {path: string, clipId: string}> = (props) => {
  const { color: stroke, clipId, path, shading } = props;
  const strokeWidth = 6;
  const stripeId = `stripe-${stroke}`;
  const fill = props.shading === 'solid' ? stroke : shading === 'hashed' ? `url(#${stripeId}` : "transparent";

  return (
    <svg viewBox={"0 0 100 200"}>
      <defs>
        <path id={clipId} d={path} />
        <clipPath id={`clip-${clipId}`}>
          <use xlinkHref={`#${clipId}`} />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-${clipId})`} style={{rotate: '90deg', translate: '100%'}}>
        <path d={props.path} fill={fill} stroke={stroke} strokeWidth={strokeWidth * 2} />
      </g>
    </svg>
  )
}

export default BaseShape