import Svg, { Path } from 'react-native-svg';
                    
function IconAccessPointOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-access-point-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3l18 18" /><Path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" /><Path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" /><Path d="M9.168 14.828a4 4 0 0 1 0 -5.656" /><Path d="M6.337 17.657a8 8 0 0 1 0 -11.314" /></Svg>;

}
export default IconAccessPointOff;
                    