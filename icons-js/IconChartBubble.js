import Svg, { Path } from 'react-native-svg';
                    
function IconChartBubble({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-bubble" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" /></Svg>;

}
export default IconChartBubble;
                    