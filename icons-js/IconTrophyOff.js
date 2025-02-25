import Svg, { Path } from 'react-native-svg';
                    
function IconTrophyOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trophy-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 21h8" /><Path d="M12 17v4" /><Path d="M8 4h9" /><Path d="M17 4v8c0 .31 -.028 .612 -.082 .905m-1.384 2.632a5 5 0 0 1 -8.534 -3.537v-5" /><Path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconTrophyOff;
                    