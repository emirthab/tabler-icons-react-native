import Svg, { Path } from 'react-native-svg';
                    
function IconSquareF1Filled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-f1-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-8.333 6h-2l-.117 .007a1 1 0 0 0 -.876 .876l-.007 .117v6l.007 .117a1 1 0 0 0 .876 .876l.117 .007l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117v-2h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007h-1v-1h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm5.994 .886c-.083 -.777 -1.008 -1.16 -1.617 -.67l-.084 .077l-2 2l-.083 .094a1 1 0 0 0 0 1.226l.083 .094l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l.293 -.293v3.586l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-6l-.006 -.114z" stroke-width="0" fill="currentColor" /></Svg>;

}
export default IconSquareF1Filled;
                    