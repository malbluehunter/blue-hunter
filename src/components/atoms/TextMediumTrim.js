// import { getMainProps } from "gatsby-plugin-image/dist/src/components/hooks"
import React, { useState, useEffect } from "react"
import * as styles from "./TextMediumTrim.module.scss"

const TextMediumTrim = props => {
  const { text } = props
  const maxLength = 200
  let isHidden = false
  const [newsText, setNewsText] = useState(text)
  const [isOpen, setIsOpen] = useState(false)

  text.length < maxLength ? (isHidden = true) : (isHidden = false)

  const trimText = () => {
    let string = newsText.replace(/\s+/g, "")
    function truncate(str, len) {
      return str.length <= len ? str : str.substr(0, len) + "..."
    }
    setNewsText(truncate(string, maxLength))
  }

  useEffect(() => {
    trimText()
  }, [])

  const displayText = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
    isOpen ? trimText() : setNewsText(text)
  }

  return (
    <>
      <p className={styles.text}>{newsText}</p>
      {isHidden ? (
        ""
      ) : (
        <>
          {isOpen ? (
            ""
          ) : (
            <div className={styles.next_read_wrapper}>
              <p className={styles.next_read} onClick={displayText}>
                ＜続きを読む＞
              </p>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default TextMediumTrim
