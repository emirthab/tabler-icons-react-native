import Svg, { Path } from 'react-native-svg';
                    
function IconLetterJ({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-j" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 4v12a4 4 0 0 1 -4 4h-2a4 4 0 0 1 -4 -4" /></Svg>;

}
export default IconLetterJ;
                    