import Svg, { Path } from 'react-native-svg';
                    
function IconColumns({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-columns" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6l5.5 0" /><Path d="M4 10l5.5 0" /><Path d="M4 14l5.5 0" /><Path d="M4 18l5.5 0" /><Path d="M14.5 6l5.5 0" /><Path d="M14.5 10l5.5 0" /><Path d="M14.5 14l5.5 0" /><Path d="M14.5 18l5.5 0" /></Svg>;

}
export default IconColumns;
                    