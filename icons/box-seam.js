import Svg, { Path, Polyline, Line } from "react-native-svg";

const IconBoxSeam = (size = 24, color = "#232e46", stroke = 2, ...props) => <Svg className="icon icon-tabler icon-tabler-box-seam" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><Line x1={12} y1={12} x2={20} y2={7.5} /><Line x1={12} y1={12} x2={12} y2={21} /><Line x1={12} y1={12} x2={4} y2={7.5} /><Line x1={16} y1={5.25} x2={8} y2={9.75} /></Svg>;

export default IconBoxSeam;