import React from "react"
import * as styles from "./index.module.scss"
import TextHeading from "../../../../components/atoms/TextHeading"
import TextMedium from "../../../../components/atoms/TextMedium"
import TextLeading from "../../../../components/atoms/TextLeading"
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
        <link rel="canonical" href="https://manga.uminohi.jp/worldbuilding/socialsystem/rarity/" />
        <meta property="og:url" content="https://manga.uminohi.jp/worldbuilding/socialsystem/rarity/" />
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
        <Bread page01="TOP" href01="/" page02="世界観・設定" href02="../../" page03="社会制度 - Rrt -レアリティ-" />
        <WorldContentsInner>
          <MainContentsTop text="社会制度" />
          <MainContentsMiddleWorld>
            <TextHeading text="Rrt -レアリティ-" />
            <ContentsLine />
            <TextMedium text="Light( ★ )/Normal( ★★ )/Deep( ★★★ )/Extreme( ★★★★ )の4段階。進歩的成果の貴重さに対する権威付けであり、⽣物の場合はカードがその深さの⻘で縁取られる。〜1万Lk未満はLight（ライトブルー）、〜10万Lk未満をNormal、〜100万Lk未満をDeepと位置付ける。両⽣類のグリーンとブルーなど、同⼀⽣物に2種類以上の⾊に対するRrtが与えられるケース（ダブル・レアリティ）もある。Rrtを認定されたタスクは「カラードタスク（海の場合はブルータスク）」と呼ばれる。⼀つのタスクに複数の⾊が付与されることもある。「ブルー狙い」「ブルーが欲しい」という場合は「本⼈が進歩的な成果に相当するTkを実施し、結果として（あるいは事前に）Lkが伸び、AIがLkの成⻑曲線よりRrtを判定するまで」を⾔う。" />
            <div className={styles.textHeading_wrapper}>
              <TextHeading text="生物勧告基準" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="要調査系統群" />
              <TextLeading text="通称「億水の漂因」" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_02_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_02.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_02.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="調整依頼。遺伝⼦（⾝体の⼀部分）などの物理的な⽣体情報や写真、⽬撃証⾔などを総合し、少なくとも過去に存在したと考えられる未発⾒⽣物群。ハンターたちが「未発⾒」「ターゲット」と呼ぶカード。正式名が与えられず、仮称で呼ばれることが多い。「六枚⽻」「針ウロコ」など。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="要保護系統群" />
              <TextLeading text="通称「万青の潜因」" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_03_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_03.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_03.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="調整依頼。⽣体または死後数時間以内の完全な遺体について回収例があり、現⽣する単独系統とみなされ、徹底した保護が求められる科学的に重要な⽣物群（＝ブルーに認定されたカード）。パウダーとして登録された情報はハンターの働き次第でブルーにアップグレードされるか、または偽情報として破棄されるかの⼆択となる。AIによってアクア〜ロイヤルまでレアリティが推定される。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="要警戒系統群" />
              <TextLeading text="通称「千碧の禁因」" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_04_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_04.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_04.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="⽣体の回収例と環境汚染の被害例が報告されており、ハンター以外の保護⾏為を禁じられた⽣物群。希にブルーからアップグレードされる。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="要駆除系統群" />
              <TextLeading text="通称「百紺の滅因」" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_05_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_05.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_05.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="⽣体の回収例と環境汚染の被害例、甚⼤な実害が報告されており、ハンターが駆除・殲滅すべき⽣物群。希にタブーからアップグレードされる。" />
            </div>
            <div className={styles.textLeading_wrapper}>
              <TextLeading text="災因系統群" />
              <TextLeading text="通称「十黒の災因」" />
            </div>
            <div className={styles.img_wrapper}>
              <picture>
                <source srcset="/world/world_img_sosialsystem_06_sp.png" media="(max-width: 767px)"/>
                <source srcset="/world/world_img_sosialsystem_06.png" media="(min-width: 767px)"/>
                <img src="/world/world_img_sosialsystem_06.png" alt="" />
              </picture>
            </div>
            <div className={styles.textMediumSub_wrapper}>
              <TextMediumSub text="数億種いる現⽣⽣物のなかで⼗種に満たないほどの危険性が疑われる⽣物群。遭遇した場合、⽣息領域からの避難が義務づけられる。ブラックリスト。表に出てこないカード。" />
            </div>
          </MainContentsMiddleWorld>
          <MainContentsBottom />
          {/* PREV、NEXTボタンのURL、ページ番号の設定。1ページ目はPREVボタンを非活性、最終ページはNEXTボタンを非活性にします。 各ページごとに設定お願いします。*/}
          <PagerArea hrefPrev="../colored-tasks/" hrefNext="../road-to-blue/" isDisabledPrev={false} isDisabledNext={false} number={7} TotalNumber={8} />
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </WorldContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default WorldPage
