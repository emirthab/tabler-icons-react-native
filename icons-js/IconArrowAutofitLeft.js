import Svg, { Path } from 'react-native-svg';
                    
function IconArrowAutofitLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" /><Path d="M20 18h-17" /><Path d="M6 15l-3 3l3 3" /></Svg>;

}
export default IconArrowAutofitLeft;
                    