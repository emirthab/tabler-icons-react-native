import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCurrencyLitecoin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-litecoin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717" /><Path d="M14 9l-9 4" /></Svg>;
}
export default IconCurrencyLitecoin;