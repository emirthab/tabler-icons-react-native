import Svg, { Path } from 'react-native-svg';
                    
function IconGitPullRequestClosed({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-pull-request-closed" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M6 8v8" /><Path d="M18 11v5" /><Path d="M16 4l4 4m0 -4l-4 4" /></Svg>;

}
export default IconGitPullRequestClosed;
                    