import Svg, { Path } from 'react-native-svg';
                    
function IconEqualNot({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-equal-not" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 10h14" /><Path d="M5 14h14" /><Path d="M5 19l14 -14" /></Svg>;

}
export default IconEqualNot;
                    