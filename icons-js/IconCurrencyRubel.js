import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyRubel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-rubel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 19v-14h6a3 3 0 0 1 0 6h-8" /><Path d="M14 15h-8" /></Svg>;

}
export default IconCurrencyRubel;
                    