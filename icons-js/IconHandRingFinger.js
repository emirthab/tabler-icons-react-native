import Svg, { Path } from 'react-native-svg';
                    
function IconHandRingFinger({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hand-ring-finger" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 13v-2.5a1.5 1.5 0 0 1 3 0v1.5" /><Path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><Path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" /><Path d="M14 12v-6.5a1.5 1.5 0 0 1 3 0v6.5" /></Svg>;

}
export default IconHandRingFinger;
                    