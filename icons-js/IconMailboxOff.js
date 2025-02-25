import Svg, { Path } from 'react-native-svg';
                    
function IconMailboxOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mailbox-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18m0 -4v-2a4 4 0 0 0 -4 -4h-2m-4 0h-4.5" /><Path d="M12 8v-5h4l2 2l-2 2h-4" /><Path d="M6 15h1" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconMailboxOff;
                    