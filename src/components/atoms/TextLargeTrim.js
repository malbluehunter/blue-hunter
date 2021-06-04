// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import React, { useState, useEffect } from "react"
import * as styles from "./TextLargeTrim.module.scss"

const TextLargeTrim = props => {
  const { text } = props
  const [trimText, setTrimText] = useState(text)

  useEffect(() => {
    var window_w = window.innerWidth
    let replaceText = text.replace(/\//g, "\n")

    if (window_w < 780) {
      setTrimText(replaceText)
    }
  }, [])

  return <p className={styles.text}>{trimText}</p>
}

export default TextLargeTrim
