import * as React from "react"
import * as styles from "./ScrollToTop02.module.scss"

const ScrollToTop02 = () => {
  function handleClick() {
    function getScrolled() {
      return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
    }

    //トップに移動する関数
    function scrollToTop() {
      let scrolled = getScrolled()
      window.scrollTo(0, Math.floor(scrolled / 2))
      if (scrolled > 0) {
        window.setTimeout(scrollToTop, 40)
      }
    }
    scrollToTop()
  }

  return (
    <div className={styles.img__wrap} onClick={handleClick}>
      <img src="/common/btn_scroll_top.png" alt="PAGE TOP" />
    </div>
  )
}
export default ScrollToTop02
