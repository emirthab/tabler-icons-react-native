import Svg, { Path } from 'react-native-svg';
                    
function IconMessageOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3l18 18" /><Path d="M17 17h-9l-4 4v-13c0 -1.086 .577 -2.036 1.44 -2.563m3.561 -.437h8a3 3 0 0 1 3 3v6c0 .575 -.162 1.112 -.442 1.568" /></Svg>;

}
export default IconMessageOff;
                    