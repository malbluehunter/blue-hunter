import React, {useEffect, useRef} from "react"
import * as styles from "./index.module.scss"
import "./index.scss"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
// import LpOpening from "../../components/organisms/LpOpening"

const LpPage = ({ location }) => {

  const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }

  useEffect(() => {
    // addScript("https://code.jquery.com/jquery-3.4.1.min.js")
    // addScript("https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js")
    // addScript("https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-5/js/4-1-5.js")
  },[]);

  const targets = useRef([])
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const addToTargets = (el) => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el)
    }
  }


  const options = {
    rootMargin: "-50% 0px",
    threshold: 0
  };

  useEffect(() => {
    targets.current.forEach((target) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if(entry.target.dataset.num === '1'){
              ref1.current.classList.add('is-current');
              ref2.current.classList.remove('is-current');
              ref3.current.classList.remove('is-current');
              ref4.current.classList.remove('is-current');
              ref5.current.classList.remove('is-current');
            }else if(entry.target.dataset.num === '2'){
              ref2.current.classList.add('is-current');
              ref1.current.classList.remove('is-current');
              ref3.current.classList.remove('is-current');
              ref4.current.classList.remove('is-current');
              ref5.current.classList.remove('is-current');
            }else if(entry.target.dataset.num === '3'){
              ref3.current.classList.add('is-current');
              ref1.current.classList.remove('is-current');
              ref2.current.classList.remove('is-current');
              ref4.current.classList.remove('is-current');
              ref5.current.classList.remove('is-current');
            }else if(entry.target.dataset.num === '4'){
              ref4.current.classList.add('is-current');
              ref1.current.classList.remove('is-current');
              ref2.current.classList.remove('is-current');
              ref3.current.classList.remove('is-current');
              ref5.current.classList.remove('is-current');
            }else if(entry.target.dataset.num === '5'){
              ref5.current.classList.add('is-current');
              ref1.current.classList.remove('is-current');
              ref2.current.classList.remove('is-current');
              ref3.current.classList.remove('is-current');
              ref4.current.classList.remove('is-current');
            }
          } else {

          }
        })
      }, options)
      observer.observe(target)
    })
  }, [targets])


  return (
    <>
      <Helmet>
        <html lang="en" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>Manga Project for the Ocean's Future</title>
        <meta
          name="description"
          content="“Imagining and forging a better future for the ocean, together”
          With over 1 million fans worldwide, BLUE HUNTER is a webtoon focused on “the future of the ocean” that has been published in multiple languages and media formats.
          Through this contest, we invite fans who resonate with the world of BLUE HUNTER to submit their original ideas and visions. Innovations in science and technology will be led by your creations."
        />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/art/" />
        <meta property="og:url" content="https://manga.uminohi.jp/en/manga-project/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Manga Project for the Ocean's Future" />
        <meta property="og:image" content="https://manga.uminohi.jp/manga-project/OGP.jpg" />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.4/vivus.min.js" /> */}
        {/* <script src="/manga-project/test.js" defer/> */}
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}

      {/* <LpOpening /> */}
      <div className={styles.bgVideoWrap}>
        <video className={styles.bgVideo} src="/manga-project/lp_bg.mov" loop autoPlay muted></video>
      </div>
      <div className={styles.fullPageScroll}>

        <section className={`${styles.section1} ${styles.section_about}`} id="top">

          <div className={styles.mv}>
            <div className={styles.mv_logo}>
              <a href="https://uminohi.jp/" target="_blank" rel="noopener">
                <img src="/manga-project/mv_logo.svg" alt="" />
              </a>
            </div>
            <div className={styles.mv_float}>
              <div className={styles.mv_lang}>
                <Link to="/manga-project/" className={styles.mv_langActive}>日本語</Link>
                <span>|</span>
                <p className={styles.mv_langInactive}>English</p>
              </div>
              <div className={styles.mv_share}>
                <p className={styles.mv_share_txt}>share:</p>
                <ul className={styles.mv_share_list}>
                  <li className={styles.mv_share_item}>
                    <a href="https://twitter.com/share?url=https://manga.uminohi.jp/en/manga-project/&text=What is Manga Project for the Ocean's Future?" target="_blank" rel="noopener"><img src="/manga-project/mv_twitter.svg" width="40" height="40" alt=""/></a>
                  </li>
                  <li className={styles.mv_share_item}>
                    <a href="https://www.facebook.com/share.php?u=https://manga.uminohi.jp/en/manga-project/" target="_blank" rel="noopener"><img src="/manga-project/mv_facebook.svg" width="40" height="40" alt=""/></a>
                  </li>
                </ul>
              </div>
            </div>
            <h1 className={styles.mv_heading}>
              <picture>
                <source srcSet="/manga-project/mv_text.svg" media="(min-width: 768px)" />
                <img src="/manga-project/mv_text_sp.svg" alt="日本財団海と日本PROJECTCHANGE FOR THE BLUE 海の未来を変える挑戦" />
              </picture>
            </h1>

            <div className={styles.mv_scroll}>
              <img src="/manga-project/text_scroll.svg" alt=""/>
            </div>

          </div>

          <div id="section1" data-num="1" ref={addToTargets} className={styles.sec1}>
            <p className={styles.lead_curtain_txt}>
              <span>What is the Manga Project <br className={styles.showSp} />for the Ocean’s Future?</span>
            </p>
            <h2 className={styles.lead_main_txt}>
              <picture>
                <source srcSet="/manga-project/lead_about_en.svg" media="(min-width: 768px)" />
                <img src="/manga-project/lead_about_en_sp.svg" alt="“Imagining and forging a better future for the ocean, together”" />
              </picture>
            </h2>
            <p className={styles.lead_txt}>With over 1 million fans worldwide, BLUE HUNTER is a webtoon focused on “the future of the ocean”< br/>that has been published in multiple languages and media formats.< br/>Through this contest, we invite fans who resonate with the world of BLUE HUNTER to submit their original ideas and visions.< br/>Innovations in science and technology will be led by your creations.< br/>The panel of judges will include real marine experts, who will judge submissions for their originality and feasibility,< br/>as well as the actual impact they might have on the ocean if made a reality. They will also hold a talk session during the awards ceremony.< br/>We aim to raise public interest in the future of our oceans and marine life by expanding the world of BLUE HUNTER through< br className={styles.showPc}/>artistic thought and vision.</p>
            <p className={styles.lead_attention}>*The “Project to raise awareness of the ocean’s future by marine manga” is being led by the General Incorporated Association for the Creation of<br />Manga / Anime / Games as part of the “Umi to Nippon” project by the Nippon Foundation.</p>
            <div className={styles.lead_logo}>
              <a href="https://uminohi.jp/" target="_blank" rel="noopener">
                <img src="/manga-project/lead_logo.svg" width="500" height="190" alt="" />
              </a>
            </div>
          </div>
        </section>

        <section id="section2" data-num="2" className={`${styles.section} ${styles.section2}`} ref={addToTargets}>
          <div className={`${styles.pcFlex} ${styles}`} >
            <div className={styles.sec_img_wrap}>
              <div className={`${styles.sec_band_blue} ${styles.sec_band_sp}`}>
                <span>Manga</span>
              </div>
              <img src="/manga-project/area1_kv.jpg" alt="" />
            </div>
            <div className={styles.sec_cont_wrap}>
              <div className={styles.sec_cont_inner}>
                <div className={`${styles.sec_band_blue} ${styles.sec_band_pc}`}>
                  <span>Manga</span>
                </div>
                <h2 className={styles.sec_cont_logo}>
                  <img src="/manga-project/area1_logo@2x.png" alt=""/>
                </h2>
                <p className={styles.sec_text}>In a world with marine science far beyond our own, high school girl Manatsu sets out on a journey in search of the mythical sea creature “Seasaurus”.<br />As part of the global project “Project Blue”, a virtual currency called “BLUE” can be earned in return for information and research on marine life and ocean ecology. Those who hunt for such knowledge and explore the unknown ocean deep are known as Blue Hunters.<br />Embark on a fantastical journey of ocean exploration with Manatsu and her friends.</p>
                <dl className={styles.sec_related}>
                  <dt><span>Production</span></dt>
                  <dd>WORLD EGGS, Yoshimoto Art Factory</dd>
                  <dt><span>Cast</span></dt>
                  <dd>Rika Nagae, Marina Inoue, Hitomi Ueda, Karin Takahashi</dd>
                </dl>
                <div className={styles.sec_linkGroup}>
                  <a className={`${styles.sec_linkBtn} ${styles.sec_linkBtn1}`} href="https://bluehunter.jp/" target="_blank" rel="noopener">Official site</a>
                  <a className={styles.sec_linkTwitter} href="https://twitter.com/bluehunter_PR" target="_blank" rel="noopener">
                    <img src="/manga-project/icon_twitter.svg" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section id="section3" data-num="3" className={`${styles.section} ${styles.section3}`} ref={addToTargets}>
          <div className={`${styles.pcFlex} ${styles}`} >
            <div className={styles.sec_img_wrap}>
              <div className={`${styles.sec_band_red} ${styles.sec_band_sp}`}>
                <span>Art Contest</span>
              </div>
              <img src="/manga-project/area2_kv.jpg" alt="" />
            </div>
            <div className={styles.sec_cont_wrap}>
              <div className={styles.sec_cont_inner}>
                <div className={`${styles.sec_band_red} ${styles.sec_band_pc}`}>
                  <span>Art Contest</span>
                </div>
                <h2 className={styles.sec_cont_logo}>
                  <img src="/manga-project/area2_logo.svg" alt="" />
                </h2>
                <p className={styles.sec_text}>The first BLUE HUNTER Art Competition was held with great success in 2021, with 691 entries from 49 countries around the world. Based on the same theme of “original ideas that capture the future of the ocean”, the contest has returned once more with some exciting upgrades. With an amazing total of 650,000 JPY in cash prizes, this year’s contest will accept not only illustrations but 3DCG submissions with its new “3DCG Prize” category. Submissions are open until October 23, 2022, with an awards ceremony planned to take place in December.
                </p>
                <div className={styles.sec_linkGroup}>
                  <a className={`${styles.sec_linkBtn} ${styles.sec_linkBtn2}`}  href="https://manga.uminohi.jp/en/art/">Official site</a>
                  <a className={styles.sec_linkTwitter} href="https://twitter.com/BlueHunter_Art" target="_blank" rel="noopener">
                    <img src="/manga-project/icon_twitter.svg" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section4" data-num="4" className={`${styles.section} ${styles.section4}`} ref={addToTargets}>
          <div className={`${styles.pcFlex} ${styles}`} >
            <div className={styles.sec_img_wrap}>
              <div className={`${styles.sec_band_blue} ${styles.sec_band_sp}`}>
                <span>Manga</span>
              </div>
              <img src="/manga-project/area3_kv.jpg" alt=""/>
            </div>
            <div className={styles.sec_cont_wrap}>
              <div className={styles.sec_cont_inner}>
                <div className={`${styles.sec_band_blue} ${styles.sec_band_pc}`}>
                  <span>Manga</span>
                </div>
                <h2 className={styles.sec_cont_logo}>
                  <img src="/manga-project/area3_logo@2x.png" alt=""/>
                </h2>
                <p className={styles.sec_text}>Top minds and cutting-edge technology gather from all corners of the Earth to embark on a mission to classify all species to inhabit our oceans — including millions yet to even be discovered.<br />Magnificent bounties await as we face the mysteries of the seven seas in this epic fantastical adventure.</p>
                <div>
                  <a className={`${styles.sec_linkBtn} ${styles.sec_linkBtn3}`}  href="https://manga.uminohi.jp/en/">Official site</a>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section id="section5" data-num="5" className={`${styles.section} ${styles.section5}`} ref={addToTargets}>
          <div className={styles.sec5_cont}>
            <div className={styles.sec5_cont_top}>
              <p className={styles.sec5_text_img}>
                <img src="/manga-project/text_producedby.svg" alt="produced by"/>
              </p>
              <p className={styles.sec5_text}>General Incorporated Association Manga, <br className={styles.showPc} />Anime and Game Education Creation Organization</p>
            </div>
            <div className={styles.sec5_logo_wrap}>
              <a href="https://uminohi.jp/" target="_blank" rel="noopener">
                <img src="/manga-project/lead_logo.svg" alt=""/>
              </a>
            </div>
          </div>
          <button className={styles.scroll_top} onClick={() => scrollTo('#top')}>ページトップへ戻る</button>
        </section>
      </div>
      <nav id="pagination" className={styles.pagination}>
        <ul className={styles.paginationList}>
          <li className={styles.paginationItem}>
            <button onClick={() => scrollTo('#section1')} ref={ref1}></button>
            <div className={styles.paginationHoverTxt}>プロジェクト概要</div>
          </li>
          <li className={styles.paginationItem}>
            <button onClick={() => scrollTo('#section2')} ref={ref2}></button>
            <div className={styles.paginationHoverTxt}>BLUE HUNTER<br />真夏の時とカイリュウ</div>
          </li>
          <li className={styles.paginationItem}>
            <button onClick={() => scrollTo('#section3')} ref={ref3}></button>
            <div className={styles.paginationHoverTxt}>BLUE HUNTER<br />Art Competition</div>
          </li>
          <li className={styles.paginationItem}>
            <button onClick={() => scrollTo('#section4')} ref={ref4}></button>
            <div className={styles.paginationHoverTxt}>BLUE HUNTER</div>
          </li>
          <li className={styles.paginationItem}>
            <button onClick={() => scrollTo('#section5')} ref={ref5}></button>
            <div className={styles.paginationHoverTxt}>Produced by</div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default LpPage
