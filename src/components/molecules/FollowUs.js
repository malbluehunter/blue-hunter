import * as React from "react"
import * as styles from "./FollowUs.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const FollowUs = () => {
  return (
    <div className={styles.wrapper}>
      <a href="" className={styles.link}>
        <p className={styles.text}>FOLLOW US</p>
        <StaticImage
          src="../../assets/images/common/icon_instagram.svg"
          alt="BLUE HUNTER"
          className={styles.img}
          layout="fullWidth"
        />
      </a>
    </div>
  )
}
export default FollowUs
