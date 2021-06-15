import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
import { Helmet } from "react-helmet"
import LayoutTwoColumn from "../../../../components/templates/LayoutTwoColumn"
import PageTitle from "../../../../components/atoms/PageTitle"
import Bread from "../../../../components/molecules/Bread"
import MainContentsTop from "../../../../components/organisms/MainContentsTop"
import MainContentsMiddleWorld from "../../../../components/organisms/MainContentsMiddleWorld"
import ContentsLine from "../../../../components/molecules/ContentsLine"
import MainContentsBottom from "../../../../components/organisms/MainContentsBottom"
import WorldContentsInner from "../../../../components/organisms/WorldContentsInner"
import PagerArea from "../../../../components/organisms/PagerArea"
import LocalNavWorld02 from "../../../../components/templates/LocalNavWorld02"

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/socialsystem/tk/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/socialsystem/tk/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp.png" />
        <link rel="preload" as="image" href="/common/nav_text_news_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_comic_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_world_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_characters_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_staff_hover.webp" />
        <link rel="preload" as="image" href="/common/nav_text_special_hover.webp" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="/worldbuilding/" page03="社会制度 - Tk -タスク-" />
        <div className={styles.contents_inner}>
          <WorldContentsInner>
          <MainContentsTop pathname={location.pathname} text="社会制度" />
          <MainContentsMiddleWorld pathname={location.pathname}>
            <TextHeading text="Tk -タスク-" />
            <ContentsLine pathname={location.pathname} />
            <TextMedium text="1分毎に刻まれる⾏動単位。プラス（ゲイン）とマイナス（ロス）があり、フェアチェーンに改竄できない形で記録される。1⽇あたりすべてをゲインすれば累計で+1440Tkとなるが、ロスもあるため、相場的には⼀⽇の累計で-100〜+100Tkの間になる。過去にTkをゲインした⼈（あるいは組織）は、その範囲でのロスが許される。うまく運⽤すれば1⼈あたり年間数千〜数万程度もTkを蓄積するといわれている。別名「財布の中⾝」。" />
            <TextMedium text="海洋都市の住⺠は⾐⾷住で1⽇あたり500Tkほどのロスを避けられない（いわゆるミニマムロス）が、各都市のゲインによって相殺を受けられる。つまり登録市⺠はそれだけで1⽇あたり500Tkほどのミニマムゲインを取得できる。多くの市⺠が⽇々、±0Tkで⽣きていく。感覚的には100Tk=千円。" />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_sosialsystem_01.png" alt="" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom pathname={location.pathname} />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea pathname={location.pathname} hrefPrev="" hrefNext="/worldbuilding/socialsystem/link/" isDisabledPrev={true} isDisabledNext={false} number={1} TotalNumber={8} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
        <LocalNavWorld02 pathname={location.pathname} />
       </div>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
