import Svg, { Path } from 'react-native-svg';
                    
function IconWorldCode({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-code" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" /><Path d="M3.6 9h16.8" /><Path d="M3.6 15h9.9" /><Path d="M11.5 3a17 17 0 0 0 0 18" /><Path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" /><Path d="M20 21l2 -2l-2 -2" /><Path d="M17 17l-2 2l2 2" /></Svg>;

}
export default IconWorldCode;
                    