import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="298" rx="0" ry="0" width="280" height="32" /> 
    <circle cx="140" cy="140" r="140" /> 
    <rect x="0" y="346" rx="0" ry="0" width="278" height="90" /> 
    <rect x="4" y="442" rx="0" ry="0" width="47" height="20" /> 
    <rect x="127" y="444" rx="0" ry="0" width="152" height="17" />
  </ContentLoader>
)

export default MyLoader
