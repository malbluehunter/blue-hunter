import * as React from "react"
import * as styles from "./ScrollToTop.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const ScrollToTop = () => {
  function handleClick() {
    function getScrolled() {
      return window.pageYOffset !== undefined
        ? window.pageYOffset
        : document.documentElement.scrollTop
    }

    //トップに移動する関数
    function scrollToTop() {
      let scrolled = getScrolled()
      window.scrollTo(0, Math.floor(scrolled / 2))
      if (scrolled > 0) {
        window.setTimeout(scrollToTop, 40)
      }
    }
    scrollToTop();
  }

  return (
    <div className={styles.img__wrap} onClick={handleClick}>
      <StaticImage
        src="../../assets/images/common/btn_scroll_top.png"
        alt="PAGE TOP"
        layout="fullWidth"
      />
    </div>
  )
}
export default ScrollToTop
