import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
import TextAnnotation from "../../../../components/atoms/TextAnnotation"
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

const WorldPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>世界観・設定 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年6月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/background/marine-metropolitan-areas/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/background/marine-metropolitan-areas/" />
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

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/world/ttl_world.png" alt="The World of BLUE HUNTER" />
        </div>
        {/* パンクズリスト */}
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="物語の背景 - 1.海洋都市圏の誕生" />
        <WorldContentsInner>
          <MainContentsTop text="物語の背景" />
          <MainContentsMiddleWorld>
            <TextHeading text="1.海洋都市圏の誕生" />
            <ContentsLine />
            <TextMedium text="2020年頃になって囁かれ始めたが、それ以前には⻑らく⾒過ごされてきた⼈類最⼤の「盲点」。それは鉄や銅など、⼤量に採掘できると信じられてきたコモンメタルの枯渇であった。2030年代、CCZのマンガン団塊採掘による銅の供給が急務となり、持続可能な海洋拠点グラン＝ムーが構想され、キリバス共和国に全世界から研究者・技術者が家族を伴って参集した。彼らがクリスマス島の東沖に初代採掘場テトラムを建造・運⽤し、10年にわたって研究を続けた結果、総勢1000名規模におよぶ「外部から独⽴した持続可能な海上⽣活圏」が誕⽣したのである。" />
            <TextMedium text="かつてのCERN*と同様、グラン＝ムーでは本来の⽬的を超越した100以上の学際領域における研究テーマが⼤幅な進展をみせた。その中には「フェアチェーン」も含まれ、研究者や技術者の家族から成る住⺠たちが積極的に社会実験に参画、来たるべき⼈類社会の「⻘写真」となり、世界をリードする役割を担った。" />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_background_02.png" alt="" />
            </div>
            <div className={styles.textAnnotation_wrapper}>
              <TextAnnotation text="＊ CERN（欧州原⼦核研究機構）1954年に発⾜。全周27km（⼭⼿線は全周34.5km）もの地下巨⼤加速器「LHC」をスイスとフランスの国境付近に建造した。その際、世界中の物理学研究者が研究のためにこの地へ移住し、両国に数千億円規模の経済効果をもたらしたといわれる。このような国際共同研究の拠点として地域が名乗りをあげることは莫⼤な経済効果が期待できるものであり、と同時に、CERNにおいて素粒⼦物理学の進歩に加え、インターネットの基礎たる「WWW（ワールドワイドウェブ）」が誕⽣したことは記憶に新しい。フェアチェーンはまさに「グラン＝ムー版WWW」といえる。" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../ccz/" hrefNext="../grandmw/" isDisabledPrev={false} isDisabledNext={false} number={2} TotalNumber={10} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
