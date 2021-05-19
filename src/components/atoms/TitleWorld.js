import * as React from "react"
import * as styles from "./TitleWorld.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const TitleWorld = () => {
  return (
    <div className={styles.img__wrap}>
      <StaticImage
        src="../../assets/images/world/ttl_world.png"
        alt="The World of Blue Hunter"
        layout="fullWidth"
      />
    </div>
  )
}
export default TitleWorld
