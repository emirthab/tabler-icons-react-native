import Svg, { Path } from 'react-native-svg';
                    
function IconCurrencyDollarSingapore({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-dollar-singapore" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" /><Path d="M10 6h-4a3 3 0 1 0 0 6h1a3 3 0 0 1 0 6h-4" /><Path d="M17 20v-2" /><Path d="M18 6v-2" /></Svg>;

}
export default IconCurrencyDollarSingapore;
                    