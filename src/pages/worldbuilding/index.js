import React, { useEffect } from "react"
import TitleWorld from "../../components/atoms/TitleWorld"
import Bread from "../../components/molecules/Bread"
import Header from "../../components/templates/Header"
import * as styles from "./index.module.scss"
import Heading from "../../components/atoms/Heading"
import { StaticImage } from "gatsby-plugin-image"
import ContentsTopText from "../../components/atoms/ContentsTopText"
import ContentsLine from "../../components/atoms/ContentsLine"
import ContentsAreaText from "../../components/atoms/ContentsAreaText"
import Pager from "../../components/molecules/Pager"
import WorldBnr from "../../components/atoms/WorldBnr"
import Footer from "../../components/templates/Footer"
import LocalNav from "../../components/templates/LocalNav"

const WorldbuildingTop = () => {
  useEffect(() => {
    const contents = document.getElementsByClassName("contents_area_inner")
    const contentsHight = contents.offsetHight
    console.log(contentsHight)
  })

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div className={styles.contents_wrapper}>
          <TitleWorld />
          <div className={styles.bread_area}>
            <Bread
              page01="TOP"
              page02="The World of BH"
              page03="Background - 0.予備知識としてのCCZ"
            />
          </div>
          <div className={styles.contents_inner}>
            <div className={styles.main_contents_area}>
              <div className={styles.main_contents_area_top}>
                <ContentsTopText text="Background" />
                <div className={styles.heading}>
                  <Heading text="0.予備知識としてのCCZ" />
                </div>
                <div className={styles.line}>
                  <ContentsLine />
                </div>
              </div>
              <div className={styles.main_contents_area_inner}>
                <ContentsAreaText text="2020年現在、ハワイ南東沖にあるクラリオン断層帯とクリッパートン断層帯に囲まれたCCZ（クラリオン・クリッパートン領域）は、鉱物資源であるマンガン団塊が豊富に存在し、海洋法に基づく国際海底機構（本部はジャマイカ）がその採掘権を管理している。⽇本も⼀部、採掘権を⺠間企業DORD経由で取得。他に英国、ロシア、ドイツ、フランス、インド、中国、韓国など。アメリカは海洋法を批准しないが、独⾃のルートにて採掘権を主張している。" />
                <div className={styles.img__wrap}>
                  <StaticImage
                    src="../../assets/images/world/world_img_01.png"
                    alt=""
                    layout="fullWidth"
                  />
                </div>
              </div>
              <div className={styles.main_contents_area_bottom}></div>
              <Pager />
              <div className={styles.bnr_area}>
                <WorldBnr />
              </div>
            </div>
            <div className={styles.localNav_area}>
              <LocalNav />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WorldbuildingTop
