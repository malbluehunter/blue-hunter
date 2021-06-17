import React, { useEffect, useState } from "react"
import * as styles from "./index02.module.scss"
import { Helmet } from "react-helmet"
import PageTitle from "../../../components/atoms/PageTitle"
import BreadShort from "../../../components/molecules/BreadShort"
import MainContentsMiddle from "../../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../../components/templates/LayoutTwoColumnEn"
import TextHeading from "../../../components/atoms/TextHeading"
import TextMedium from "../../../components/atoms/TextMedium"
import LineImg from "../../../components/atoms/LineImg"
import LineImgSp from "../../../components/atoms/LineImgSp"
import BnrArt from "../../../components/atoms/BnrArtEn"
import TextAnnotation from "../../../components/atoms/TextAnnotation"
import ButtonLiquid from "../../../components/atoms/ButtonLiquid"

const SpecialPage = ({ location }) => {
  const [src, setSrc] = useState([])

  useEffect(() => {
    fetch(process.env.GATSBY_ACCESS_TOKEN).then(response => {
      response
        .json() //ここでbodyからJSONを返す
        .then(result => {
          setSrc(result.data)
        })
        .catch(e => {
          console.log(e)
        })
    })
  }, [])

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>Special | BLUE HUNTER Official Site</title>
        <meta
          name="description"
          content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here."
        />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/special/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/special/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.webp" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" /><meta name="robots" content="noindex" />
      </Helmet>

      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/special/ttl_special.png" alt="Special" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/en/" page02="Special" />
        <div className={styles.contents_01}>
          <ContentsInner>
            <MainContentsMiddle>
              <div className={styles.contents_inner}>
                <div className={styles.textHeading_wrapper}>
                  <TextHeading text={"Take part in a contest for Blue Hunter-related art!"} />
                </div>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium text="ブルーハンターをテーマにしたアートコンペを開催中です。詳しくは以下をご覧ください。" />
                </div>
                <div className={styles.bnr_wrapper}>
                  <BnrArt />
                </div>
              </div>
            </MainContentsMiddle>
          </ContentsInner>
        </div>
        <div className={styles.contents_02}>
          <ContentsInner>
            <MainContentsMiddle>
              <div className={styles.contents_inner}>
                <TextHeading text="Contest Entries" />
                <div className={styles.leading_wrapper}>
                  <TextAnnotation text="See entries in order of popularity" />
                </div>
              </div>
            </MainContentsMiddle>
          </ContentsInner>
        </div>
        <div className={styles.insta_area}>
          <div className={styles.insta_inner}>
            {/* インスタ40件のデータを表示 */}
            {src.map((srcItem, index) =>
              srcItem.media_type == "CAROUSEL_ALBUM" ? ( // 画像が複数の場合
                srcItem.children.data[0].media_type == "IMAGE" ? ( // 複数画像かつ画像がイメージの場合
                  <a href={srcItem.children.data[0].permalink} key={index} className={styles.insta_link}>
                    <img src={srcItem.children.data[0].media_url} className={styles.insta_img} />
                  </a>
                ) : (
                  // 複数画像かつ画像が動画の場合
                  <a href={srcItem.children.data[0].permalink} key={index} className={styles.insta_link}>
                    <video src={srcItem.children.data[0].media_url} className={styles.insta_img} />
                  </a>
                )
              ) : srcItem.media_type == "IMAGE" ? ( // 画像が1枚の場合
                <a href={srcItem.permalink} key={index} className={styles.insta_link}>
                  <img src={srcItem.media_url} className={styles.insta_img} />
                </a>
              ) : (
                // 画像が1枚かつ動画の場合
                <a href={srcItem.permalink} key={index} className={styles.insta_link}>
                  <video src={srcItem.media_url} className={styles.insta_img} />
                </a>
              )
            )}
          </div>
        </div>
        <div className={styles.btn_wrapper}>
          <ButtonLiquid href="#">
            <div className={styles.btn_innner}>
              <div className={styles.text_wrapper}>
                <p className={styles.btn_text}>See more with the #bh_mal tag</p>
              </div>
              <div className={styles.icon_wrapper}>
                <img src="/common/icon_instagram_02.svg" alt="インスタグラム アイコン" className={styles.icon} />
              </div>
            </div>
          </ButtonLiquid>
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default SpecialPage
