import Svg, { Path } from 'react-native-svg';
                    
function IconArrowsMaximize({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-maximize" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 4l4 0l0 4" /><Path d="M14 10l6 -6" /><Path d="M8 20l-4 0l0 -4" /><Path d="M4 20l6 -6" /><Path d="M16 20l4 0l0 -4" /><Path d="M14 14l6 6" /><Path d="M8 4l-4 0l0 4" /><Path d="M4 4l6 6" /></Svg>;

}
export default IconArrowsMaximize;
                    