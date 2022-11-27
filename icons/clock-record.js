import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconClockRecord({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-record" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.995 12.3a9 9 0 1 0 -8.683 8.694" /><Path d="M12 7v5l2 2" /><Circle cx={19} cy={19} r={3} /></Svg>;
}
export default IconClockRecord;