import React from "react"
import * as styles from "./index.module.scss"
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
import Label05 from "../../components/molecules/Label05"
import Label04 from "../../components/molecules/Label04"
import TextLarge from "../../components/atoms/TextLarge"

const SpecialPage = ({ location }) => {
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

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutTwoColumn pathname={location.pathname}>
        {/* ページタイトル */}
        <div className={styles.pageTitle_wrapper}>
          <PageTitle src="/special/ttl_special.png" alt="Special" />
        </div>
        {/* パンクズリスト */}
        <BreadShort page01="TOP" href01="/" page02="スペシャル" />
        <ContentsInner>
          <MainContentsMiddle>
            <div className={styles.contents_inner}>
              <div className={styles.section01}>
                <div className={styles.textHeading_wrapper}>
                  <TextHeading text="BLUE HUNTER アートコンペティション 表彰式" />
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium text="BLUE HUNTERをテーマにしたアートコンペを開催し、約700点もの素晴らしい作品、アイディアが集まりました。アートコンペにご参加いただいた皆さまにおいては心から感謝いたします。また、Web投票にご参加いただいた皆さまも、ご参加いただきありがとうございました。" />
                  <TextMedium text="先だって催されたオンライン表彰式の模様を動画で公開いたします。受賞作品の発表や受賞者のコメントを紹介しておりますので、動画と合わせて結果発表をお楽しみください。" />
                </div>
                <div className={styles.video}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/0jqxkDfmvYo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.section02}>
                <div className={`${styles.textHeading_wrapper} ${styles.view_pc}`}>
                  <TextHeading text={"アートコンペ受賞者結果発表"} />
                </div>
                <div className={`${styles.textHeading_wrapper} ${styles.view_sp}`}>
                  <TextHeading text={"アートコンペ受賞者\n結果発表"} />
                </div>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="Blue Hunter 大賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 30万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-16.png" alt="Manaaki ʻAukai" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Manaaki ʻAukai" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Qushung" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "Manaaki is a seeker who originally belongs to a small village in Hawaii not too far from GRAND/MW. Growing up, he was named the Kraken for his electronical armor E-AS gear and the frequent success he had in his missions. However, his position as Captain had been suspended due to revalation of his suspicious involvement in an expirament at a young age; resulting in him possessing blue blood which allows him to survive, similar to octopuses, in extreme temperatures in the water. Being the sole survivor of his guild, Manaaki is determined to come to terms with his past as well as coming into recent contact with ΨORCA as well as to find the truth behind the suspicious irregularities in the fracture zone under the depths of the ocean."
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="審査員特別賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 4万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-10.png" alt="moving city model 227" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="moving city model 227" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Moving City Model 227" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "Since the world is drowning due to global warming all goverments in the wolrd have funded this project so they can save humanity from extension. It uses solar panels as an energy source."
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="ナラティブ賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 2万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-12.png" alt="Amaiai" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Amaiai" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Houba" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "Originally made as a classic oil rig, Amaiai was later turned into a multi-purpose station. The rig still drills for oil, but rather than for making petrol it's now used as a propellant for High-Efficiency Hydrogen Fuel production units. The hydrogen fuel made here is compressed into capsules which are used as a common source of power for majority of current vessels around the globe. Another part of the rig is equipped with a water desalination unit which allows the inhabitants of the rig to survive and which brings them sizeable income from fresh water trade. The rig is mobile and feeds on the very last residues of oil left in the world. Since the existence of the rig is crucial for the sailors to survive on the open sea, it's considered to be untouchable by any means of force. Special rules apply as soon as you enter its deck, including the one which doesn't allow you to stay longer than 30 hours at once."
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="ハンターアイテム部門賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 2万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-1.png" alt="Moray Spear" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Moray Spear" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Nik" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "Used to latch onto large animals harmlessly to get to them or get DNA, the base attaches to the thrower or a vehicle."
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="未来の船舶・移動手段部門賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 2万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-4.png" alt="Nanomorpher Pod" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Nanomorpher Pod" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Furubita Kuruma" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "A submersible capable of copying various identified species with the help of the technology similar to the Nanoballs. Used to avoid provoking nearby animals."
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="未知の海洋生物部門賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 2万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-7.png" alt="ツタガラミクラゲ" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="ツタガラミクラゲ" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="JANS" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "温暖化により生息域が変化し目撃されるようになった。触手から猛毒が分泌され、触ったモノは激痛を感じ麻痺する。ツタガラミクラゲは触手を絡め丸ごと分解し食べる。カサの上部に光に敏感な眼球を持っている。浮遊せずに意識して泳げる為、脳があるとわかった。これは、クラゲとイカとの間の一種だろうか、という仮説も。 "
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="未来の風景・建築部門賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 2万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-13.png" alt="Old Asia" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Old Asia" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Old Asia" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "Due to the rising sea level and negligience by the old government, the people who aren't wealthy enough to go to a better place, had to rebuild a community using the high rise residential building that has been abandoned. Run by an asian group made up of Japanese, Indian and Chinese. Use hydroeletricity as the main source of energy. A lawless territory. Really hate \"wealthy\" people. Love cats"
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="BLUE HUNTER（新キャラ）賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 2万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/m-12.png" alt="Hikari Astil" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Hikari Astil" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Kagetamago" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "High spirited and dependable person; can stay underwater without equipment or kurage. He joined Blue Hunter to fulfill his brother's wish and wears kurage made by his brother."
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="Under 20部門賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 2万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/m-3.png" alt="Interposer インターポーザー" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Interposer インターポーザー" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Wifi saga" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "3 bullets. Within 100 meters, Interposer generates an energy to decrease sea creatures activeness. (no side effect) For Protector to complete capture mission easier."
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="Under 20部門賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 2万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-6.png" alt="Coralback Turtle" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Coralback Turtle" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="pete_art" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "Many Coralback Turtles suffer from coral bleaching. The main cause is the rising water temperature caused by global warming and pollution. "
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="MALユーザー賞" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>賞金 2万円</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-8.png" alt="Pearloon" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="作品名" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Pearloon" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="受賞者" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Nubilily" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "Pearloon is a toothless piranha that finds it difficult to stay in the ocean with other similar species for its weak system and vulnerability, unlike other marine creatures they can create large bubbles in which they can swim inside and be more protected. Due to their very ambitious personality, once they grow older they start making even bigger bubbles to go out of the ocean and start exploring the skies. The more time they spend outside, the more their structure becomes bubbly with a clear color. Despite the rather soft look, they can be very distrustful and wary, hence the difficulty of capturing them."
                    }
                  />
                </div>
              </div>
              
              <div className={styles.section02}>
                <div className={styles.textHeading_wrapper}>
                  <TextHeading text="アートコンペ概要" />
                </div>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                {/* テーブル(見出しなし) 開始 */}
                <div className={styles.table_sub_wrapper}>
                  <table className={styles.table_sub}>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>テーマ</td>
                      <td className={styles.td_item}>
                      『BLUE HUNTER アートコンペティション』では「海洋の未来技術を牽引するような、独創的な発想・造形・設定が表現された作品」を、部門別に募集いたします。<br />
                      次の5部門から好きなテーマを選び、自分が想像するBLUE HUNTERの世界をアートで表現してください。皆様の自由な発想が、海洋の未来を創ります。
                        <br /><br />
                        （１）ハンターアイテム部門<br />
                        BLUE HUNTER世界で、BLUE HUNTERが使用している、未来の技術が用いられた捕獲アイテム、装備、武器など
                        <br /><br />
                        （２）未来の船舶・移動手段部門<br />
                        BLUE HUNTER世界で使われている交通手段、調査船、その他乗り物全般
                        <br /><br />
                        （３）未知の海洋生物部門<br />
                        BLUE HUNTER世界に存在するであろう、まだ見ぬ新種の生物
                        <br /><br />
                        （４）未来の風景・建築部門<br />
                        温暖化や海面上昇が進んだ都市風景、温暖化が解消された建造物やインフラなど、BLUE HUNTER世界を押し広げる新しい世界観・風景
                        <br /><br />
                        （５）BLUE HUNTER（新キャラ）部門<br />
                        あなたが考えるBLUE HUNTER新キャラクターのキャラデザインと設定
                      </td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>賞</td>
                      <td className={styles.td_item}>
                        ・BH大賞　賞金30万円
                        <br />
                        ・審査員特別賞　賞金4万円
                        <br />
                        ・ナラティブ賞　賞金10万円
                        <br />
                        ・ハンターアイテム部門賞　賞金2万円
                        <br />
                        ・未来の船舶・移動手段部門賞　賞金2万円
                        <br />
                        ・未知の海洋生物部門賞　賞金2万円
                        <br />
                        ・未来の風景・建築部門賞　賞金2万円
                        <br />
                        ・BLUE HUNTER（新キャラ）賞　賞金2万円
                        <br />
                        ・Under 20部門賞　賞金2万円
                        <br />
                        ・MALユーザー賞　賞金2万円
                      </td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>応募期間</td>
                      <td className={styles.td_item}>2021年7月9日〜9月10日</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>一次選考結果発表</td>
                      <td className={styles.td_item}>2021年10月15日</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>MALユーザーWeb投票期間・最終審査期間</td>
                      <td className={styles.td_item}>2021年10月15日〜10月22日</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>受賞作品結果発表</td>
                      <td className={styles.td_item}>2021年12月6日</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>応募総数</td>
                      <td className={styles.td_item}>691件</td>
                    </tr>
                  </table>
                </div>
                {/* テーブル(見出しなし) 終了 */}
                <div className={styles.text_wrapper}>
                  <TextMedium text={"受賞者の皆さま、この度はおめでとうございます！ BLUE HUNTERを通して一人一人が海の環境問題へ目を向け、明るい未来へとつながる一歩となりますように願っております。ありがとうございました。"} />
                </div>
              </div>
            </div>
          </MainContentsMiddle>
          {/* --------------------------------------- mal様修正範囲 終了 --------------------------------------- */}
        </ContentsInner>
      </LayoutTwoColumn>
    </>
  )
}

export default SpecialPage
