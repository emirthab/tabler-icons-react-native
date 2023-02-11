import Svg, { Path } from 'react-native-svg';
                    
function IconSpyOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spy-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 11h8m4 0h6" /><Path d="M5 11v-4c0 -.571 .16 -1.105 .437 -1.56m2.563 -1.44h8a3 3 0 0 1 3 3v4" /><Path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M14.88 14.877a3 3 0 1 0 4.239 4.247m.59 -3.414a3.012 3.012 0 0 0 -1.425 -1.422" /><Path d="M10 17h4" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconSpyOff;
                    