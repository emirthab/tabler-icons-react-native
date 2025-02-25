import Svg, { Path } from 'react-native-svg';
                    
function IconBallpenOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ballpen-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 6l7 7l-2 2" /><Path d="M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4l4.172 -4.172" /><Path d="M16 12l4.414 -4.414a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-4.414 4.414" /><Path d="M4 20l1.768 -1.768" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBallpenOff;
                    