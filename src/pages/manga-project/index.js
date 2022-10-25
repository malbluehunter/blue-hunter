import React, {useEffect, useRef} from "react"
import * as styles from "./index.module.scss"
import "./index.scss"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
import LpOpening from "../../components/organisms/LpOpening"

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
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>海洋マンガによる海の未来普及プロジェクト</title>
        <meta
          name="description"
          content="「みんなで海洋の未来を空想し、より良い未来を創る」
          全世界で100万人超が熱狂するWebtoon(縦読みマンガ)作品『BLUE HUNTER』を中心に
          ”海洋の未来”をテーマにした物語・世界観を多言語、多メディアで全世界へ発信。
          世界観に共鳴する世界中のBLUE HUNTERファンから、アートコンペティションを通じて、
          現実の科学技術を牽引するような独創的な発想(空想)を集め、海洋の専門家を通じて、実際に海洋の未来技術に貢献します。"
        />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/art/" />
        <meta property="og:url" content="https://manga.uminohi.jp/manga-project/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="海洋マンガによる海の未来普及プロジェクト" />
        <meta property="og:image" content="https://manga.uminohi.jp/manga-project/OGP.jpg" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}

      <LpOpening />
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
                <p className={styles.mv_langInactive}>日本語</p>
                <span>|</span>
                <Link to="/en/manga-project/" className={styles.mv_langActive}>English</Link>
              </div>
              <div className={styles.mv_share}>
                <p className={styles.mv_share_txt}>share:</p>
                <ul className={styles.mv_share_list}>
                  <li className={styles.mv_share_item}>
                    <a href="https://twitter.com/share?url=https://manga.uminohi.jp/manga-project/&text=海洋マンガによる海の未来普及プロジェクトとは？" target="_blank" rel="noopener"><img src="/manga-project/mv_twitter.svg" width="40" height="40" alt=""/></a>
                  </li>
                  <li className={styles.mv_share_item}>
                    <a href="https://www.facebook.com/share.php?u=https://manga.uminohi.jp/manga-project/" target="_blank" rel="noopener"><img src="/manga-project/mv_facebook.svg" width="40" height="40" alt=""/></a>
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

          <div className={styles.sec1} data-num="1" ref={addToTargets}>
            <p className={styles.lead_curtain_txt} id="section1">
              <span>海洋マンガによる<br className={styles.showSp} />海の未来普及プロジェクトとは？</span>
            </p>
            <h2 className={styles.lead_main_txt}>
              <picture>
                <source srcSet="/manga-project/lead_about.svg" media="(min-width: 768px)" />
                <img src="/manga-project/lead_about_sp.svg" alt="「みんなで海洋の未来を空想し、より良い未来を創る」" />
              </picture>
            </h2>
            <p className={styles.lead_txt}>全世界で100万人超が熱狂するWebtoon(縦読みマンガ)作品『BLUE HUNTER』を中心に<br />”海洋の未来”をテーマにした物語・世界観を多言語、多メディアで全世界へ発信。<br />世界観に共鳴する世界中のBLUE HUNTERファンから、アートコンペティションを通じて、<br />現実の科学技術を牽引するような独創的な発想(空想)を集め、海洋の専門家を通じて、実際に海洋の未来技術に貢献します。<br />発想(空想)の力で『BLUE HUNTER』の世界を拡張し人々の関心を高め、<br />発想(空想)を具現化していく。より良い海洋未来を創るプロジェクトです。</p>
            <p className={styles.lead_attention}>※「海洋マンガによる海の未来普及プロジェクト」を推進する一般社団法人マンガ・アニメ・ゲーム教育創造機構は、<br />日本財団「海と日本プロジェクト」の一環として、本活動を行っております。</p>
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
                <span>マンガ</span>
              </div>
              <img src="/manga-project/area1_kv.jpg" alt="" />
            </div>
            <div className={styles.sec_cont_wrap}>
              <div className={styles.sec_cont_inner}>
                <div className={`${styles.sec_band_blue} ${styles.sec_band_pc}`}>
                  <span>マンガ</span>
                </div>
                <h2 className={styles.sec_cont_logo}>
                  <img src="/manga-project/area1_logo@2x.png" alt=""/>
                </h2>
                <p className={styles.sec_text}>海洋科学が発達した世界で、女子高生・真夏が幻の海洋生物「シーザウルス」を求め、冒険に出る物語。<br />“プロジェクトブルー” という世界プロジェクトによって、海洋生物の生態情報に対して仮想通貨「BLUE」が付与されるようになり、未知の海洋生物探索者は「ブルーハンター」と呼ばれる。<br />真夏を中心に個性豊かなチームメンバーが集まり、さまざまな海を巡っていく海洋冒険ファンタジー。</p>
                <dl className={styles.sec_related}>
                  <dt><span>制作</span></dt>
                  <dd>WORLD EGGS、吉本アートファクトリー</dd>
                  <dt><span>キャスト</span></dt>
                  <dd>長江里加、井上麻里奈、上田瞳、高橋花林</dd>
                </dl>
                <div className={styles.sec_linkGroup}>
                  <a className={`${styles.sec_linkBtn} ${styles.sec_linkBtn1}`} href="https://bluehunter.jp/" target="_blank" rel="noopener">公式サイトをみる</a>
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
                <span>アートコンペ</span>
              </div>
              <img src="/manga-project/area2_kv.jpg" alt="" />
            </div>
            <div className={styles.sec_cont_wrap}>
              <div className={styles.sec_cont_inner}>
                <div className={`${styles.sec_band_red} ${styles.sec_band_pc}`}>
                  <span>アートコンペ</span>
                </div>
                <h2 className={styles.sec_cont_logo}>
                  <img src="/manga-project/area2_logo.svg" alt="" />
                </h2>
                <p className={styles.sec_text}>昨年49カ国691件の応募があった『BLUE HUNTER Art Competition』をバージョンアップし、グローバルで第二弾を開催中。応募締め切りは2022年10月31日。「未来の海洋を表現する独創的な投稿作品」に対して、総額65万円の賞金が贈られます。今回はイラストのみではなく、3DCG作品の応募も受け付け”3DCG賞”を設けております。 12月にアワードイベントを開催し、受賞作品を表彰いたします。
                </p>
                <div className={styles.sec_linkGroup}>
                  <a className={`${styles.sec_linkBtn} ${styles.sec_linkBtn2}`}  href="https://manga.uminohi.jp/art/" target="_blank" rel="noopener">公式サイトをみる</a>
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
                <span>マンガ</span>
              </div>
              <img src="/manga-project/area3_kv.jpg" alt=""/>
            </div>
            <div className={styles.sec_cont_wrap}>
              <div className={styles.sec_cont_inner}>
                <div className={`${styles.sec_band_blue} ${styles.sec_band_pc}`}>
                  <span>マンガ</span>
                </div>
                <h2 className={styles.sec_cont_logo}>
                  <img src="/manga-project/area3_logo@2x.png" alt=""/>
                </h2>
                <p className={styles.sec_text}>「まだ見たことのない海洋生物が、この広い海のどこかに存在しているんだ」<br />未発見生物220万種を含む、地球上全ての海洋生物を発見するというミッションに挑み、世界中の人々の叡知を集結し、海の神秘と莫大な褒賞に挑む壮大なファンタジー。</p>
                <div>
                  <a className={`${styles.sec_linkBtn} ${styles.sec_linkBtn3}`}  href="https://manga.uminohi.jp/" target="_blank" rel="noopener">公式サイトをみる</a>
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
              <p className={styles.sec5_text}>一般社団法人マンガ・アニメ・ゲーム<br className={styles.showSp} />教育創造機構</p>
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
            <div className={styles.paginationHoverTxt}>海洋マンガによる<br />海の未来普及プロジェクトとは？</div>
          </li>
          <li className={styles.paginationItem}>
            <button onClick={() => scrollTo('#section2')} ref={ref2}></button>
            <div className={styles.paginationHoverTxt}>BLUE HUNTER<br />- 真夏と時のカイリュウ -</div>
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
