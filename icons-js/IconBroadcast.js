import Svg, { Path } from 'react-native-svg';
                    
function IconBroadcast({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-broadcast" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18.364 19.364a9 9 0 1 0 -12.728 0" /><Path d="M15.536 16.536a5 5 0 1 0 -7.072 0" /><Path d="M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></Svg>;

}
export default IconBroadcast;
                    