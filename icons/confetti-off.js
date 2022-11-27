import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconConfettiOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-confetti-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 5h1" /><Path d="M5 5v1" /><Path d="M11.5 4l-.5 2" /><Path d="M18 5h2" /><Path d="M19 4v2" /><Path d="M15 9l-1 1" /><Path d="M18 13l2 -.5" /><Path d="M18 19h1" /><Path d="M19 19v1" /><Path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39v-.001z" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconConfettiOff;