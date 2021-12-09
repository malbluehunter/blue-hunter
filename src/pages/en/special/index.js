import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import PageTitle from "../../../components/atoms/PageTitle"
import BreadShort from "../../../components/molecules/BreadShort"
import MainContentsMiddle from "../../../components/organisms/MainContentsMiddle"
import ContentsInner from "../../../components/organisms/ContentsInner"
import LayoutTwoColumn from "../../../components/templates/LayoutTwoColumnEn"
import TextHeading from "../../../components/atoms/TextHeading"
import TextMedium from "../../../components/atoms/TextMedium"
import LineImg from "../../../components/atoms/LineImg"
import LineImgSp from "../../../components/atoms/LineImgSp"
import Label05 from "../../../components/molecules/Label05"
import Label04 from "../../../components/molecules/Label04En"
import TextLarge from "../../../components/atoms/TextLarge"

const SpecialPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>Special | BLUE HUNTER Official Site</title>
        <meta name="description" content="The official website for the BLUE HUNTER project. Free BLUE HUNTER manga starts July 2021! Check out all you need to know about the world of BLUE HUNTER here." />
        <meta name="keywords" content="BLUE HUNTER, BH, BLUE HUNTER Project, Free Comic, Art Contest " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/special/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/special/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Official Site" />
        <meta property="og:image" content="https://manga.uminohi.jp/ogp_en.png" />
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
        <BreadShort page01="TOP" href01="/en/" page02="Special" />
        <ContentsInner>
        <MainContentsMiddle>
            <div className={styles.contents_inner}>
              <div className={styles.section01}>
                <div className={styles.textHeading_wrapper}>
                  <TextHeading text="BLUE HUNTER Art Contest Award Ceremony" />
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium text="The BLUE HUNTER Art Contest was honored to receive almost 700 wonderful pieces of art brimming with innovative ideas. We are so grateful for every single person who took part and would also like to express our thanks to everybody who took part in the voting for the MAL User Prize." />
                  <TextMedium text="Below you can find a video of the Award Ceremony to commemorate the winning works. We have comments from the winners themselves, so please be sure to enjoy them together with their entries which can be found down below." />
                </div>
                <div className={styles.video}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/0YEmUpLxjyk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className={styles.section02}>
                <div className={`${styles.textHeading_wrapper} ${styles.view_pc}`}>
                  <TextHeading text={"Art Contest Winners"} />
                </div>
                <div className={`${styles.textHeading_wrapper} ${styles.view_sp}`}>
                  <TextHeading text={"Art Contest\nWinners"} />
                </div>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="BH Grand Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>300,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-16.png" alt="Manaaki ʻAukai" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Manaaki ʻAukai" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                <Label04 text="Judges’ Special Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>40,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-10.png" alt="moving city model 227" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="moving city model 227" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                <Label04 text="Narrative Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>20,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-12.png" alt="Amaiai" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Amaiai" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                <Label04 text="Hunter Item Category Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>20,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-1.png" alt="Moray Spear" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Moray Spear" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                <Label04 text="Future Water Vessels and Transport Category Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>20,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-4.png" alt="Nanomorpher Pod" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Nanomorpher Pod" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                <Label04 text="Undiscovered Marine Life Category Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>20,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-7.png" alt="ツタガラミクラゲ" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="ツタガラミクラゲ" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="JANS" />
                    </div>
                  </div>
                </div>
                <div className={styles.text_wrapper}>
                  <TextMedium
                    text={
                      "温暖化により生息域が変化し目撃されるようになった。触手から猛毒が分泌され、触ったモノは激痛を感じ麻痺する。ツタガラミクラゲは触手を絡め丸ごと分解し食べる。カサの上部に光に敏感な眼球を持っている。浮遊せずに意識して泳げる為、脳があるとわかった。これは、クラゲとイカとの間の一種だろうか、という仮説も。"
                    }
                  />
                </div>
              </div>
              <div className={styles.section03}>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                <Label04 text="Future Landscape / Architecture Category Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>20,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-13.png" alt="Old Asia" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Old Asia" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                <Label04 text="Blue Hunter (Original Character) Category Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>20,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/m-12.png" alt="Hikari Astil" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Hikari Astil" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                <Label04 text="Under-20 Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>20,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/m-3.png" alt="Interposer インターポーザー" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Interposer インターポーザー" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                <Label04 text="Under-20 Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>20,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-6.png" alt="Coralback Turtle" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Coralback Turtle" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                <Label04 text="MAL User Prize" />
                <div className={styles.prizeMoney_wrapper}>
                  <p>20,000 JPY</p>
                </div>
                <div className={styles.img_wrapper}>
                  <img src="/special/i-8.png" alt="Pearloon" />
                </div>
                <div className={styles.prizeWinner_wrapper}>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Title" />
                    <div className={styles.prizeWinner_item_text}>
                      <TextLarge text="Pearloon" />
                    </div>
                  </div>
                  <div className={styles.prizeWinner_item}>
                    <Label05 text="Created By" />
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
                  <TextHeading text="Art Contest Overview" />
                </div>
                <div className={styles.line_wrapper}>
                  <LineImg pathname={location.pathname} />
                  <LineImgSp pathname={location.pathname} />
                </div>
                {/* テーブル(見出しなし) 開始 */}
                <div className={styles.table_sub_wrapper}>
                  <table className={styles.table_sub}>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>Themes</td>
                      <td className={styles.td_item}>
                      The BLUE HUNTER Art Contest is looking for entries that express original ideas, designs, and settings that will drive the future technology of the ocean. <br />
                      Use your imagination to create a piece of BLUE HUNTER art that fits one the themes below. Your free thinking will create the future of the ocean!
                        <br /><br />
                        (1) Hunter Item Category<br />
                        Introduce items and equipment that Blue Hunters can use in their missions and more.
                        <br /><br />
                        (2) Future Vessels and Transport Category<br />
                        Invent transport and other vehicles to be used in the world of BLUE HUNTER.
                        <br /><br />
                        (3) Undiscovered Marine Life Category<br />
                        Invent as-of-yet undiscovered marine life that could appear in the world of BLUE HUNTER.
                        <br /><br />
                        (4) Future Landscape / Architecture Category<br />
                        Bring us new visions and landscapes that push the world of BLUE HUNTER forward, such as urban landscapes affected by global warming and rising sea levels, or even buildings and infrastructure in a world where global warming has been solved.
                        <br /><br />
                        (5) Blue Hunter (Original Character) Category<br />
                        Design a new ‘Blue Hunter’ character that can “Lead the future of the oceans” in the world of BLUE HUNTER.
                      </td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>Prizes</td>
                      <td className={styles.td_item}>
                        ・BH Grand Prize　300,000 JPY
                        <br />
                        ・Judges’ Special Prize　40,000 JPY
                        <br />
                        ・Narrative Prize　20,000 JPY
                        <br />
                        ・Hunter Item Category Prize　20,000 JPY
                        <br />
                        ・Future Water Vessels and Transport Category Prize　20,000 JPY
                        <br />
                        ・Undiscovered Marine Life Category Prize　20,000 JPY
                        <br />
                        ・Future Landscape / Architecture Category Prize　20,000 JPY
                        <br />
                        ・Blue Hunter (Original Character) Category Prize　20,000 JPY
                        <br />
                        ・Under-20 Prize　20,000 JPY
                        <br />
                        ・MAL User Prize　20,000 JPY
                      </td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>Preliminaries</td>
                      <td className={styles.td_item}>July 8 - September 9, 2021</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>Results of Preliminary Selection</td>
                      <td className={styles.td_item}>October 14, 2021</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>MAL User Web Vote Selection<br />Final Selection</td>
                      <td className={styles.td_item}>October 14 - October 21, 2021</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>Announcement of Winning Works</td>
                      <td className={styles.td_item}>December 5, 2021</td>
                    </tr>
                    <tr className={styles.table_tr}>
                      <td className={styles.td_leading}>Number of Entries</td>
                      <td className={styles.td_item}>691</td>
                    </tr>
                  </table>
                </div>
                {/* テーブル(見出しなし) 終了 */}
                <div className={styles.text_wrapper}>
                  <TextMedium text={"Congratulations to all the winners! We hope that BLUE HUNTER has helped to bring attention to environmental issues affecting our oceans, and has brought us a step closer towards a bright future."} />
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
