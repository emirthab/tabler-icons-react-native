import Svg, { Path } from 'react-native-svg';
                    
function IconAlignJustified({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-justified" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6l16 0" /><Path d="M4 12l16 0" /><Path d="M4 18l12 0" /></Svg>;

}
export default IconAlignJustified;
                    