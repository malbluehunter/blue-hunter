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
  // const [src02, setSrc02] = useState([]) //26件以降の画像

  useEffect(() => {
    // 1~25件のデータを取得
    fetch(process.env.GATSBY_ACCESS_TOKEN).then(response => {
      response
        .json() //ここでbodyからJSONを返す
        .then(result => {
          setSrc(result.data)
          console.log(result)
        })
        .catch(e => {
          console.log(e)
        })
    })
    // 26~40件のデータを取得
    // fetch(
    //   "https://graph.facebook.com/v11.0/17843900656018477/recent_media?access_token=EAAGhQ8fkHakBAAv7gYN0fg2Tfv3QlTH1sLIaXAZBaBantKfW42yeQidrYH90G2fHsvDqYRZBZCsxycdycRZCTD7LF5yGgZBHwsI4Dn1kQpAJxHx9GpK105ai6zN53ZAZCcNDQ83vs8z8pfe4rMzEM0LQpn7rKn0slnS2wNeZArXhPV9MJ2LxDwqn&pretty=1&fields=id%2Cmedia_url%2Cmedia_type%2Cpermalink%2Cchildren%7Bid%2Cmedia_type%2Cmedia_url%2Cpermalink%7D&user_id=17841447571286718&limit=25&after=UVZAGRVkxTldYMVpNTWxnMlV6SkxlVU5YYWtaUlYwUjVNMmhtV0RKU2RtSTNUVXBHT1ZAGTWFpMUtZAMUZAUWVU1Nk1pMVlkRnBRYmxkdGFFaE1UVFUyZAGpCV1MzSndRamt0WTBsQ1pEVmhUbGh6VTA0M1QxaEVSQT09"
    // ).then(response => {
    //   response
    //     .json() //ここでbodyからJSONを返す
    //     .then(result => {
    //       setSrc02(result.data)
    //       console.log(result.data)
    //     })
    //     .catch(e => {
    //       console.log(e)
    //     })
    // })
  }, [])

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>スペシャル | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/special/" />
        <meta property="og:url" content="https://manga.uminohi.jp/special/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="stylesheet" type="text/css" ccharset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.webp" />
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
            {/* 1~25件のデータを表示 */}
            {src.map((srcItem, index) =>
              srcItem.media_type == "CAROUSEL_ALBUM" ? ( // 画像が複数の場合
                srcItem.children.data[0].media_type == "IMAGE" ? ( // 複数画像かつ画像がイメージの場合
                  <a href={srcItem.children.data[0].permalink}>
                    <img src={srcItem.children.data[0].media_url} key={index} className={styles.insta_img} />
                  </a>
                ) : (
                  // 複数画像かつ画像が動画の場合
                  <a href={srcItem.children.data[0].permalink}>
                    <video src={srcItem.children.data[0].media_url} key={index} className={styles.insta_img} />
                  </a>
                )
              ) : srcItem.media_type == "IMAGE" ? ( // 画像が1枚の場合
                <a href={srcItem.permalink}>
                  <img src={srcItem.media_url} key={index} className={styles.insta_img} />
                </a>
              ) : (
                // 画像が1枚かつ動画の場合
                <a href={srcItem.permalink}>
                  <video src={srcItem.media_url} key={index} className={styles.insta_img} />
                </a>
              )
            )}
            {/* 26~40件のデータを表示 */}
            {/* {src02.map((srcItem, index) =>
              srcItem.media_type == "CAROUSEL_ALBUM" ? ( // 画像が複数の場合
                srcItem.children.data[0].media_type == "IMAGE" ? ( // 複数画像かつ画像がイメージの場合
                  <a href={srcItem.children.data[0].permalink}>
                    <img src={srcItem.children.data[0].media_url} key={index} className={styles.insta_img} loading="lazy" />
                  </a>
                ) : (
                  // 複数画像かつ画像が動画の場合
                  <a href={srcItem.children.data[0].permalink}>
                    <video src={srcItem.children.data[0].media_url} key={index} className={styles.insta_img} loading="lazy" />
                  </a>
                )
              ) : srcItem.media_type == "IMAGE" ? ( // 画像が1枚の場合
                <a href={srcItem.permalink}>
                  <img src={srcItem.media_url} key={index} className={styles.insta_img} loading="lazy" />
                </a>
              ) : (
                // 画像が1枚かつ動画の場合
                <a href={srcItem.permalink}>
                  <video src={srcItem.media_url} key={index} className={styles.insta_img} loading="lazy" />
                </a>
              )
            )} */}
          </div>
        </div>
        <div className={styles.btn_wrapper}>
          <ButtonLiquid href="#" isDisabled={false}>
            #BH_MALをもっと見る
            <div className={styles.icon_wrapper}>
              <img src="/common/icon_instagram_02.svg" alt="インスタグラム アイコン" className={styles.icon} />
            </div>
          </ButtonLiquid>
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default SpecialPage
