import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconMoodSmileDizzy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-smile-dizzy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M14.5 15a3.5 3.5 0 0 1 -5 0" /><Path d="M8 9l2 2" /><Path d="M10 9l-2 2" /><Path d="M14 9l2 2" /><Path d="M16 9l-2 2" /></Svg>;
}
export default IconMoodSmileDizzy;