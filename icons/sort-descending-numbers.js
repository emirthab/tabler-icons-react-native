import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconSortDescendingNumbers({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-descending-numbers" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 15l3 3l3 -3" /><Path d="M7 6v12" /><Path d="M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" /><Circle cx={17} cy={5} r={2} /><Path d="M19 5v3a2 2 0 0 1 -2 2h-1.5" /></Svg>;
}
export default IconSortDescendingNumbers;