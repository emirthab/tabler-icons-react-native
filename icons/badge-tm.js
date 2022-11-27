import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconBadgeTm({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-badge-tm" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={5} width={18} height={14} rx={2} /><Path d="M6 9h4" /><Path d="M8 9v6" /><Path d="M13 15v-6l2 3l2 -3v6" /></Svg>;
}
export default IconBadgeTm;