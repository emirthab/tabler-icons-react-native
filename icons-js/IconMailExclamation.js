import Svg, { Path } from 'react-native-svg';
                    
function IconMailExclamation({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-exclamation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 19h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" /><Path d="M3 7l9 6l9 -6" /><Path d="M19 16v3" /><Path d="M19 22v.01" /></Svg>;

}
export default IconMailExclamation;
                    