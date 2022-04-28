import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={210}
    height={220}
    viewBox="0 0 210 190"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
    <rect x="0" y="100" rx="3" ry="3" width="150" height="15" /> 
    <rect x="0" y="120" rx="3" ry="3" width="90" height="15" /> 
    <rect x="0" y="150" rx="8" ry="8" width="80" height="32" /> 
    <rect x="118" y="150" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
)

export default MyLoader