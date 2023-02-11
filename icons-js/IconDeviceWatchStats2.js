import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceWatchStats2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-watch-stats-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 6m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" /><Path d="M9 18v3h6v-3" /><Path d="M9 6v-3h6v3" /><Path d="M12 10a2 2 0 1 0 2 2" /></Svg>;

}
export default IconDeviceWatchStats2;
                    