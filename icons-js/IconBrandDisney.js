import Svg, { Path } from 'react-native-svg';
                    
function IconBrandDisney({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-disney" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3.22 5.838c-1.307 -.15 -1.22 -.578 -1.22 -.794c0 -.216 .424 -1.044 4.34 -1.044c4.694 0 14.66 3.645 14.66 10.042s-8.71 4.931 -10.435 4.52c-1.724 -.412 -5.565 -2.256 -5.565 -4.174c0 -1.395 3.08 -2.388 6.715 -2.388c3.634 0 5.285 1.041 5.285 2c0 .5 -.074 1.229 -1 1.5" /><Path d="M10.02 8a505.153 505.153 0 0 0 0 13" /></Svg>;

}
export default IconBrandDisney;
                    