import Svg, { Path, Rect } from "react-native-svg";

function IconSquare7({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-7" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 8h4l-2 8" /><Rect x={4} y={4} width={16} height={16} rx={2} /></Svg>;
}

export default IconSquare7;