import Svg, { Path } from 'react-native-svg';
                    
function IconTransitionTop({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transition-top" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3" /><Path d="M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6z" /><Path d="M12 15v-8" /><Path d="M9 10l3 -3l3 3" /></Svg>;

}
export default IconTransitionTop;
                    