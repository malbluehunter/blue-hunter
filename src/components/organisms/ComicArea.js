import * as React from "react"
import * as styles from "./ComicArea.module.scss"

const ComicArea = props => {
  const { src } = props

  const listItem = [...src]

  return (
    <div className={styles.comic_wrapper}>
      {listItem.map((item, index) => (
        <img src={item} alt={`マンガイメージ${index + 1}`} loading="lazy" />
      ))}
    </div>
  )
}

export default ComicArea
