import Svg, { Path } from 'react-native-svg';
                    
function IconBuildingStadium({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-stadium" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-8 0a8 2 0 1 0 16 0a8 2 0 1 0 -16 0" /><Path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435 -.225 6 -1.07 6 -2v-7" /><Path d="M15 6h4v-3h-4v7" /><Path d="M7 6h4v-3h-4v7" /></Svg>;

}
export default IconBuildingStadium;
                    