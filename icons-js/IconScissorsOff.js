import Svg, { Path } from 'react-native-svg';
                    
function IconScissorsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scissors-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.432 4.442a3 3 0 1 0 4.114 4.146" /><Path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M8.6 15.4l3.4 -3.4m2 -2l5 -5" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconScissorsOff;
                    