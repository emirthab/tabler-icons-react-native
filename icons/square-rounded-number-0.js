import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSquareRoundedNumber0({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-number-0" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" /><Path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></Svg>;
}
export default IconSquareRoundedNumber0;