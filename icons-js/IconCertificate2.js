import Svg, { Path } from 'react-native-svg';
                    
function IconCertificate2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M10 7h4" /><Path d="M10 18v4l2 -1l2 1v-4" /><Path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" /></Svg>;

}
export default IconCertificate2;
                    