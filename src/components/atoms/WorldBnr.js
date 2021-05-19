import * as React from "react"
import * as styles from "./WorldBnr.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const WorldBnr = () => {
  return (
    <div className={styles.img__wrap}>
      <StaticImage
        src="../../assets/images/world/bnr_world.png"
        alt=""
        layout="fullWidth"
      />
    </div>
  )
}
export default WorldBnr
