import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconHomeDot({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-dot" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" /><Circle cx={19} cy={19} r={3} /><Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771" /></Svg>;
}
export default IconHomeDot;