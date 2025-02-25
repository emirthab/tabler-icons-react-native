import Svg, { Path } from 'react-native-svg';
                    
function IconZodiacPisces({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-pisces" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 3a21 21 0 0 1 0 18" /><Path d="M19 3a21 21 0 0 0 0 18" /><Path d="M5 12l14 0" /></Svg>;

}
export default IconZodiacPisces;
                    