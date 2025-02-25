import Svg, { Path } from 'react-native-svg';
                    
function IconBrandVue({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-vue" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.5 4l-4.5 8l-4.5 -8" /><Path d="M3 4l9 16l9 -16" /></Svg>;

}
export default IconBrandVue;
                    