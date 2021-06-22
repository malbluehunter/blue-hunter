import React, { useState, useEffect } from "react"
import * as styles from "./TextMediumTrim.module.scss"

const TextMediumTrim = props => {
  const { children } = props
  const maxLength = 200
  let isHidden = false
  const [newsText, setNewsText] = useState(children)
  const [isOpen, setIsOpen] = useState(false)

  children.length < maxLength ? (isHidden = true) : (isHidden = false)

  const trimText = () => {
    function truncate(str, len) {
      return str.length <= len ? str : str.substr(0, len) + "..."
    }
    setNewsText(truncate(newsText, maxLength))
  }

  useEffect(() => {
    trimText()
  }, [])

  const displayText = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
    isOpen ? trimText() : setNewsText(children)
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
                ＜Read More＞
              </p>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default TextMediumTrim
