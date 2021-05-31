import * as React from "react"
import BnrArt from "../atoms/BnrArt"
import MainContentsArea02 from "./MainContentsArea02"
import * as styles from "./ContentsInner.module.scss"
import PagerArea from "./PagerArea"

const ContentsInner = ({ children }) => {
  return (
    <div className={styles.contents_inner}>
      <MainContentsArea02>
        <div className={styles.main_contents_area_top}></div>
        {children}
        <div className={styles.main_contents_area_bottom}></div>
        {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
        <PagerArea hrefPrev="" hrefNext="./marine-metropolitan-areas/" isDisabledPrev={true} isDisabledNext={false} number={1} />
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </MainContentsArea02>
    </div>
  )
}
export default ContentsInner
