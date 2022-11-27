import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandOkRu({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-ok-ru" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={9} r={2} /><Path d="M20 12c0 8 0 8 -8 8s-8 0 -8 -8s0 -8 8 -8s8 0 8 8z" /><Path d="M9.5 13c1.333 .667 3.667 .667 5 0" /><Path d="M9.5 17l2.5 -3l2.5 3" /><Path d="M12 13.5v.5" /></Svg>;
}
export default IconBrandOkRu;