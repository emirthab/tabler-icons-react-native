import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBinaryOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-binary-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 7v-2h-1" /><Path d="M18 19v-1" /><Path d="M15.5 5h2a0.5 .5 0 0 1 .5 .5v4a0.5 .5 0 0 1 -.5 .5h-2a0.5 .5 0 0 1 -.5 -.5v-4a0.5 .5 0 0 1 .5 -.5z" /><Path d="M10.5 14h2a0.5 .5 0 0 1 .5 .5v4a0.5 .5 0 0 1 -.5 .5h-2a0.5 .5 0 0 1 -.5 -.5v-4a0.5 .5 0 0 1 .5 -.5z" /><Path d="M6 10v.01" /><Path d="M6 19v.01" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconBinaryOff;