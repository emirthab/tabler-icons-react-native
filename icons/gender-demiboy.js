import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconGenderDemiboy({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gender-demiboy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={10} cy={14} r={5} /><Path d="M19 5l-5.4 5.4" /><Path d="M19 5h-5" /></Svg>;
}
export default IconGenderDemiboy;