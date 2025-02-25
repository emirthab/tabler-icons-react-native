import Svg, { Path } from 'react-native-svg';
                    
function IconFishHookOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-fish-hook-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 9v3m-.085 3.924a5 5 0 0 1 -9.915 -.924v-4l3 3" /><Path d="M16 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M16 5v-2" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconFishHookOff;
                    