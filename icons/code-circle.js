import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCodeCircle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 14l-2 -2l2 -2" /><Path d="M14 10l2 2l-2 2" /><Circle cx={12} cy={12} r={9} /></Svg>;
}
export default IconCodeCircle;