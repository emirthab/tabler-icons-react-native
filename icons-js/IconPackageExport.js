import Svg, { Path } from 'react-native-svg';
                    
function IconPackageExport({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package-export" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" /><Path d="M12 12l8 -4.5" /><Path d="M12 12v9" /><Path d="M12 12l-8 -4.5" /><Path d="M15 18h7" /><Path d="M19 15l3 3l-3 3" /></Svg>;

}
export default IconPackageExport;
                    