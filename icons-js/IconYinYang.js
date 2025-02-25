import Svg, { Path, Circle } from 'react-native-svg';
                    
function IconYinYang({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-yin-yang" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" /><Circle cx="12" cy="7.5" r=".5" fill={color} /><Circle cx="12" cy="16.5" r=".5" fill={color} /></Svg>;

}
export default IconYinYang;
                    