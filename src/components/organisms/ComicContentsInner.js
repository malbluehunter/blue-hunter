import * as React from "react"
import * as styles from "./ComicContentsInner.module.scss"
import LocalNavComic from "../templates/LocalNavComic"
import BnrArt from "../atoms/BnrArt"
import MainContentsAreaComic from "./MainContentsAreaComic"

const ComicContentsInner = ({ children }) => {
  return (
    <div className={styles.contents_inner}>
      <MainContentsAreaComic>
        {children}
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </MainContentsAreaComic>
      <LocalNavComic />
    </div>
  )
}
export default ComicContentsInner
