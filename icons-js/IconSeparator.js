import Svg, { Path } from 'react-native-svg';
                    
function IconSeparator({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-separator" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12l0 .01" /><Path d="M7 12l10 0" /><Path d="M21 12l0 .01" /></Svg>;

}
export default IconSeparator;
                    