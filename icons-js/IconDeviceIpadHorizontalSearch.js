import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceIpadHorizontalSearch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-ipad-horizontal-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11.5 20h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" /><Path d="M9 17h2" /><Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M20.2 20.2l1.8 1.8" /></Svg>;

}
export default IconDeviceIpadHorizontalSearch;
                    