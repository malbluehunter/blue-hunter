import React, {useEffect, useState, useCallback} from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import LayoutArtEn from "../../../components/templates/LayoutArtEn"
import { Link } from "gatsby"
import data from "../../../data/nomination_list.json";
import ArtModal from "../../../components/organisms/ArtModal";

const ArtPage = ({ location }) => {

  const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }

  useEffect(() => {
      addScript("https://platform.twitter.com/widgets.js")
  },[]);
  const [state, setState] = useState({
    tab: 'panel1',
  });

  const handleTabClick = useCallback((event) => {
    const element = event.currentTarget;
    const tabState = element.getAttribute('aria-controls');
    setState({
      tab: tabState,
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [clickedData, setClickedData] = useState(null);

  const handleClick = (item, index) => {
    // console.log(item);
    setClickedData(item);

    if(item.category === "1"){
      setCurrentIndex(index);
    }else if(item.category === "2"){
      setCurrentIndex(index + 4);
    }else if(item.category === "3"){
      setCurrentIndex(index + 8);
    }else if(item.category === "4"){
      setCurrentIndex(index + 13);
    }else if(item.category === "5"){
      setCurrentIndex(index + 17);
    }
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);

      const newData = data.data[0];
      setClickedData(newData);
      return;
    }
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    const newData = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    setClickedData(newData[0]);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);

      const newData = data.data[totalLength - 1];
      setClickedData(newData);
      return;
    }
    const newIndex = currentIndex - 1;

    setCurrentIndex(newIndex);

    const newData = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    setClickedData(newData[0]);
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if(clickedData){
      html.style.overflowY = "hidden";
    } else {
      html.style.overflowY = "scroll";
    }
  }, [clickedData]);

  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>BLUE HUNTER Art Contest</title>
        <meta
          name="description"
          content="To commemorate the latest chapter of epic marine fantasy manga BLUE HUNTER, a global art competition with lavish prizes is being held. We can't wait to see everybody's ideas and submissions!"
        />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/en/art/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/art/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="BLUE HUNTER Art Contest Official Website" />
        <meta property="og:image" content="https://manga.uminohi.jp/art/ogp_art.png" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutArtEn>
        <div className={styles.twitter_logo}>
          <a href="https://twitter.com/BlueHunter_Art" target="_blank" rel="noopener">
            <img src="/art/icon_hover_twitter.svg" width="62" height="74" alt="Twitter Follow Me"/>
          </a>
        </div>

        <div className={styles.tabContainer}>
          <ul role="tablist" className={styles.tabList}>
            <li role="presentation" className={styles.tabItem}>
              <button role="tab"
                      aria-controls="panel1"
                      aria-selected={state.tab === 'panel1'}
                      onClick={handleTabClick}>
                Nominations
              </button>
            </li>
            <li role="presentation" className={styles.tabItem}>
              <button role="tab"
                      aria-controls="panel2"
                      aria-selected={state.tab === 'panel2'}
                      onClick={handleTabClick}>
                About the contest
              </button>
            </li>
          </ul>

          <div className={styles.tabContent}>
            <div  className={styles.tabPanel}
                  role="tabpanel"
                  id="panel1"
                  aria-hidden={state.tab !== 'panel1'}>
              <h2 className={`${styles.main_imgHeading} ${styles.main_imgHeadingTheme}`}>
                <picture>
                  <source srcSet="/art/text_nominee.svg" media="(min-width: 768px)" />
                  <img src="/art/text_nominee_sp.svg" alt="Nominee" />
                </picture>
                <span>ノミネート作品</span>
              </h2>
              <h2 className={styles.main_heading2}>Hunter Item Category</h2>
              <div className={styles.galleryImgList}>
                {data.data.filter(item => item.category === "1").map((item, index) => (
                  <div key={index} className={styles.galleryImgItem}>
                    <img
                      src={item.image[0]}
                      alt={item.title}
                      onClick={() => handleClick(item, index + 0)}
                    />
                  </div>
                ))}
              </div>
              <h2 className={styles.main_heading2}>Future Vessels and Transport Category</h2>
              <div className={styles.galleryImgList}>
                {data.data.filter(item => item.category === "2").map((item, index) => (
                  <div key={index} className={styles.galleryImgItem}>
                    <img
                      src={item.image[0]}
                      alt={item.title}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
              </div>
              <h2 className={styles.main_heading2}>Undiscovered Marine Life Category</h2>
              <div className={styles.galleryImgList}>
                {data.data.filter(item => item.category === "3").map((item, index) => (
                  <div key={index} className={styles.galleryImgItem}>
                    <img
                      src={item.image[0]}
                      alt={item.title}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
              </div>
              <h2 className={styles.main_heading2}>Future Landscape / Architecture Category</h2>
              <div className={styles.galleryImgList}>
                {data.data.filter(item => item.category === "4").map((item, index) => (
                  <div key={index} className={styles.galleryImgItem}>
                    <img
                      src={item.image[0]}
                      alt={item.title}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
              </div>
              <h2 className={styles.main_heading2}>Blue Hunter (Original Character) Category</h2>
              <div className={styles.galleryImgList}>
                {data.data.filter(item => item.category === "5").map((item, index) => (
                  <div key={index} className={styles.galleryImgItem}>
                    <img
                      src={item.image[0]}
                      alt={item.title}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
              </div>
              <div>
                {clickedData && (
                  <ArtModal
                    // clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    // setClickedImg={setClickedImg}
                    handelRotationLeft={handelRotationLeft}
                    clickedData={clickedData}
                    setClickedData={setClickedData}
                  />
                )}
              </div>
            </div>

            <div  className={styles.tabPanel}
                  role="tabpanel"
                  id="panel2"
                  aria-hidden={state.tab !== 'panel2'}>
              <div className={styles.main_blockLg}>
                <h2 className={`${styles.main_imgHeading} ${styles.main_imgHeadingTheme}`}>
                  <picture>
                    <source srcSet="/art/text_theme.svg" media="(min-width: 768px)" />
                    <img src="/art/text_theme_sp.svg" alt="Themes" />
                  </picture>
                  <span>テーマ</span>
                </h2>
                <p className={styles.main_text}>The BLUE HUNTER Art Contest is looking for entries that express original ideas, designs, and settings that will drive the future technology of the ocean. </p>
                <p className={styles.main_text}>Use your imagination to create a piece of BLUE HUNTER art &#040;illustration, 3DCG&#041; that fits one the five themes below. Your free thinking will create the future of the ocean!</p>

                <div className={styles.main_apply}>
                  <h2 className={styles.main_heading2}>Themes</h2>
                  <ol className={styles.main_numberList}>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>1.</span> Hunter Item Category
                      </p>
                      <p className={styles.main_text}>Introduce items and equipment that Blue Hunters can use in their missions and more.</p>
                    </li>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>2.</span> Future Vessels and Transport Category
                      </p>
                      <p className={styles.main_text}>Invent transport and other vehicles to be used in the world of BLUE HUNTER.</p>
                    </li>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>3.</span> Undiscovered Marine Life Category
                      </p>
                      <p className={styles.main_text}>Invent as-of-yet undiscovered marine life that could appear in the world of BLUE HUNTER.</p>
                    </li>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>4.</span> Future Landscape / Architecture Category
                      </p>
                      <p className={styles.main_text}>Bring us new visions and landscapes that push the world of BLUE HUNTER forward, such as urban landscapes affected by global warming and rising sea levels, or even buildings and infrastructure in a world where global warming has been solved.</p>
                    </li>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>5.</span> Blue Hunter &#040;Original Character&#041; Category
                      </p>
                      <p className={styles.main_text}>Design a new ‘Blue Hunter’ character that can “Lead the future of the oceans” in the world of BLUE HUNTER.</p>
                    </li>
                  </ol>
                </div>
              </div>

              <div className={styles.main_blockLg}>
                <h2 className={`${styles.main_imgHeading} ${styles.main_imgHeadingPrizes}`}>
                  <picture>
                    <source srcSet="/art/text_prizes.svg" media="(min-width: 768px)" />
                    <img src="/art/text_prizes_sp.svg" alt="Prizes" />
                  </picture>
                  <span>賞</span>
                </h2>
                <table className={styles.prizes_table}>
                  <tbody>
                    <tr>
                      <th>BH Grand Prize</th>
                      <td>200,000 JPY</td>
                    </tr>
                    <tr>
                      <th>Judges’ Special Prize</th>
                      <td>100,000 JPY</td>
                    </tr>
                    <tr>
                      <th>
                      3DCG Prize<span className={styles.main_tableIcon}>NEW</span>
                      </th>
                      <td>100,000 JPY</td>
                    </tr>
                    <tr>
                      <th>Hunter Item Category Prize</th>
                      <td>50,000 JPY</td>
                    </tr>
                    <tr>
                      <th>Future Water Vessels and Transport Category Prize</th>
                      <td>50,000 JPY</td>
                    </tr>
                    <tr>
                      <th>Undiscovered Marine Life Category Prize</th>
                      <td>50,000 JPY</td>
                    </tr>
                    <tr>
                      <th>Future Landscape / Architecture Category Prize</th>
                      <td>50,000 JPY</td>
                    </tr>
                    <tr>
                      <th>Blue Hunter (Original Character) Category Prize</th>
                      <td>50,000 JPY</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.main_annotationTableWrap}>
                  <p className={styles.main_annotation}>※Total amount 650,000 JPY</p>
                </div>
              </div>

              <div className={styles.main_blockLg}>
                <h2 className={`${styles.main_imgHeading} ${styles.main_imgHeadingHowto}`}>
                  <picture>
                    <source srcSet="/art/text_howtoapply.svg" media="(min-width: 768px)" />
                    <img src="/art/text_howtoapply_sp.svg" alt="How to Apply" />
                  </picture>
                  <span>応募ステップ</span>
                </h2>
                <div className={styles.main_step}>
                  <div className={styles.main_stepItem}>
                    <div className={styles.main_stepImg}>
                      <img src="/art/step1.jpg" alt="" />
                    </div>
                    <p className={styles.main_stepTxt}>Follow the official BLUE HUNTER Twitter</p>
                    <a href="https://twitter.com/BlueHunter_Art" className={`${styles.main_stepBtn} ${styles.main_stepBtnExternal}`} target="_blank" rel="noopener">
                      <img src="/art/icon_twitter_simple.svg" width="24" height="24" className={styles.main_stepBtnImg} alt="Twitter"/>
                      Official account
                    </a>
                  </div>
                  <div className={styles.main_stepItem}>
                    <div className={styles.main_stepImg}>
                      <img src="/art/step2.jpg" alt=""/>
                    </div>
                    <p className={styles.main_stepTxt}>Create a piece of art based on one of the specified themes</p>
                    <Link to="#apply" className={`${styles.main_stepBtn} ${styles.main_stepBtnAnchor}`}>
                    Application Format
                    </Link>
                  </div>
                  <div className={styles.main_stepItem}>
                    <div className={styles.main_stepImg}>
                      <img src="/art/step3.jpg" alt=""/>
                    </div>
                    <p className={styles.main_stepTxt}>Post your art on Twitter with the application hashtags</p>
                    <Link to="#hashtag" className={`${styles.main_stepBtn} ${styles.main_stepBtnAnchor}`}>
                    About hashtags
                    </Link>
                  </div>
                </div>
                <a href="https://twitter.com/hashtag/bh_mal?src=hashtag_click&f=live" target="_blank" rel="noopener" className={`${styles.main_btn} ${styles.main_btnExternal}`}>
                  <img src="/art/icon_twitter_sm.svg" className={styles.main_btnImg} alt="Twitter" />
                  View entries
                </a>
              </div>

              <div className={styles.main_blockLg}>
                <h2 className={`${styles.main_imgHeading} ${styles.main_imgHeadingDetail}`}>
                  <picture>
                    <source srcSet="/art/text_detail.svg" media="(min-width: 768px)" />
                    <img src="/art/text_detail_sp.svg" alt="Application Details" />
                  </picture>
                  <span>応募要項</span>
                </h2>
                <div className={`${styles.main_period} ${styles.main_block}`}>
                  <h2 className={styles.main_heading2}>Contest Period</h2>
                  <p className={`${styles.main_text} ${styles.main_textLg}`}>
                  Contest runtime: August 23, 2022 10:00 JST -&nbsp;
                    <br className={styles.sp_only} />
                    October 31, 2022 10:00 JST
                  </p>
                  <p className={styles.main_annotation}>※Entry is required. For those who pass the preliminary selection, submission of “Materials for Screening” is also required</p>
                  <ol className={styles.main_numberList}>
                    <li>
                      <h3 className={styles.main_heading3}>1.Entry</h3>
                      <p className={styles.main_text}>Post your art to Twitter using the specified format</p>
                      <Link to="#apply" className={`${styles.main_link} ${styles.main_linkAnchor}`}>
                        Application Format
                      </Link>
                    </li>
                    <li>
                      <h3 className={styles.main_heading3}>2.Submission of materials for screening</h3>
                      <p className={styles.main_text}>
                        Entrants who pass the preliminary selection will be contacted via direct message and asked to provide the following:
                        <br />
                        Data: image/jpg, PNG &#040;1200px or above, square&#041; or a video/picture of the 3DCG &#040;extension, capacity, etc.&#041;
                      </p>
                      <p className={styles.main_text}>
                        Items for confirmation:&nbsp;
                        <br className={styles.sp_only} />
                        Agreement to Campaign Terms of Use, age confirmation &#040;parental or legal guardian consent required&#041;
                      </p>
                      <p className={styles.main_annotation}>※ Both professionals and amateurs are welcome to enter.</p>
                      <p className={styles.main_text}>
                        Other:&nbsp;
                        <br className={styles.sp_only} />
                        PayPal account for receipt of prize money  &#040;in the case of minors, the PayPal account must belong to winner’s parent or legal guardian&#041;
                      </p>
                      <p className={styles.main_annotation}>※In the case that a winner does not have a PayPal account, they must create one and let us know in order to accept prize money.</p>
                    </li>
                    <li>
                      <h3 className={styles.main_heading3}>3.Schedule &#040;JST&#041;</h3>
                      <div className={styles.main_blockSm}>
                        <h4 className={styles.main_heading4}>Preliminaries</h4>
                        <p className={styles.main_text}>August 23 - October 31, 2022</p>
                      </div>
                      <div className={styles.main_blockSm}>
                        <h4 className={styles.main_heading4}>Results of Preliminary Selection</h4>
                        <p className={styles.main_text}>November 24, 2022</p>
                      </div>
                      <div className={styles.main_blockSm}>
                        <h4 className={styles.main_heading4}>Final Selection</h4>
                        <p className={styles.main_text}>November 24 - December 18, 2022</p>
                      </div>
                      <div className={styles.main_blockSm}>
                        <h4 className={styles.main_heading4}>Public Examination Committee / Award Ceremony</h4>
                        <p className={styles.main_text}>December 18, 2022</p>
                      </div>
                      <div className={styles.main_blockSm}>
                        <h4 className={styles.main_heading4}>Announcement of Winning Works</h4>
                        <p className={styles.main_text}>December 18, 2022</p>
                      </div>
                      <p className={styles.main_annotation}>※Date of announcements subject to change.</p>
                    </li>
                  </ol>
                </div>
                <div className={styles.main_block}>
                  <h2 className={styles.main_heading2}>Prize Categories</h2>
                  <div className={styles.main_blockSm}>
                    <p className={styles.main_text}>Entries will be judged for their original ideas and how well they take into account leadership of the future of our oceans. The prizes available are as follows:</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <ul className={styles.main_list}>
                    <li className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>BH Grand Prize &#040;200,000 JPY&#041;</p>
                      <p className={styles.main_text}>Awarded to the most outstanding work regardless of category.</p>
                    </li>
                    <li className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>Judges’ Special Prize &#040;100,000 JPY&#041;</p>
                      <p className={styles.main_text}>Awarded to an outstanding work chosen by The Nippon Foundation, who operate the Umi-to-Nippon Project.</p>
                    </li>
                    <li className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>3DCG Prize &#040;100,000 JPY&#041;</p>
                      <p className={styles.main_text}>For this contest, 3DCG submissions will be accepted for the first time, alongside illustrations.. This award will be given to the best 3DCG entry regardless of category.</p>
                    </li>
                    <li className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>Hunter Item Category Prize &#040;50,000 JPY&#041;</p>
                      <p className={styles.main_text}>Awarded to the work which best depicts futuristic items that would be used by Blue Hunters, such as wearable equipment, equipment for capturing specimens and other equipment.</p>
                    </li>
                    <li className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>Future Water Vessels and Transport Category Prize &#040;50,000 JPY&#041;</p>
                      <p className={styles.main_text}>Awarded to a work which best depicts groundbreaking ideas in a revolutionary vehicle, mechanism, or item that will lead future technology.</p>
                    </li>
                    <li className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>Undiscovered Marine Life Category Prize &#040;50,000 JPY&#041;</p>
                      <p className={styles.main_text}>Awarded to a work which best depicts undiscovered marine life targeted by Blue Hunters. The award will be given to the work that expresses a new idea.</p>
                    </li>
                    <li className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>Future Landscape / Architecture Category Prize &#040;50,000 JPY&#041;</p>
                      <p className={styles.main_text}>Awarded to the work that has the most potential to expand the world view of BLUE HUNTER by depicting a future landscape be it beautiful or devastating.</p>
                    </li>
                    <li className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>Blue Hunter &#040;Original Character&#041; Category Prize &#040;50,000 JPY&#041;</p>
                      <p className={styles.main_text}>Awarded to the work which best depicts a realistic character that may appear in the world of Blue Hunter.</p>
                    </li>
                  </ul>
                  </div>
                </div>
                <div className={styles.main_block}>
                  <h2 className={styles.main_heading2}>Entry Requirements / Eligibility</h2>
                  <div className={styles.main_blockSm}>
                    <p className={styles.main_text}>Entrants must confirm that they meet the criteria outlined below prior to application.</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <p className={styles.main_text}>Works must be submitted between 10:00 JST on August 23 and 10:00 JST on October 31, 2022 in order to be eligible for prizes.  </p>
                    <p className={styles.main_annotation}>※Works which have been updated and resubmitted are eligible as long as it is within the above-stated time period.<br/>※There is no limit to the number of works an entrant may submit.</p>
                    <p className={styles.main_text}>□ Applicants must own the copyright of the work they submit.  If someone other than the author (copyright holder) submits the work, the entrant must obtain permission from the copyright holder.</p>
                    <p className={styles.main_text}>□ Professional and amateur artists are welcome.</p>
                    <p className={styles.main_text}>□ Team entries welcome.</p>
                    <p className={styles.main_text}>□ Sexual, political and religious content is prohibited.</p>
                    <p className={styles.main_text}>□ Any entries considered  abusive, offensive, or otherwise objectionable or inappropriate may be disqualified at any time without warning.</p>
                    <p className={styles.main_text}>□ Commercial use of submitted works is prohibited.</p>
                    <p className={styles.main_text}>□ Submission by a minor must be made by the entrant’s parent or legal guardian.</p>
                    <p className={styles.main_text}>□ Entrants who pass the preliminary selection will be contacted via direct message. Said entrants will be required to send proof of age as well as a copy of the artwork. </p>
                    <p className={styles.main_text}>□ A PayPal account is required to accept prize money.</p>
                    <p className={styles.main_text}>□ Please read and agree to the rules and regulations before entry.</p>
                  </div>
                </div>
                <div className={styles.main_block}>
                  <h2 className={styles.main_heading2}>Rules and Regulations</h2>
                  <div className={styles.main_blockSm}>
                    <p className={styles.main_text}>The BLUE HUNTER Art Contest is sponsored by Association for Creation of Education via Manga, Anime and Games &#040;“Sponsor”&#041; and organized and operated by MyAnimeList Co., Ltd. &#040;“MAL” or “Organizer”&#041; &#040;Sponsor and/or Organizer may be referred to as “we”, “us”, “our”, etc.&#041;.</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <p className={`${styles.main_text} ${styles.main_textBold}`}>
                      Eligibility
                    </p>
                    <p className={styles.main_text}>This BLUE HUNTER Art Contest is open to individuals who are 16 years of age or older at time of entry. However, individuals who are minors in their jurisdiction must have their parent or legal guardian’s consent before entering the contest. Further, children under age 16 in Europe or under age 13 in the United States and other countries may participate, but only: &#040;a&#041; with verifiable parental consent and &#040;b&#041; if the participation is in full compliance with Instagram’s terms and conditions applicable to children. We shall have the right at any time to require proof of age, parental consent, identity and/or eligibility to participate in the contest. Failure to provide such proof or insufficient proof may result in disqualification from the contest in our sole discretion. All information requested by and supplied to us for the purpose of the contest must be truthful, complete, accurate and in no way misleading. We reserve the right, in our sole discretion, to disqualify any entrant from the contest and giveaway should such an entrant at any stage supply unsatisfactory, untruthful, incomplete, inaccurate or misleading information. Sponsor’s and Organizer’s employees and anyone acting as a judge in the contest and their immediate family members are not eligible to participate in this contest.</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <p className={styles.main_text}>Regarding copyright, content and handling of submitted works</p>
                    <p className={styles.main_text}>□ You may only submit works for which you hold ownership rights. In the case that the original creator is not submitting the entry, the person submitting the entry must obtain permission from the copyright holder.</p>
                    <p className={styles.main_text}>□ You must obtain permission from the rights holders for any art, video, photography, movie, programs, music or other content or material in the work you submit. You agree that any content or material that you submit does not and will not violate third party rights of any kind. Should a third party claim infringement of copyright, violation of other rights, entitlement to compensation or damages, or assert other claims arising out of or in connection with any of your submissions, you shall be responsible for resolving the third party’s claims and you agree to defend, indemnify and hold harmless the Sponsor and Organizer from and against all such third party claims. Neither the Sponsor nor the Organizer shall bear any responsibility for such third party claims. </p>
                    <p className={styles.main_text}>□ The category for which a work has been entered for may be changed by us depending on the form of the work.</p>
                    <p className={styles.main_text}>□ All costs associated with the contest application process are your responsibility.</p>
                    <p className={styles.main_text}>□ As a general rule, we are not  required to return any materials you send to us as part of the contest application process or contest.</p>
                    <p className={styles.main_text}>□ Additional materials may need to be submitted depending on the status of judgment. </p>
                    <p className={styles.main_text}>□ We will not accept inquiries regarding the progress or results of the screening of entries.</p>
                    <p className={styles.main_text}>□ The Organizer may reproduce or otherwise use the works and materials you submit as part of the contest, but only within the scope of the judging process and as described below.</p>
                    <p className={styles.main_text}>□ The copyright of the works you submit will not be transferred to the Organizer by the submission of the entries. However, the prize-winning works and the works selected by the panel of judges may be reproduced, screened, publicly transmitted &#040;broadcasted or published on a website&#041;, displayed, translated, or otherwise used without compensation in the announcement of the results of the judging, the exhibition of the prize-winning works, publicity, and other related activities by the Organizer.  By submitting a work as part of the contest, you expressly grant, and you represent and warrant that you have a right to grant, to the Organizer a non-exclusive, worldwide, sublicensable, transferable, royalty-free, perpetual, irrevocable, license to use the work as described in the preceding sentence. </p>
                    <p className={styles.main_text}>□ You must not submit any content of a sexual, political or religious nature. Any entries we consider abusive, offensive or otherwise objectionable or inappropriate for this contest may be disqualified at any time without warning. </p>
                    <p className={styles.main_text}>□ You must follow all instructions and any other rules we may post for this contest.</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <p className={`${styles.main_text} ${styles.main_textBold}`}>
                      Release
                    </p>
                    <p className={styles.main_text}>By entering this contest and giveaway, you release the Sponsor and Organizer and their employees, officers, directors, managers and agents from any liability whatsoever, and waive any and all causes of action, related to any claims, costs, injuries, losses or damages of any kind arising out of or in connection with this contest or the transmission, failed transmission or acceptance of any prize, whether under a theory of contract, tort &#040;including negligence&#041;, warranty or any other theory.</p>
                  </div>
                </div>
                <div className={styles.main_block}>
                  <h2 className={styles.main_heading2}>Regarding Judging, Selection of Winners and Odds of Winning</h2>
                  <div className={styles.main_blockSm}>
                    <p className={styles.main_text}>Judging will be conducted in two stages: preliminary selection &#040;selection of nominated works by the Art Contest Administrative Office and final selection &#040;open screening&#041;.</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <p className={`${styles.main_text} ${styles.main_textBold}`}>◯Preliminary selection</p>
                    <p className={styles.main_text}>The BLUE HUNTER Art Contest Administrative Office will select 20 nominees based on a rigorous selection process of all entries. Those who pass the preliminary selection will be contacted directly by the Art Contest Administrative Office via Twitter to confirm their age and submit their work data. The nominated works will be announced on this website.</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <p className={`${styles.main_text} ${styles.main_textBold}`}>◯Final Selection</p>
                    <p className={styles.main_text}>A panel of judges will review the 20 entries that passed the preliminary selection to determine and award each category prize. The award-winning works will be announced on the BLUE HUNTER official website.</p>
                  </div>
                  <h3 className={styles.main_heading3} id="apply">Application Process</h3>
                  <div>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>
                      (1) Please read the terms and conditions and follow the BLUE HUNTER official Twitter account.
                      </p>
                      <p className={styles.main_annotation}>※Please make sure to follow the official Twitter account as nominees will be contacted via DM on Twitter.</p>
                    </div>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>
                      (2) Open the new Tweet screen on Twitter, select the image or 3DCG video/image of the work you want to post, and press "Next". Follow the official Twitter account.
                      </p>
                    </div>
                    <div className={styles.main_blockSm} id="hashtag">
                      <div className={styles.main_blockSm}>
                        <p className={styles.main_text}>
                        (3) Add the following two hashtags to your caption
                          <br/>　【１】#bh_mal &#040;Required&#041;<br />　【２】Category hashtag &#040;Optional, see table below&#041;
                        </p>
                      </div>
                      <div className={styles.main_blockSm}>
                        <p className={styles.main_text}>Please use the common hashtag for all entries as well as the hashtag for the name of the category you are applying for. The types of hashtags are as follows:</p>
                      </div>
                      <div className={styles.main_blockSm}>
                        <tabel className={styles.main_table}>
                          <tr>
                            <th>
                            Common hashtag for all entries<span> &#040;Required&#041;</span>
                            </th>
                            <td className={styles.main_textHashtag}>#bh_mal</td>
                          </tr>
                          <tr>
                            <th>Hunter Item Category</th>
                            <td className={styles.main_textHashtag}>#bh_item</td>
                          </tr>
                          <tr>
                            <th>Future Vessels and Transport Category</th>
                            <td className={styles.main_textHashtag}>#bh_veh</td>
                          </tr>
                          <tr>
                            <th>Undiscovered Marine Life Category</th>
                            <td className={styles.main_textHashtag}>#bh_life</td>
                          </tr>
                          <tr>
                            <th>Future Landscape / Architecture Category</th>
                            <td className={styles.main_textHashtag}>#bh_land</td>
                          </tr>
                          <tr>
                            <th>Blue Hunter (Original Character) Category</th>
                            <td className={styles.main_textHashtag}>#bh_char</td>
                          </tr>
                        </tabel>
                      </div>
                    </div>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>
                      (4) Once you’ve finished entering all the details, tap the checkmark to upload your post and your entry is complete.
                      </p>
                      <p className={styles.main_annotation}>※Your entry will count even if you only use the #bh_mal hashtag.<br />※At the very least, a post with an image of your work and the hashtag "#bh_mal" to be considered as an entry to this contest. Please note that submissions without a hashtag or with the wrong hashtag will not be accepted.</p>
                    </div>
                  </div>
                  <div className={styles.main_block}>
                    <h3 className={styles.main_heading3}>Example submission</h3>
                    <div className={styles.main_embedTwitter}>
                      <blockquote className="twitter-tweet tw-align-center">
                        <p lang="qme" dir="ltr">
                          <a href="https://twitter.com/hashtag/bh_mal?src=hash&amp;ref_src=twsrc%5Etfw">#bh_mal</a>
                          <a href="https://twitter.com/hashtag/bh_land?src=hash&amp;ref_src=twsrc%5Etfw">#bh_land</a> <a href="https://t.co/kgNUOsZ1UV">pic.twitter.com/kgNUOsZ1UV</a>
                        </p>
                        &mdash; BLUE HUNTER ArtCompetition (Official/アートコンペ公式) (@BlueHunter_Art){" "}
                        <a href="https://twitter.com/BlueHunter_Art/status/1555368544506101760?ref_src=twsrc%5Etfw">August 5, 2022</a>
                      </blockquote>{" "}
                      {/* <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                    </div>
                  </div>
                </div>
                <div className={`${styles.main_block} ${styles.main_privacy}`}>
                  <h2 className={styles.main_heading2}>Regarding Personal Information</h2>
                  <div className={styles.main_blockSm}>
                    <p className={styles.main_text}>The following policy is for the protection of applicants’ personal information. By complying with this policy we take the utmost care to prevent the leakage, misuse, or falsification of personal information.</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <ol className={styles.main_numberList}>
                      <li>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>
                          <span className={styles.main_num}>1.</span> Reasons for use of Personal Information
                        </p>
                        <div className={styles.main_blockSm}>
                          <div className={styles.main_blockSm}>
                            <p className={styles.main_text}>Information collected from you in connection with this contest will be used by us for our administration of the contest, including to:</p>
                          </div>
                          <div className={styles.main_blockSm}>
                            <p className={styles.main_text}>
                            (1) inform you of the results of screening;
                            </p>
                            <p className={styles.main_text}>
                            (2) confirm details regarding your entered work;
                            </p>
                            <p className={styles.main_text}>
                            (3) contact you regarding the application for the BLUE HUNTER Art Contest;
                            </p>
                            <p className={styles.main_text}>
                            (4) perform statistical analysis to help us improve the BLUE HUNTER Art Contest;
                            </p>
                            <p className={styles.main_text}>
                            (5) provide you information about the BLUE HUNTER Art Contest, including announcements and information on entries &#040;although you may request not to receive such communications&#041;;
                            </p>
                            <p className={styles.main_text}>
                            (6) publish the identity of the winners of the BLUE HUNTER Art Contest in mass media and on the website &#040;name of work, name, affiliation, etc.&#041; &#040;in such cases, we will contact the person in question in advance to confirm the details of the publication&#041;;
                            </p>
                            <p className={styles.main_text}>
                            (7) comply with applicable law or respond to judicial proceedings, court orders, subpoenas, search warrants or other legal or law enforcement process;
                            </p>
                            <p className={styles.main_text}>
                            (8) take action regarding illegal or suspected illegal activities, suspected fraud, situations involving potential threats to the safety or other rights and interests of any person or violations of the contest rules; and
                            </p>
                            <p className={styles.main_text}>
                            (9) otherwise use or share such information only with your consent.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>
                          <span className={styles.main_num}>2.</span> Disclosure to third parties
                        </p>
                        <p className={styles.main_text}>We will strive to manage and protect the personal information of applicants in an appropriate manner. We may share your personal information with third parties with which we have a business relationship, such as affiliates, service providers and subcontractors, and only under certain circumstances. Your information may be disclosed to the extent necessary for the holding of the BLUE HUNTER Art Contest and for the purposes described above in the “Reasons for use of Personal Information” section.</p>
                      </li>
                      <li>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>
                          General
                        </p>
                        <p className={styles.main_text}>By participating, you agree to these Rules and Regulations, any other instructions or rules we may post regarding the contest. If for any reason the contest is not capable of running as planned, Sponsor and Organizer reserve the right, in their sole discretion, to cancel, modify, or suspend the contest.</p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className={styles.main_block}>
                  <h2 className={styles.main_heading2}>Inquiries</h2>
                  <div className={styles.main_blockSm}>
                    <p className={styles.main_text}>Please contact us with any questions or other inquiries via the address below.</p>
                  </div>
                  <img src="/art/mail.png" className={styles.mail} alt="bluehunter.art@gmail.com" />
                  <p className={styles.main_text}>Inquiries made to MyAnimeList Customer Support regarding BLUE HUNTER Art Contest will not receive a response.</p>
                </div>
              </div>


            </div>

          </div>


          <ul role="tablist" className={`${styles.tabList} ${styles.tabListBottom}`} >
            <li role="presentation" className={styles.tabItem}>
              <button role="tab"
                      aria-controls="panel1"
                      aria-selected={state.tab === 'panel1'}
                      onClick={handleTabClick}>
                Nominations
              </button>
            </li>
            <li role="presentation" className={styles.tabItem}>
              <button role="tab"
                      aria-controls="panel2"
                      aria-selected={state.tab === 'panel2'}
                      onClick={handleTabClick}>
                About the contest
              </button>
            </li>
          </ul>

        </div>
      </LayoutArtEn>
    </>
  )
}

export default ArtPage
