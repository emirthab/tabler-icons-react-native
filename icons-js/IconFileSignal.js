import Svg, { Path } from 'react-native-svg';
                    
function IconFileSignal({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-signal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><Path d="M12 14v.01" /><Path d="M9.525 11.525a3.5 3.5 0 0 0 0 4.95m4.95 0a3.5 3.5 0 0 0 0 -4.95" /></Svg>;

}
export default IconFileSignal;
                    