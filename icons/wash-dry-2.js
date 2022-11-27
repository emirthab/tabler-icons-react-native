import Svg, { Path, Rect, Circle } from 'react-native-svg';
import * as React from "react";
function IconWashDry2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wash-dry-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={18} height={18} rx={3} /><Circle cx={12} cy={12} r={6} /><Path d="M10 12h.01" /><Path d="M14 12h.01" /></Svg>;
}
export default IconWashDry2;