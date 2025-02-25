import Svg, { Path } from 'react-native-svg';
                    
function IconCodeAsterix({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code-asterix" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" /><Path d="M12 11.875l3 -1.687" /><Path d="M12 11.875v3.375" /><Path d="M12 11.875l-3 -1.687" /><Path d="M12 11.875l3 1.688" /><Path d="M12 8.5v3.375" /><Path d="M12 11.875l-3 1.688" /><Path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" /></Svg>;

}
export default IconCodeAsterix;
                    