import Svg, { Path } from 'react-native-svg';
                    
function IconViewportNarrow({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-viewport-narrow" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h7l-3 -3m0 6l3 -3" /><Path d="M21 12h-7l3 -3m0 6l-3 -3" /><Path d="M9 6v-3h6v3" /><Path d="M9 18v3h6v-3" /></Svg>;

}
export default IconViewportNarrow;
                    