import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import PageTitle from "../../../components/atoms/PageTitle"
import BreadShort from "../../../components/molecules/BreadShort"
import MainContentsMiddle from "../../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../../components/templates/LayoutTwoColumnEn"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BnrArt from "../../../components/atoms/BnrArtEn"
import TextLargeTrim from "../../../components/atoms/TextLargeTrim"
import Label03 from "../../../components/molecules/Label03"
import TextSmall from "../../../components/atoms/TextSmall"

const StaffPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>Staff | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts June 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/staff/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/staff/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
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
          <PageTitle src="/staff/ttl_staff.png" alt="Staff" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/en/" page02="Staff" />
        <ContentsInner>
          <MainContentsMiddle>
            <div className={styles.contents_inner}>
              <div className={styles.staff_name_item}>
                <Label03 text={"Executive Producer"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Katunori Namihusa"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Producers"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Tetsuya Okamura  /  Yukihiro Kitahata  /  Masayoshi Watanabe"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Production Director"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Mika Smith / Natumi Shime"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Original Creator / Script / Character and Mechanical Designer"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Shin Asou"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Creative Director"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Hidetake Uchida"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Assistant Director"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Aki Ishibashi"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Production Manager"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Kanta Kasahara"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Production Designers"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Ikumi Nakamura / Hiromi Sato"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Storyboard"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Hidetake Uchida / Aki Ishibashi / Maru Chan"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Character Designs"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Ikumi Nakamura / Hiromi Sato / Aki Ishibashi / yamayukimori"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Mechanical Designs"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Shota Sato / yamayukimori"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"3D Modelling"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Eiji Ohhashi / Yoshinori Wakiya"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"3D Lighting and Compositing"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Aki Ishibashi"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Art"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim
                    text={
                      "Eriko Takahashi / 165. / Makimura / hanahono / Ishibashi Aki / Ikumi Nakamura /"
                    }
                  />
                  <TextLargeTrim
                    text={
                      "Hiromi Sato / Yuichi Yasuda / Rikai Kurotana / Amami / KOMACHIWO FACTORY /"
                    }
                  />
                  <TextLargeTrim
                    text={
                      "You Byakuya / Makoto Hayakawa / hellnyaa / Mochiusa / Chizuru kai /"
                    }
                  />
                  <TextLargeTrim
                    text={
                      "natsutomoki / Chikuwa Takenowa / Hajime Uno / Nana Kaneda / tatsuhi"
                    }
                  />
                  <TextLargeTrim
                    text={
                      "Satomi Abe / Kubota Shinji / YURI"
                    }
                  />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Translation"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Digital Shokunin Inc."} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Web Director"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"Emi Kashizaki"} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Web Production"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"TAM Inc."} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Promotion"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"MyAnimeList Co., Ltd."} />
                </div>
              </div>
              <div className={styles.staff_name_item}>
                <Label03 text={"Cooperation"} />
                <div className={styles.text_wrapper}>
                  <TextLargeTrim text={"CraftFlow Inc. / SUGARFOX Inc."} />
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
