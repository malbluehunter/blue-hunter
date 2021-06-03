import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
import TextLeading from "../../../../components/atoms/TextLeading"
import TextAnnotation from "../../../../components/atoms/TextAnnotation"
import TextMediumSub from "../../../../components/atoms/TextMediumSub"
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
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/machinery/orca/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/machinery/orca/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../index.html" page03="メカ・アイテム - ψOrca -オルカ号-" />
        <WorldContentsInner>
          <MainContentsTop text="メカ・アイテム" />
          <MainContentsMiddleWorld>
            <TextHeading text="ψOrca -オルカ号-" />
            <ContentsLine />
            <TextMedium text="ブルーハンターが乗る自給自足船。太陽電池や風力、潮汐力等を駆使し、海水を電気分解して水素を生成・貯蔵しつつ航行する。動力を自給自足 するのみならず、海中電力網（シーフォース）にも供給。ψオルカ号をはじめとしたゼロシップに分類される船でミッションを成し遂げれば、より多くゲインしたとみなされ、評価が⾼い。危機回避や⽣命救助が⽬的の場合は、プラスエミッション（ロス）が許されている。" />
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_01.png" alt="" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="/world/world_img_machinery_02.png" alt="" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="1. 第1艦橋 -ヘッドブリッジ-" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="「龍神」「攻天」のメンテナンス用カーゴを兼ねた狭いブリッジで、開閉式のシースルー型キャノピーを持つ。普段は展望台または宴会場である。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="2. ステップ" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="第1艦橋（ヘッドブリッジ）に通じている。出入口にハッチがあるので、セミサブモード時に浸水せず機密が保たれます。カケルはこのドアに頭をぶつけました。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="3. 第2甲板 -ボトムデッキ-" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="ミッションパッケージを積むことが前提のフラットな甲板。生物捕獲用、生物駆除用、戦闘用などパッケージの種類は多岐にわたる。セミサブモード時に水没するため、窓のついたバスのような遊覧用パッケージもある。パッケージの高さは第1甲板まで。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="4. カーゴベイ" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="カーゴには各種装備と「雷神（探査艇）」もしくは「遊天（水陸両用ドローンカー」を格納。どちらかをミッションパッケージとして第２甲板（2nd.Deck）に積載することも可能。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="-ノーマルモード-" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="ミッションパッケージを換装・メンテナンスする時、太陽電池を使った蓄電、さらには港湾など浅瀬を航行する時にこの形態をとる。ハイドロストラクチャーにより、きわめて小さなバラストタンクで喫水線を変更可能。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="-セミサブモード-" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="水没型のミッションパッケージを活用する時の状態。ROVなどを投下するクレーンが不要。第1甲板と第1ブリッジが水面上にあって、やや大型のプレジャーボートのようにみえる。「前足」のウォータージェット2発は推進・後退の両用であり、互い違いに使うことで転舵し、船体下部のポッドでプロペラ推進する。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="-バーストモード-" />
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="ウォータージェット2発を全開にして疾走。このとき上腕部の起電力でハイドロストラクチャーを使った擬似水中翼を形成し、50km/h を超えると船体が浮き上がる（後部は剛体の水中翼で浮上）。後部の2発が動作する際、船体下部のポッドは吸水口として作動。" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="" hrefNext="../ryujin/" isDisabledPrev={true} isDisabledNext={false}  number={1} />
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
