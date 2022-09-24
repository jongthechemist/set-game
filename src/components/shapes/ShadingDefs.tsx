import { FC } from "react";
import { ALL_COLORS } from "../../types/CardProps";

const ShadingDefs: FC<{}> = () => {
  const strokeWidth = 6;
  return (
    <svg width={200} height={100} viewBox={"0 0 200 100"}>
      <defs>
        {
          ALL_COLORS.map((color) => (
            <pattern key={color} id={`stripe-${color}`} patternUnits="userSpaceOnUse" width="12" height="12">
              <line x1="0" y="0" x2="0" y2="12" stroke={color} strokeWidth={strokeWidth} />
            </pattern>))
        }
      </defs>
    </svg>
  )
}

export default ShadingDefs