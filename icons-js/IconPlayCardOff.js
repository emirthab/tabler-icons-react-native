import Svg, { Path } from 'react-native-svg';
                    
function IconPlayCardOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-play-card-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" /><Path d="M16 18h.01" /><Path d="M13.716 13.712l-1.716 2.288l-3 -4l1.29 -1.72" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconPlayCardOff;
                    