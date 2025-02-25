import Svg, { Path } from 'react-native-svg';
                    
function IconMatchstick({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-matchstick" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21l14 -9" /><Path d="M17 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M17 3l3.62 7.29a4.007 4.007 0 0 1 -.764 4.51a4 4 0 0 1 -6.493 -4.464l3.637 -7.336z" /></Svg>;

}
export default IconMatchstick;
                    