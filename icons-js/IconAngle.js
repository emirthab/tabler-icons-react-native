import Svg, { Path } from 'react-native-svg';
                    
function IconAngle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-angle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 19h-18l9 -15" /><Path d="M20.615 15.171h.015" /><Path d="M19.515 11.771h.015" /><Path d="M17.715 8.671h.015" /><Path d="M15.415 5.971h.015" /></Svg>;

}
export default IconAngle;
                    