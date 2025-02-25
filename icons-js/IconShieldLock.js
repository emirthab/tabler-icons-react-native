import Svg, { Path } from 'react-native-svg';
                    
function IconShieldLock({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-lock" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" /><Path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 12l0 2.5" /></Svg>;

}
export default IconShieldLock;
                    