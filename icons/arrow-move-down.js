import Svg, { Path, Circle } from "react-native-svg";

function IconArrowMoveDown({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-move-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 11v10" /><Path d="M9 18l3 3l3 -3" /><Circle cx={12} cy={5} r={2} /></Svg>;
}

export default IconArrowMoveDown;