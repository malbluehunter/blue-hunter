import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import PageTitle from "../../components/atoms/PageTitle"
import BreadShort from "../../components/molecules/BreadShort"
import MainContentsMiddle from "../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../components/templates/LayoutTwoColumn"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BnrArt from "../../components/atoms/BnrArt"
import TextLargeTrim from "../../components/atoms/TextLargeTrim"
import Label03 from "../../components/molecules/Label03"
import TextSmall from "../../components/atoms/TextSmall"

const StaffPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>スタッフ | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/staff/" />
        <meta property="og:url" content="https://manga.uminohi.jp/staff/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
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

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/staff/ttl_staff.png" alt="Staff" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/" page02="スタッフ" />
        <ContentsInner>
          <MainContentsMiddle>
            <div className={styles.contents_inner}>
              <div className={styles.staff_name_item}>
                <Label03 text={"総合プロデューサー"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"波房 克典"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"プロデューサー"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"岡村 哲也  /  北畑 幸大  /  渡邉 雅儀"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"制作ディレクター"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"スミス みか / 注連 菜都美"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"原作・脚本・キャラクター＆メカニック原案"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"吾奏 伸"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"クリエイティブディレクター"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"内田 英武"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"アシスタントディレクター"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"石橋 明季"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"プロダクションマネージャー"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"笠原 貫太"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"プロダクションデザイナー"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"中村 郁美 / 佐藤 宏美"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"ストーリーボード"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"内田 英武 / 石橋 明季"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"キャラクターデザイン"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"中村 郁美 / 佐藤 宏美 / 石橋 明季 / ヤマユキモリ"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"メカニックデザイン"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"佐藤 翔太 / ヤマユキモリ"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"3Dモデリング"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"大橋 永志 / 脇谷 喜紀"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"３Dライティング＆コンポジット"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"石橋 明季"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"作画"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim
                    text={
                      "高橋 絵梨子 / 165. / まきむら / はなほの / 石橋 明季 / 中村 郁美 /"
                    }
                  />
                  <TextLargeTrim
                    text={
                      "佐藤 宏美 / 安田 悠一 / 黒棚 理解 / 天水 / こまちおファクトリー /"
                    }
                  />
                  <TextLargeTrim
                    text={
                      "白夜 ゆう / 早川 マコト / へるにゃー / もちうさ / 甲斐 千鶴 /"
                    }
                  />
                  <TextLargeTrim
                    text={
                      "ナツトモキ / 竹ノ輪 ちくわ / 宇野 ハジメ / 金田 なな / 立陽"
                    }
                  />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"翻訳"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"デジタル職人株式会社"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"WEBディレクター"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"柏崎 絵美"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"WEB制作"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"株式会社 TAM"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"プロモーション"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"株式会社MyAnimeList"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"協力"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"株式会社クラフトフロー / 株式会社シュガーフォックス"} />
                </div>
              </div>
              <div className={styles.text_small_wrapper}>
                <TextSmall text={"Special Thank you\nMAL users & MAL moderators"} />
              </div>
            </div>
          </MainContentsMiddle>
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </ContentsInner>
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default StaffPage
