import Svg, { Path } from 'react-native-svg';
                    
function IconCircleChevronsUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-chevrons-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15l3 -3l3 3" /><Path d="M9 11l3 -3l3 3" /><Path d="M12 21a9 9 0 1 0 -.265 0l.265 0z" /></Svg>;

}
export default IconCircleChevronsUp;
                    