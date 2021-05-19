import * as React from "react"
import TitleWorld from "../../components/atoms/TitleWorld"
import Bread from "../../components/molecules/Bread"
import Header from "../../components/templates/Header"
import * as styles from "./index.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const worldbuildingTop = ({}) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div className={styles.contents_wraper}>
          <TitleWorld />
          <div className={styles.bread_area}>
            <Bread
              page01="TOP"
              page02="The World of BH"
              page03="Background - 0.予備知識としてのCCZ"
            />
            <div className={styles.contents_area}>
              <div className={styles.contents_area_top}></div>
              <div className={styles.contents_area_inner}>
                <p>
                  あああああああああああああああああ
                  <br />
                  あああああああああああああああああ
                  <br />
                  あああああああああああああああああ
                  <br />
                  あああああああああああああああああ
                  <br />
                  あああああああああああああああああ
                  <br />
                  あああああああああああああああああ
                  <br />
                  あああああああああああああああああ
                  <br />
                  <br />
                  あああああああああああああああああ
                  <br />
                </p>
              </div>
              <div className={styles.contents_area_bottom}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default worldbuildingTop
