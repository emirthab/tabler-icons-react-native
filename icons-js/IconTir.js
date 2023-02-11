import Svg, { Path } from 'react-native-svg';
                    
function IconTir({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tir" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5" /><Path d="M12 18v-13h3" /><Path d="M3 17l0 -5l9 0" /></Svg>;

}
export default IconTir;
                    