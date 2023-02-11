import Svg, { Path } from 'react-native-svg';
                    
function IconBrandQq({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-qq" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 7h.01" /><Path d="M10 7h.01" /><Path d="M6 11c4 4 8 4 12 0" /><Path d="M9 13.5v2.5" /><Path d="M10.5 10c.667 1.333 2.333 1.333 3 0h-3z" /><Path d="M16 21c1.5 0 3.065 -1 1 -3c4.442 2 1.987 -4.5 1 -7c0 -4 -1.558 -8 -6 -8s-6 4 -6 8c-.987 2.5 -3.442 9 1 7c-2.065 2 -.5 3 1 3h8z" /></Svg>;

}
export default IconBrandQq;
                    