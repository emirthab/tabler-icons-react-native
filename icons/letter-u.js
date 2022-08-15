import Svg, { Path } from "react-native-svg";

function IconLetterU({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-u" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-11" /></Svg>;
}

export default IconLetterU;