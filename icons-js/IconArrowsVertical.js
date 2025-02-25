import Svg, { Path } from 'react-native-svg';
                    
function IconArrowsVertical({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 7l4 -4l4 4" /><Path d="M8 17l4 4l4 -4" /><Path d="M12 3l0 18" /></Svg>;

}
export default IconArrowsVertical;
                    