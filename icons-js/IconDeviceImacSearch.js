import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceImacSearch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-imac-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 17h-7a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" /><Path d="M3 13h10" /><Path d="M8 21h4" /><Path d="M10 17l-.5 4" /><Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M20.2 20.2l1.8 1.8" /></Svg>;

}
export default IconDeviceImacSearch;
                    