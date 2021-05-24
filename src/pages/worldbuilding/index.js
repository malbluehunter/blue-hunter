import React, { useEffect } from "react"
import TitleWorld from "../../components/atoms/TitleWorld"
import Bread from "../../components/molecules/Bread"
import Header from "../../components/templates/Header"
import * as styles from "./index.module.scss"
import TextHeading from "../../components/atoms/TextHeading"
import ContentsTopText from "../../components/atoms/ContentsTopText"
import ContentsLine from "../../components/atoms/ContentsLine"
import TextMedium from "../../components/atoms/TextMedium"
import Pager from "../../components/molecules/Pager"
import BnrArt from "../../components/atoms/BnrArt"
import Footer from "../../components/templates/Footer"
import LocalNav from "../../components/templates/LocalNav"
import ScrollToTop from "../../components/atoms/ScrollToTop"
import ContentsLineSp from "../../components/atoms/ContentsLineSp"
import PagerSp from "../../components/molecules/PagerSp"
import TextLeading from "../../components/atoms/TextLeading"
import TextAnnotation from "../../components/atoms/TextAnnotation"
import TextMediumSub from "../../components/atoms/TextMediumSub"

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
        {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
        <div className={styles.contents_wrapper}>
          <TitleWorld />
          <div className={styles.bread_area}>
            {/* パンクズリスト */}
            <Bread page01="TOP" page02="世界観・設定" page03="物語の背景 - 0.予備知識としてのCCZ" />
          </div>
          <div className={styles.contents_inner}>
            <div className={styles.main_contents_area}>
              <div className={styles.main_contents_area_top}>
                <ContentsTopText text="物語の背景" />
              </div>
              <div className={styles.main_contents_area_middle}>
                <div className={styles.main_contents_area_inner}>
                  <div className={styles.heading}>
                    <TextHeading text="0.予備知識としてのCCZ" />
                  </div>
                  <div className={styles.line}>
                    <ContentsLine />
                    <ContentsLineSp />
                  </div>
                  <TextMedium text="2020年現在、ハワイ南東沖にあるクラリオン断層帯とクリッパートン断層帯に囲まれたCCZ（クラリオン・クリッパートン領域）は、鉱物資源であるマンガン団塊が豊富に存在し、海洋法に基づく国際海底機構（本部はジャマイカ）がその採掘権を管理している。⽇本も⼀部、採掘権を⺠間企業DORD経由で取得。他に英国、ロシア、ドイツ、フランス、インド、中国、韓国など。アメリカは海洋法を批准しないが、独⾃のルートにて採掘権を主張している。" />
                  <div className={styles.img_wrapper}>
                    <img src="/world/world_img_01.png" alt="" />
                  </div>
                  <div className={styles.textLeading_wrapper}>
                    <TextLeading text="見出しパターン" />
                  </div>
                  <div className={styles.textMediumSub_wrapper}>
                    <TextMediumSub text="本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン本文パターン。" />
                  </div>
                  <div className={styles.textAnnotation_wrapper}>
                    <TextAnnotation text="＊注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン注釈パターン。" />
                  </div>
                </div>
              </div>
              {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
              <div className={styles.main_contents_area_bottom}></div>
              <div>
                <Pager />
                <PagerSp />
              </div>
              <div className={styles.bnr_area}>
                <BnrArt />
              </div>
            </div>
            <div className={styles.localNav_area}>
              <LocalNav />
            </div>
          </div>
        </div>
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  )
}

export default WorldbuildingTop
