import React from "react"
import * as styles from "./index.module.scss"
import TextMedium from "../../../components/atoms/TextMedium"
import { Helmet } from "react-helmet"
import PageTitle from "../../../components/atoms/PageTitle"
import BreadShort from "../../../components/molecules/BreadShort"
import MainContentsMiddle from "../../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../../components/templates/LayoutTwoColumn"
import TextHeadingCharacters from "../../../components/atoms/TextHeadingCharacters"
import Label02 from "../../../components/molecules/Label02"
import SliderCharacters from "../../../components/organisms/SliderCharacters"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BnrArt from "../../../components/atoms/BnrArt"
import PagerAreaCharacters from "../../../components/organisms/PagerAreaCharacters"

const CharactersPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>キャラクター | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/characters/tsukito/" />
        <meta property="og:url" content="https://manga.uminohi.jp/characters/tsukito/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.png" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/characters/ttl_characters.png" alt="Characters" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/" page02="キャラクター - 月人" />
        <SliderCharacters pathname={location.pathname} />
        <ContentsInner>
          <MainContentsMiddle>
            <div className={styles.contents_inner}>
              <div className={styles.text_area}>
                <div className={styles.rubi}>
                  <TextMedium text="ツキト" />
                </div>
                <TextHeadingCharacters text="月人" />
                <div className={styles.lavel02_wrapper}>
                  <Label02 text="生物士/サーチャー" />
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium text="サーチャー（⽣物⼠）を担う13歳の少年で、ブルーを多数所持する。特定のギルドに所属しない情報提供者として登場。" />
                  <TextMedium text="10歳で環境⽣物学の博⼠号を取得したが、重い持病で余名宣告されている。年齢の割に成⻑が早く、カケルやヴィオラよりも⼤⼈びている。実は両性具有で、性別が変化しやすい海洋⽣物に⾃分をなぞらえて語る癖があり、⾃分の出⽣の謎を解くことが夢。" />
                  <TextMedium text="⽗の審⾏寺博⼠はとある都市開発計画に参加中で、今は⺟親と⼆⼈暮らし。病気のこともあって有⼒ギルドの誘いを断り続けていた。" />
                  <TextMedium text="普段はガーデン3〜6に出没する。" />
                  <TextMedium text="ガーデンにいりびたる孤児達の夢をひきうけたいというカケルの志に強く惹かれている。" />
                </div>
              </div>
              <div className={styles.img_area}>
                <img src="/characters/tsukito.png" alt="月人" />
              </div>
            </div>
          </MainContentsMiddle>
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </ContentsInner>
        {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
        <PagerAreaCharacters hrefPrev="/characters/viola/" hrefNext="/characters/hawk/" isDisabledPrev={false} isDisabledNext={false} />
        <div className={styles.bnr_area}>
          <BnrArt />
        </div>
      </LayoutTwoColumn>
    </>
  )
}

export default CharactersPage
