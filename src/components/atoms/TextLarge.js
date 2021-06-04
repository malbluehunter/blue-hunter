// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import React, { useState, useEffect } from "react"
import * as styles from "./TextLarge.module.scss"

const TextLarge = props => {
  const { text } = props

  return <p className={styles.text}>{text}</p>
}

export default TextLarge
