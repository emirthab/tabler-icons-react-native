import Svg, { Path } from 'react-native-svg';
                    
function IconArrowsMove({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-move" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 9l3 3l-3 3" /><Path d="M15 12h6" /><Path d="M6 9l-3 3l3 3" /><Path d="M3 12h6" /><Path d="M9 18l3 3l3 -3" /><Path d="M12 15v6" /><Path d="M15 6l-3 -3l-3 3" /><Path d="M12 3v6" /></Svg>;

}
export default IconArrowsMove;
                    