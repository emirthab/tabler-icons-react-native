import Svg, { Path, Circle } from "react-native-svg";

function IconStethoscope({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stethoscope" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" /><Path d="M8 15a6 6 0 1 0 12 0v-3" /><Path d="M11 3v2" /><Path d="M6 3v2" /><Circle cx={20} cy={10} r={2} /></Svg>;
}

export default IconStethoscope;