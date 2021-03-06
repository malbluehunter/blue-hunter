import React, { useEffect, useState } from "react"
import * as styles from "./index02.module.scss"
import { Helmet } from "react-helmet"
import PageTitle from "../../components/atoms/PageTitle"
import BreadShort from "../../components/molecules/BreadShort"
import MainContentsMiddle from "../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../components/templates/LayoutTwoColumn"
import TextHeading from "../../components/atoms/TextHeading"
import TextMedium from "../../components/atoms/TextMedium"
import LineImg from "../../components/atoms/LineImg"
import LineImgSp from "../../components/atoms/LineImgSp"
import BnrArt from "../../components/atoms/BnrArt"
import TextAnnotation from "../../components/atoms/TextAnnotation"
import ButtonLiquid from "../../components/atoms/ButtonLiquid"

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
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>スペシャル | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/special/" />
        <meta property="og:url" content="https://manga.uminohi.jp/special/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/special/ttl_special.png" alt="Special" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/" page02="スペシャル" />
        <div className={styles.contents_01}>
          <ContentsInner>
            <MainContentsMiddle>
              <div className={styles.contents_inner}>
                <div className={styles.textHeading_wrapper}>
                  <TextHeading text={"アートコンペ開催"} />
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
                <TextHeading text="アートコンペ応募作品" />
                <div className={styles.leading_wrapper}>
                  <TextAnnotation text="作品は人気順で表示しています" />
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
                    <img src={srcItem.children.data[0].media_url} className={styles.insta_img} alt="" />
                  </a>
                ) : (
                  // 複数画像かつ画像が動画の場合
                  <a href={srcItem.children.data[0].permalink} key={index} className={styles.insta_link}>
                    <video src={srcItem.children.data[0].media_url} className={styles.insta_img} />
                  </a>
                )
              ) : srcItem.media_type == "IMAGE" ? ( // 画像が1枚の場合
                <a href={srcItem.permalink} key={index} className={styles.insta_link}>
                  <img src={srcItem.media_url} className={styles.insta_img} alt="" />
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
          <ButtonLiquid href="https://www.instagram.com/explore/tags/BH_MAL/?hl=en">
            <div className={styles.btn_innner}>
              <div className={styles.text_wrapper}>
                <p className={styles.btn_text}>#BH_MALをもっと見る</p>
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
