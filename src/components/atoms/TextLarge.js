// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import React, { useState, useEffect } from "react"
import * as styles from "./TextLarge.module.scss"

const TextLarge = props => {
  const { text } = props
  const [trimText, setTrimText] = useState(text)

  useEffect(() => {
    var window_w = window.innerWidth
    let hoge = text.replace(/\//g, "\n")

    if (window_w < 780) {
      setTrimText(hoge)
    }
  }, [])

  return <p className={styles.text}>{trimText}</p>
}

export default TextLarge
