import Svg, { Path } from 'react-native-svg';
                    
function IconToolsKitchen({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 3h8l-1 9h-6z" /><Path d="M7 18h2v3h-2z" /><Path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" /><Path d="M20 15v6h-1v-3" /><Path d="M8 12l0 6" /></Svg>;

}
export default IconToolsKitchen;
                    