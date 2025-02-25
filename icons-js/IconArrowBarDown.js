import Svg, { Path } from 'react-native-svg';
                    
function IconArrowBarDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 20l0 -10" /><Path d="M12 20l4 -4" /><Path d="M12 20l-4 -4" /><Path d="M4 4l16 0" /></Svg>;

}
export default IconArrowBarDown;
                    