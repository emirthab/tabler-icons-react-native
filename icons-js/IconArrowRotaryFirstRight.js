import Svg, { Path } from 'react-native-svg';
                    
function IconArrowRotaryFirstRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-rotary-first-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M8 10v10" /><Path d="M10.5 9.5l8.5 8.5" /><Path d="M14 18h5v-5" /></Svg>;

}
export default IconArrowRotaryFirstRight;
                    