import React from "react"
import PageTitle from "../../../components/atoms/PageTitle"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import BreadShort from "../../../components/molecules/BreadShort"
import ComicArea from "../../../components/organisms/ComicArea"
import ShareArea from "../../../components/molecules/ShareArea"
import LayoutTwoColumnComic from "../../../components/templates/LayoutTwoColumnComic"
import ComicContentsInner from "../../../components/organisms/ComicContentsInner"
import Button from "../../../components/atoms/Button"
import Label01 from "../../../components/molecules/Label01"

const ComicPage = ({ location }) => {
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 開始 --------------------------------------- */
  const src = [
    "/comic/07_ja/bh_007_01.png",
    "/comic/07_ja/bh_007_02.png",
    "/comic/07_ja/bh_007_03.png",
    "/comic/07_ja/bh_007_04.png",
    "/comic/07_ja/bh_007_05.png",
    "/comic/07_ja/bh_007_06.png",
    "/comic/07_ja/bh_007_07.png",
    "/comic/07_ja/bh_007_08.png",
    "/comic/07_ja/bh_007_09.png",
    "/comic/07_ja/bh_007_10.png",
    "/comic/07_ja/bh_007_11.png",
    "/comic/07_ja/bh_007_12.png",
    "/comic/07_ja/bh_007_13.png",
    "/comic/07_ja/bh_007_14.png",
    "/comic/07_ja/bh_007_15.png",
    "/comic/07_ja/bh_007_16.png",
    "/comic/07_ja/bh_007_17.png",
    "/comic/07_ja/bh_007_18.png",
    "/comic/07_ja/bh_007_19.png",
    "/comic/07_ja/bh_007_20.png",
    "/comic/07_ja/bh_007_21.png",
    "/comic/07_ja/bh_007_22.png",
    "/comic/07_ja/bh_007_23.png",
    "/comic/07_ja/bh_007_24.png",
    "/comic/07_ja/bh_007_25.png",
    "/comic/07_ja/bh_007_26.png",
    "/comic/07_ja/bh_007_27.png",
    "/comic/07_ja/bh_007_28.png",
    "/comic/07_ja/bh_007_29.png",
    "/comic/07_ja/bh_007_30.png",
    "/comic/07_ja/bh_007_31.png",
    "/comic/07_ja/bh_007_32.png",
    "/comic/07_ja/bh_007_33.png",
    "/comic/07_ja/bh_007_34.png",
    "/comic/07_ja/bh_007_35.png",
    "/comic/07_ja/bh_007_36.png",
    "/comic/07_ja/bh_007_37.png",
    "/comic/07_ja/bh_007_38.png",
    "/comic/07_ja/bh_007_39.png",
    "/comic/07_ja/bh_007_40.png",
    "/comic/07_ja/bh_007_41.png",
    "/comic/07_ja/bh_007_42.png",
    "/comic/07_ja/bh_007_43.png",
    "/comic/07_ja/bh_007_44.png",
    "/comic/07_ja/bh_007_45.png",
    "/comic/07_ja/bh_007_46.png",
    "/comic/07_ja/bh_007_47.png",
    "/comic/07_ja/bh_007_48.png",
    "/comic/07_ja/bh_007_49.png",
    "/comic/07_ja/bh_007_50.png",
    "/comic/07_ja/bh_007_51.png",
    "/comic/07_ja/bh_007_52.png",
    "/comic/07_ja/bh_007_53.png",
    "/comic/07_ja/bh_007_54.png",
    "/comic/07_ja/bh_007_55.png",
    "/comic/07_ja/bh_007_56.png",
    "/comic/07_ja/bh_007_57.png",
    "/comic/07_ja/bh_007_58.png",
    "/comic/07_ja/bh_007_59.png",
    "/comic/07_ja/bh_007_60.png",
    "/comic/07_ja/bh_007_61.png",
    "/comic/07_ja/bh_007_62.png",
    "/comic/07_ja/bh_007_63.png",
    "/comic/07_ja/bh_007_64.png",
    "/comic/07_ja/bh_007_65.png",
    "/comic/07_ja/bh_007_66.png",
    "/comic/07_ja/bh_007_67.png",
    "/comic/07_ja/bh_007_68.png",
    "/comic/07_ja/bh_007_69.png",
    "/comic/07_ja/bh_007_70.png",
    "/comic/07_ja/bh_007_71.png",
    "/comic/07_ja/bh_007_72.png",
    "/comic/07_ja/bh_007_73.png",
    "/comic/07_ja/bh_007_74.png",
    "/comic/07_ja/bh_007_75.png",
    "/comic/07_ja/bh_007_76.png",
    "/comic/07_ja/bh_007_77.png",
    "/comic/07_ja/bh_007_78.png",
    "/comic/07_ja/bh_007_79.png",
    "/comic/07_ja/bh_007_80.png",
    "/comic/07_ja/bh_007_81.png",
    "/comic/07_ja/bh_007_82.png",
    "/comic/07_ja/bh_007_83.png",
    "/comic/07_ja/bh_007_84.png",
    "/comic/07_ja/bh_007_85.png",
    "/comic/07_ja/bh_007_86.png",
    "/comic/07_ja/bh_007_87.png",
    "/comic/07_ja/bh_007_88.png",
    "/comic/07_ja/bh_007_89.png",
    "/comic/07_ja/bh_007_90.png",
    "/comic/07_ja/bh_007_91.png",
    "/comic/07_ja/bh_007_92.png",
    "/comic/07_ja/bh_007_93.png",
    "/comic/07_ja/bh_007_94.png",
    "/comic/07_ja/bh_007_95.png",
    "/comic/07_ja/bh_007_96.png",
    "/comic/07_ja/bh_007_97.png",
    "/comic/07_ja/bh_007_98.png",
    "/comic/07_ja/bh_007_99.png",
    "/comic/07_ja/bh_007_100.png",
    "/comic/07_ja/bh_007_101.png",
    "/comic/07_ja/bh_007_102.png",
    "/comic/07_ja/bh_007_103.png",
    "/comic/07_ja/bh_007_104.png",
    "/comic/07_ja/bh_007_105.png",
    "/comic/07_ja/bh_007_106.png",
    "/comic/07_ja/bh_007_107.png",
    "/comic/07_ja/bh_007_108.png",
    "/comic/07_ja/bh_007_109.png",
    "/comic/07_ja/bh_007_110.png",
    "/comic/07_ja/bh_007_111.png",
    "/comic/07_ja/bh_007_112.png",
    "/comic/07_ja/bh_007_113.png",
    "/comic/07_ja/bh_007_114.png",
    "/comic/07_ja/bh_007_115.png",
    "/comic/07_ja/bh_007_116.png",
    "/comic/07_ja/bh_007_117.png",
    "/comic/07_ja/bh_007_118.png",
    "/comic/07_ja/bh_007_119.png",
    "/comic/07_ja/bh_007_120.png",
    "/comic/07_ja/bh_007_121.png",
    "/comic/07_ja/bh_007_122.png",
    "/comic/07_ja/bh_007_123.png",
    "/comic/07_ja/bh_007_124.png",
    "/comic/07_ja/bh_007_125.png",
    "/comic/07_ja/bh_007_126.png",
    "/comic/07_ja/bh_007_127.png",
    "/comic/07_ja/bh_007_128.png",
    "/comic/07_ja/bh_007_129.png",
    "/comic/07_ja/bh_007_130.png",
    "/comic/07_ja/bh_007_131.png",
    "/comic/07_ja/bh_007_132.png",
    "/comic/07_ja/bh_007_133.png",
    "/comic/07_ja/bh_007_134.png",
    "/comic/07_ja/bh_007_135.png",
    "/comic/07_ja/bh_007_136.png",
    "/comic/07_ja/bh_007_137.png",
    "/comic/07_ja/bh_007_138.png",
    "/comic/07_ja/bh_007_139.png",
    "/comic/07_ja/bh_007_140.png",
    "/comic/07_ja/bh_007_141.png",
    "/comic/07_ja/bh_007_142.png",
    "/comic/07_ja/bh_007_143.png",
    "/comic/07_ja/bh_007_144.png",
    "/comic/07_ja/bh_007_145.png",
    "/comic/07_ja/bh_007_146.png",
    "/comic/07_ja/bh_007_147.png",
    "/comic/07_ja/bh_007_148.png",
    "/comic/07_ja/bh_007_149.png",
    "/comic/07_ja/bh_007_150.png",
    "/comic/07_ja/bh_007_151.png",
    "/comic/07_ja/bh_007_152.png",
    "/comic/07_ja/bh_007_153.png",
    "/comic/07_ja/bh_007_154.png",
    "/comic/07_ja/bh_007_155.png",
    "/comic/07_ja/bh_007_156.png",
    "/comic/07_ja/bh_007_157.png",
    "/comic/07_ja/bh_007_158.png",
    "/comic/07_ja/bh_007_159.png",
    "/comic/07_ja/bh_007_160.png",
    "/comic/07_ja/bh_007_161.png",
    "/comic/07_ja/bh_007_162.png",
    "/comic/07_ja/bh_007_163.png",
    "/comic/07_ja/bh_007_164.png",
    "/comic/07_ja/bh_007_165.png",
    "/comic/07_ja/bh_007_166.png",
    "/comic/07_ja/bh_007_167.png",
    "/comic/07_ja/bh_007_168.png",
    "/comic/07_ja/bh_007_169.png",
    "/comic/07_ja/bh_007_170.png",
    "/comic/07_ja/bh_007_171.png",
    "/comic/07_ja/bh_007_172.png",
    "/comic/07_ja/bh_007_173.png",
    "/comic/07_ja/bh_007_174.png",
    "/comic/07_ja/bh_007_175.png",
    "/comic/07_ja/bh_007_176.png",
    "/comic/07_ja/bh_007_177.png",
    "/comic/07_ja/bh_007_178.png",
    "/comic/07_ja/bh_007_179.png",
    "/comic/07_ja/bh_007_180.png",
    "/comic/07_ja/bh_007_181.png",
    "/comic/07_ja/bh_007_182.png",
    "/comic/07_ja/bh_007_183.png",
    "/comic/07_ja/bh_007_184.png",
    "/comic/07_ja/bh_007_185.png",
    "/comic/07_ja/bh_007_186.png",
    "/comic/07_ja/bh_007_187.png",
    "/comic/07_ja/bh_007_188.png",
    "/comic/07_ja/bh_007_189.png",
    "/comic/07_ja/bh_007_190.png",
    "/comic/07_ja/bh_007_191.png",
    "/comic/07_ja/bh_007_192.png",
    "/comic/07_ja/bh_007_193.png",
    "/comic/07_ja/bh_007_194.png",
    "/comic/07_ja/bh_007_195.png",
    "/comic/07_ja/bh_007_196.png",
    "/comic/07_ja/bh_007_197.png",
    "/comic/07_ja/bh_007_198.png",
    "/comic/07_ja/bh_007_199.png",
    "/comic/07_ja/bh_007_200.png",
    "/comic/07_ja/bh_007_201.png",
    "/comic/07_ja/bh_007_202.png",
    "/comic/07_ja/bh_007_203.png",
    "/comic/07_ja/bh_007_204.png",
    "/comic/07_ja/bh_007_205.png",
    "/comic/07_ja/bh_007_206.png",
    "/comic/07_ja/bh_007_207.png",
    "/comic/07_ja/bh_007_208.png",
    "/comic/07_ja/bh_007_209.png",
    "/comic/07_ja/bh_007_210.png",
    "/comic/07_ja/bh_007_211.png",
    "/comic/07_ja/bh_007_212.png",
    "/comic/07_ja/bh_007_213.png",
    "/comic/07_ja/bh_007_214.png",
    "/comic/07_ja/bh_007_215.png",
    "/comic/07_ja/bh_007_216.png"
  ]
  // /* --------------------------------------- mal様修正範囲(マンガ画像を表示順で設定) 終了 --------------------------------------- */

  return (
    <>
      <Helmet>
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>第7話 | 「BLUE HUNTER」公式サイト</title>
        <meta name="description" content="ブルーハンタープロジェクト公式サイト。2021年7月より漫画「BLUE HUNTER」を連載開始！最新ニュースや設定資料集、スペシャル情報等をこちらからお届けします。" />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/comic/ep7/" />
        <meta property="og:url" content="https://manga.uminohi.jp/comic/ep7/" />
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
      <LayoutTwoColumnComic pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/comic/ttl_comic.png" alt=""/>
        </div>
        {/* パンクズリスト */}
        <div className={styles.bread_wrapper}>
          <BreadShort page01="TOP" href01="/" page02="マンガ - 第7話" />
        </div>
        <Label01 text="次回12/3 配信予定" />
        <ComicContentsInner>
          <div className={styles.comic_wrapper}>
            <ComicArea src={src} />
          </div>
          <div>
            <ShareArea />
            <div className={styles.btn_wrapper}>
              <div className={styles.btn_next}>
                <Button href="/comic/ep8/" isDisabled={false}>
                  第8話を読む
                </Button>
              </div>
              {/* <div className={styles.btn_plan}>
                <Button isDisabled={true}>次回9/30 配信予定</Button>
              </div> */}
            </div>
          </div>
        </ComicContentsInner>
      </LayoutTwoColumnComic>
      {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
    </>
  )
}

export default ComicPage
