import Svg, { Path } from 'react-native-svg';
                    
function IconArrowBackUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 14l-4 -4l4 -4" /><Path d="M5 10h11a4 4 0 1 1 0 8h-1" /></Svg>;

}
export default IconArrowBackUp;
                    