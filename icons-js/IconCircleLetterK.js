import Svg, { Path } from 'react-native-svg';
                    
function IconCircleLetterK({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-k" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M10 8v8" /><Path d="M14 8l-2.5 4l2.5 4" /><Path d="M10 12h1.5" /></Svg>;

}
export default IconCircleLetterK;
                    