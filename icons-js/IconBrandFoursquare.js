import Svg, { Path } from 'react-native-svg';
                    
function IconBrandFoursquare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-foursquare" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3h10c.644 0 1.11 .696 .978 1.33l-1.984 9.859a1.014 1.014 0 0 1 -1 .811h-2.254c-.308 0 -.6 .141 -.793 .382l-4.144 5.25c-.599 .752 -1.809 .331 -1.809 -.632v-16c0 -.564 .44 -1 1 -1z" /><Path d="M12 9l5 0" /></Svg>;

}
export default IconBrandFoursquare;
                    