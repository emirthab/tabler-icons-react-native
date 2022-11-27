import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconSlashes({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-slashes" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 5l-10 14" /><Path d="M20 5l-10 14" /></Svg>;
}
export default IconSlashes;