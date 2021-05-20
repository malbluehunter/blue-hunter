import * as React from "react"
import * as styles from "./BnrArt.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const BnrArt = () => {
  return (
    <div className={styles.bnr_wrapper}>
      <a href="https://bha.myanimelist.net" className={styles.bnr_link} target="_blank">
        <StaticImage
          src="../../assets/images/world/bnr_world.png"
          alt="アートコンペ作品募集中"
          layout="fullWidth"
          className={styles.bnr_img}
        />
      </a>
    </div>
  )
}
export default BnrArt
