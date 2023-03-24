import Svg, { Path } from 'react-native-svg';
                    
function IconArrowForwardUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-forward-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 14l4 -4l-4 -4" /><Path d="M19 10h-11a4 4 0 1 0 0 8h1" /></Svg>;

}
export default IconArrowForwardUp;
                    