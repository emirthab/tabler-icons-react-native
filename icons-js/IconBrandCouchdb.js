import Svg, { Path } from 'react-native-svg';
                    
function IconBrandCouchdb({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-couchdb" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 12h12v-2a2 2 0 0 1 2 -2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2a2 2 0 0 1 2 2v2z" /><Path d="M6 15h12" /><Path d="M6 18h12" /><Path d="M21 11v7" /><Path d="M3 11v7" /></Svg>;

}
export default IconBrandCouchdb;
                    