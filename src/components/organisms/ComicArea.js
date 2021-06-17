import * as React from "react"
import * as styles from "./ComicArea.module.scss"

const ComicArea = props => {
  const { src } = props

  const listItem = [...src]

  return (
    <div className={styles.comic_wrapper}>
      {listItem.map((item, index) => (
        <picture>
          <source type="image/webp" srcset={`${item}.webp`} />
          <img src={`${item}.png`} alt={`マンガイメージ${index + 1}`} loading="lazy" />
        </picture>
      ))}
    </div>
  )
}

export default ComicArea
