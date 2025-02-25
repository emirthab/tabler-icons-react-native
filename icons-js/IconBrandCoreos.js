import Svg, { Path } from 'react-native-svg';
                    
function IconBrandCoreos({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-coreos" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" /><Path d="M12 3c-3.263 3.212 -3 7.654 -3 12c4.59 .244 8.814 -.282 12 -3" /><Path d="M9.5 9a4.494 4.494 0 0 1 5.5 5.5" /></Svg>;

}
export default IconBrandCoreos;
                    