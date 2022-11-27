import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconHeadphones({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-headphones" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={13} rx={2} width={5} height={7} /><Rect x={15} y={13} rx={2} width={5} height={7} /><Path d="M4 15v-3a8 8 0 0 1 16 0v3" /></Svg>;
}
export default IconHeadphones;