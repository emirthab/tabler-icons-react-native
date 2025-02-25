import Svg, { Path } from 'react-native-svg';
                    
function IconHeartRateMonitor({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-rate-monitor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><Path d="M7 20h10" /><Path d="M9 16v4" /><Path d="M15 16v4" /><Path d="M7 10h2l2 3l2 -6l1 3h3" /></Svg>;

}
export default IconHeartRateMonitor;
                    