import Svg, { Path, Rect } from "react-native-svg";

function IconBrandIntercom({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-intercom" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M7 8v3" /><Path d="M10 7v6" /><Path d="M14 7v6" /><Path d="M17 8v3" /><Path d="M7 15c4 2.667 6 2.667 10 0" /></Svg>;
}

export default IconBrandIntercom;