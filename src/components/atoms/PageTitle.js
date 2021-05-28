import * as React from "react"

const PageTitle = props => {
  const { src, alt } = props

  return <img src={src} alt={alt} />
}
export default PageTitle
