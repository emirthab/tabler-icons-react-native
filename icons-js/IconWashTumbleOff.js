import Svg, { Path } from 'react-native-svg';
                    
function IconWashTumbleOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wash-tumble-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.116 20.127a2.99 2.99 0 0 1 -2.116 .873h-12a3 3 0 0 1 -3 -3v-12c0 -.827 .335 -1.576 .877 -2.12m3.123 -.88h11a3 3 0 0 1 3 3v11" /><Path d="M17.744 13.74a6 6 0 0 0 -7.486 -7.482m-2.499 1.497a6 6 0 1 0 8.48 8.49" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconWashTumbleOff;
                    