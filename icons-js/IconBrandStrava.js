import Svg, { Path } from 'react-native-svg';
                    
function IconBrandStrava({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-strava" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 13l-5 -10l-5 10m6 0l4 8l4 -8" /></Svg>;

}
export default IconBrandStrava;
                    