import Svg, { Path, Line, Rect } from 'react-native-svg';
import * as React from "react";
function IconLayoutAlignBottom({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-align-bottom" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={20} x2={20} y2={20} /><Rect x={9} y={4} width={6} height={12} rx={2} /></Svg>;
}
export default IconLayoutAlignBottom;