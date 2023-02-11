import Svg, { Path } from 'react-native-svg';
                    
function IconShape2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M6.5 17.5l11 -11m-12.5 .5v10m14 -10v10" /></Svg>;

}
export default IconShape2;
                    