import Svg, { Path } from 'react-native-svg';
                    
function IconDoorEnter({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-door-enter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 12v.01" /><Path d="M3 21h18" /><Path d="M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5" /><Path d="M21 7h-7m3 -3l-3 3l3 3" /></Svg>;

}
export default IconDoorEnter;
                    