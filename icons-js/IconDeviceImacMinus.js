import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceImacMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-imac-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v11" /><Path d="M3 13h18" /><Path d="M8 21h4.5" /><Path d="M10 17l-.5 4" /><Path d="M16 19h6" /></Svg>;

}
export default IconDeviceImacMinus;
                    