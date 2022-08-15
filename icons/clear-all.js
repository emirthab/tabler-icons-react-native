import Svg, { Path } from "react-native-svg";

function IconClearAll({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clear-all" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 6h12" /><Path d="M6 12h12" /><Path d="M4 18h12" /></Svg>;
}

export default IconClearAll;