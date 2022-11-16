import React, {useEffect, useState, useCallback} from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import LayoutArt from "../../components/templates/LayoutArt"
import { Link } from "gatsby"
import data from "../../data/nomination_list.json";
import ArtModal from "../../components/organisms/ArtModal";

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
        <html lang="ja" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 開始 --------------------------------------- */}
        <title>BLUE HUNTER アートコンペティション 公式サイト</title>
        <meta
          name="description"
          content="海の未発見生物を発見するミッションに挑む壮大なファンタジー「BLUEHUNTER」から、マンガの新章を記念して、全世界でアートコンペを開催します。皆さまからのたくさんのアイディアをお待ちしております！"
        />
        <meta name="keywords" content="BLUE HUNTER, ブルーハンター, ブルーハンタープロジェクト, 無料漫画, アートコンペ " />
        <link rel="canonical" href="https://manga.uminohi.jp/art/" />
        <meta property="og:url" content="https://manga.uminohi.jp/art/" />
        {/* --------------------------------------- mal様修正範囲(meta情報) 終了 --------------------------------------- */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="「BLUE HUNTER」アートコンペ公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/art/ogp_art.png" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutArt>
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
                ノミネート作品
              </button>
            </li>
            <li role="presentation" className={styles.tabItem}>
              <button role="tab"
                      aria-controls="panel2"
                      aria-selected={state.tab === 'panel2'}
                      onClick={handleTabClick}>
                コンテストについて
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
              <h2 className={styles.main_heading2}>ハンターアイテム部門</h2>
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
              <h2 className={styles.main_heading2}>未来の船舶・移動手段部門</h2>
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
              <h2 className={styles.main_heading2}>未知の海洋生物部門</h2>
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
              <h2 className={styles.main_heading2}>未来の風景・建築部門</h2>
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
              <h2 className={styles.main_heading2}>BLUE HUNTER（新キャラ）部門</h2>
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
                <p className={styles.main_text}>『BLUE HUNTER アートコンペティション』では「海洋の未来技術を牽引するような、独創的な発想・造形・設定が表現された作品」を、部門別に募集致します。</p>
                <p className={styles.main_text}>次の5部門から好きなテーマを選び、自分が想像するBLUE HUNTERの世界をアート&#040;イラスト、3DCG&#041;で表現してください。皆様の自由な発想が、海洋の未来を創ります。</p>

                <div className={styles.main_apply}>
                  <h2 className={styles.main_heading2}>応募部門</h2>
                  <ol className={styles.main_numberList}>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>1.</span> ハンターアイテム部門
                      </p>
                      <p className={styles.main_text}>BLUE HUNTER世界で、BLUE HUNTERが使用している、未来の技術が用いられた捕獲アイテム、装備、武器など</p>
                    </li>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>2.</span> 未来の船舶・移動手段部門
                      </p>
                      <p className={styles.main_text}>BLUE HUNTER世界で使われている交通手段、調査船、その他乗り物全般</p>
                    </li>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>3.</span> 未知の海洋生物部門
                      </p>
                      <p className={styles.main_text}>BLUE HUNTER世界に存在するであろう、まだ見ぬ新種の生物</p>
                    </li>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>4.</span> 未来の風景・建築部門
                      </p>
                      <p className={styles.main_text}>温暖化や海面上昇が進んだ都市風景、温暖化が解消された建造物やインフラなど、BLUE HUNTER世界を押し広げる新しい世界観・風景</p>
                    </li>
                    <li>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>
                        <span className={styles.main_num}>5.</span> BLUE HUNTER（新キャラ）部門
                      </p>
                      <p className={styles.main_text}>あなたが考える ”海洋の未来を牽引するような” BLUE HUNTER新キャラクターのキャラデザインと設定</p>
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
                      <th>BH大賞</th>
                      <td>賞金20万円</td>
                    </tr>
                    <tr>
                      <th>審査員特別賞</th>
                      <td>賞金10万円</td>
                    </tr>
                    <tr>
                      <th>
                        3DCG賞<span className={styles.main_tableIcon}>NEW</span>
                      </th>
                      <td>賞金10万円</td>
                    </tr>
                    <tr>
                      <th>未知の海洋生物部門賞</th>
                      <td>賞金5万円</td>
                    </tr>
                    <tr>
                      <th>未来の船舶・移動手段部門賞</th>
                      <td>賞金5万円</td>
                    </tr>
                    <tr>
                      <th>未来の風景・建築部門賞</th>
                      <td>賞金5万円</td>
                    </tr>
                    <tr>
                      <th>BLUE HUNTER（新キャラ）賞</th>
                      <td>賞金5万円</td>
                    </tr>
                    <tr>
                      <th>ハンターアイテム部門賞</th>
                      <td>賞金5万円</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.main_annotationTableWrap}>
                  <p className={styles.main_annotation}>※総額65万円</p>
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
                    <p className={styles.main_stepTxt}>BLUE HUNTERのTwitter公式アカウントをフォロー</p>
                    <a href="https://twitter.com/BlueHunter_Art" className={`${styles.main_stepBtn} ${styles.main_stepBtnExternal}`} target="_blank" rel="noopener">
                      <img src="/art/icon_twitter_simple.svg" width="24" height="24" className={styles.main_stepBtnImg} alt="Twitter"/>
                      フォローする
                    </a>
                  </div>
                  <div className={styles.main_stepItem}>
                    <div className={styles.main_stepImg}>
                      <img src="/art/step2.jpg" alt=""/>
                    </div>
                    <p className={styles.main_stepTxt}>テーマに沿って作品を制作</p>
                    <Link to="#apply" className={`${styles.main_stepBtn} ${styles.main_stepBtnAnchor}`}>
                      応募方法について
                    </Link>
                  </div>
                  <div className={styles.main_stepItem}>
                    <div className={styles.main_stepImg}>
                      <img src="/art/step3.jpg" alt=""/>
                    </div>
                    <p className={styles.main_stepTxt}>Twitterに#ハッシュタグをつけて作品を投稿</p>
                    <Link to="#hashtag" className={`${styles.main_stepBtn} ${styles.main_stepBtnAnchor}`}>
                      ハッシュタグの詳細
                    </Link>
                  </div>
                </div>
                <a href="https://twitter.com/hashtag/bh_mal?src=hashtag_click&f=live" target="_blank" rel="noopener" className={`${styles.main_btn} ${styles.main_btnExternal}`}>
                  <img src="/art/icon_twitter_sm.svg" className={styles.main_btnImg} alt="Twitter"/>
                  作品を見る
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
                    <h2 className={styles.main_heading2}>実施期間</h2>
                    <p className={`${styles.main_text} ${styles.main_textLg}`}>
                      作品募集 2022年8月23日(火) 日本時間10:00~
                      <br className={styles.sp_only} />
                      10月31日(月)日本時間10:00
                    </p>
                    <p className={styles.main_annotation}>※作品の応募には、「応募申込」と一次審査通過者には「審査用資料の提出」が必要です。</p>
                    <ol className={styles.main_numberList}>
                      <li>
                        <h3 className={styles.main_heading3}>1.応募申込</h3>
                        <p className={styles.main_text}>Twitterへの指定フォーマットでの投稿</p>
                        <Link to="#apply" className={`${styles.main_link} ${styles.main_linkAnchor}`}>
                          応募方法について
                        </Link>
                      </li>
                      <li>
                        <h3 className={styles.main_heading3}>2.一次審査通過者の提出</h3>
                        <p className={styles.main_text}>
                          1次選考後、通過者にDMにて通知
                          <br />
                          作品納入データ：画像/jpg, PNG（1200px以上　正方形） or 3DCGを撮影した動画または画像
                          <br />
                          確認事項：
                          <br className={styles.sp_only} />
                          キャンペーン規約への同意　年齢確認(18歳未満は保護者の同意必須)　
                        </p>
                        <p className={styles.main_annotation}>※プロ、アマチュア問わず応募できます。</p>
                        <p className={styles.main_text}>
                          その他：
                          <br className={styles.sp_only} />
                          受賞時の賞金受け取り用の自身または保護者のPayPalアカウント
                        </p>
                        <p className={styles.main_annotation}>※PayPalアカウントをお持ちでない場合は、受賞後に作成しご連絡ください。賞金をお受け頂けません。</p>
                      </li>
                      <li>
                        <h3 className={styles.main_heading3}>3.スケジュール</h3>
                        <div className={styles.main_blockSm}>
                          <h4 className={styles.main_heading4}>一次審査</h4>
                          <p className={styles.main_text}>2022年8月23日〜10月31日</p>
                        </div>
                        <div className={styles.main_blockSm}>
                          <h4 className={styles.main_heading4}>一次選考結果発表</h4>
                          <p className={styles.main_text}>2022年11月24日</p>
                        </div>
                        <div className={styles.main_blockSm}>
                          <h4 className={styles.main_heading4}>最終審査期間</h4>
                          <p className={styles.main_text}>2022年11月24日〜12月18日</p>
                        </div>
                        <div className={styles.main_blockSm}>
                          <h4 className={styles.main_heading4}>公開審査会・表彰式</h4>
                          <p className={styles.main_text}>2022年12月18日</p>
                        </div>
                        <div className={styles.main_blockSm}>
                          <h4 className={styles.main_heading4}>受賞作品結果発表</h4>
                          <p className={styles.main_text}>2022年12月18日</p>
                        </div>
                        <p className={styles.main_annotation}>※結果発表に関しては日程に変更がある可能性が御座います。</p>
                      </li>
                    </ol>
                  </div>
                  <div className={styles.main_block}>
                    <h2 className={styles.main_heading2}>募集部門</h2>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>未来の海洋技術を牽引する独創的な発想・造形を考慮し、審査させて頂きます。</p>
                    </div>
                    <div className={styles.main_blockSm}>
                      <ul className={styles.main_list}>
                      <li className={styles.main_blockSm}>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>BH大賞（賞金20万円）</p>
                        <p className={styles.main_text}>部門を超えて最も優秀な作品に贈られます。</p>
                      </li>
                      <li className={styles.main_blockSm}>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>審査員特別賞（賞金10万円）</p>
                        <p className={styles.main_text}>『海と日本PROJECT』の日本財団が選ぶ、優秀作品に贈られます。</p>
                      </li>
                      <li className={styles.main_blockSm}>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>3DCG賞（賞金10万円）</p>
                        <p className={styles.main_text}>本コンテストでは、イラストだけでなく、3DCGの応募を受け付けます。<br />部門問わず、優秀な3DCG作品に贈られます。</p>
                      </li>
                      <li className={styles.main_blockSm}>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>未知の海洋生物部門賞（賞金5万円）</p>
                        <p className={styles.main_text}>BLUE HUNTERがターゲットとする、まだ発見されていない新種の海洋生物。新しい発想を表現した作品に贈られます。</p>
                      </li>
                      <li className={styles.main_blockSm}>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>未来の船舶・移動手段部門賞（賞金5万円）</p>
                        <p className={styles.main_text}>未来の技術を牽引する、画期的な乗り物、メカ、アイテムで画期的なアイデアのある作品に贈られます。</p>
                      </li>
                      <li className={styles.main_blockSm}>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>未来の風景・建築部門賞（賞金5万円）</p>
                        <p className={styles.main_text}>美しい未来、荒廃した未来。様々な未来の風景があり、BLUE HUNTERの世界観を最も広げる可能性を秘めた作品に贈ります。</p>
                      </li>
                      <li className={styles.main_blockSm}>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>BLUE HUNTER（新キャラ）賞（賞金5万円）</p>
                        <p className={styles.main_text}>BLUE HUNTERの世界に登場しそうなリアリティのあるキャラクターを描いた作品に贈ります。</p>
                      </li>
                      <li className={styles.main_blockSm}>
                        <p className={`${styles.main_text} ${styles.main_textBold}`}>ハンターアイテム部門賞（賞金5万円）</p>
                        <p className={styles.main_text}>BLUE HUNTERが使用しているであろう、未来の技術が用いられた捕獲アイテム、装備、武器など</p>
                      </li>
                    </ul>
                    </div>
                  </div>
                  <div className={styles.main_block}>
                    <h2 className={styles.main_heading2}>応募条件/応募資格</h2>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>応募する作品が下記に該当するかを必ず確認の上でご応募ください。</p>
                    </div>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>□ 2022 年 8月 23 日 日本時間10:00から 2022 年 10月 13日 日本時間10:00までの間に完成または、すでに完成してこの期間内に投稿された作品。</p>
                      <p className={styles.main_annotation}>※更新、リニューアルされた作品で上記期間中に完成、または発表された作品も応募可能<br/>※応募する作品数に制限なし</p>
                      <p className={styles.main_text}>□ 応募者は作品の著作権を有することが必須。  作者&#040;著作権者&#041;以外の方が応募する場合は、必ず著作権者に承諾を得てください。</p>
                      <p className={styles.main_text}>□プロ/アマ問わず応募可</p>
                      <p className={styles.main_text}>□チームでの応募可</p>
                      <p className={styles.main_text}>□性的、政治的、宗教的表現のある作品は投稿禁止</p>
                      <p className={styles.main_text}>□応募者が暴力団員による不当な行為の防止等に関する法律（平成３年法律第 77 号）第２条第２号に規定する暴力団、同条第６号に規定する暴力団員、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標榜ゴロ、特殊知能暴力集団等その他暴力、威力、詐欺的手法を駆使して経済的利益を追求する集団若しくは個人、又はこれらに準じる者（以下、総称して「反社会的勢力」という。）であること、または応募者について反社会的勢力の活動を助長する行為が判明した場合、審査の対象外となります。受賞発表後に判明した場合であっても、受賞は事前告知なく取り消されます。また、その場合に生ずる損害について賠償は一切行われません。</p>
                      <p className={styles.main_text}>□運営側の判断により不適切と判断された投稿は事前告知なく削除いたします。</p>
                      <p className={styles.main_text}>□応募作品の商用利用禁止</p>
                      <p className={styles.main_text}>□応募作品と同一作品の他のコンペ等への二重応募は禁止</p>
                      <p className={styles.main_text}>□応募者が20歳未満の場合は、保護者の方が代理で投稿してください。</p>
                      <p className={styles.main_text}>□一次選考通過者にはTwitterのDMにて連絡を行い、年齢の確認をいたします。また、作品データの提出をお願いします。</p>
                      <p className={styles.main_text}>□賞金と受領にはPayPalのアカウントが必要です。</p>
                      <p className={styles.main_text}>□応募規定特記を必ずお読みいただき、同意の上でご応募ください。</p>
                    </div>
                  </div>
                  <div className={styles.main_block}>
                    <h2 className={styles.main_heading2}>応募規定特記</h2>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>応募作品の著作権と作品取り扱いについて</p>
                    </div>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>□ 応募者は作品の著作権を有することが必要です。作者&#040;著作権者&#041;以外の方が応募する場合は、必ず著作権者に承諾を得てください。</p>
                      <p className={styles.main_text}>□ 作品中に使用される美術、映画、写真、映像、プログラムおよび音楽等については、必ず著作権者の許諾を得た上で応募してください。第三者からの権利侵害、損害賠償等の主張がなされたとしても、応募者が自らの責任で対処することとし、主催者は一切の責任を負いません。</p>
                      <p className={styles.main_text}>□ 作品の形態によって応募部門を変更する場合があります。</p>
                      <p className={styles.main_text}>□ 応募に伴う一切の費用は、応募者の負担となります。</p>
                      <p className={styles.main_text}>□ 提出された応募作品・資料は、原則として返却いたしません。</p>
                      <p className={styles.main_text}>□ 審査の状況によっては追加資料の提出が必要となる場合があります。 </p>
                      <p className={styles.main_text}>□ 応募作品の審査経過・結果についてのお問合せは、事務局ではお受けできません。 </p>
                      <p className={styles.main_text}>□ 審査過程の範囲に限り、応募された作品・資料について複製等の行為をさせていただくことがあります。  </p>
                      <p className={styles.main_text}>□ 応募によって作品の著作権が主催者へ移転することはありませんが、受賞作品および審査委員会推薦作品は、主催者による審査結果発表、受賞作品展、広報およびその他関連事業において、複製、上映、公衆送信(放送・ウェブサイトによる公開)、展示、翻訳等の行為を無償でさせていただくことがあります。</p>
                    </div>
                  </div>
                  <div className={styles.main_block}>
                    <h2 className={styles.main_heading2}>審査について</h2>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>審査は一次選考（アートコンペティション事務局によるノミネート作品の選出）、最終選考（公開審査）の二段階方式で行います。</p>
                    </div>
                    <div className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>◯一次選考</p>
                      <p className={styles.main_text}>全応募作品を対象にアートコンペティション事務局による厳正な選考のもと、ノミネート作品を20点選出します。一次選考通過者には、アートコンペティション事務局よりTwitterを通して直接ご連絡し、年齢確認および作品データの提出をしていただきます。ノミネート作品は当サイトにて発表します。</p>
                    </div>
                    <div className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>◯最終選考</p>
                      <p className={styles.main_text}>一次選考を通過した20作品を、審査員により審査を行います。各部門賞を決定し表彰式にて表彰します。合わせて受賞作品を、BLUE HUNTER公式サイトにて発表致します。</p>
                    </div>
                    <div className={styles.main_blockSm}>
                      <p className={`${styles.main_text} ${styles.main_textBold}`}>審査員(予定)</p>
                      <ul className={styles.main_list}>
                        <li>
                          <p className={styles.main_text}>日本財団　海野常務</p>
                        </li>
                        <li>
                          <p className={styles.main_text}>海洋生物研究家 鈴木マリブ</p>
                        </li>
                        <li>
                          <p className={styles.main_text}>海洋調査、研究関係者</p>
                        </li>
                        <li>
                          <p className={styles.main_text}>声優○○</p>
                        </li>
                        <li>
                          <p className={styles.main_text}>BLUE HUNTER原作者</p>
                        </li>
                        <li>
                          <p className={styles.main_text}>著名3Dモデラー 吉本大輝</p>
                        </li>
                        <li>
                          <p className={styles.main_text}>世界のマンガコミュニティ MyAnimeList  Gino 直樹</p>
                        </li>
                      </ul>
                      <p className={styles.main_annotation}>※審査員は、事務局が絞り込んだ20作品の審査を、10月21日(金)〜11月1日(火)の期間で審査</p>
                    </div>
                    <h3 className={styles.main_heading3} id="apply">応募方法</h3>
                    <div>
                      <div className={styles.main_blockSm}>
                        <p className={styles.main_text}>
                        （1）規約をお読み頂き、BLUE HUNTER公式Twitterアカウントをフォローしてください
                        </p>
                        <p className={styles.main_annotation}>※一次審査通過のご連絡をTwitterDMで行いますので、必ずフォローをお願い致します。</p>
                      </div>
                      <div className={styles.main_blockSm}>
                        <p className={styles.main_text}>
                        （2）Tweet画面を開き、投稿する作品画像、または3DCGを撮影した動画または画像を選んで「次へ」を押してください。公式Twitterアカウントをフォロー
                        </p>
                      </div>
                      <div className={styles.main_blockSm} id="hashtag">
                        <div className={styles.main_blockSm}>
                          <p className={styles.main_text}>
                          （3）キャプション（本文）に2種類のハッシュタグを入力してください。
                            <br/>　【１】#bh_mal（必須）<br />　【２】#bh_部門名（任意）
                          </p>
                        </div>
                        <div className={styles.main_blockSm}>
                          <p className={styles.main_text}>応募者全員が共通でつけていただくハッシュタグと、それぞれ応募する部門名のハッシュタグをつけてください。ハッシュタグの種類は次のとおりです。</p>
                        </div>
                        <div className={styles.main_blockSm}>
                          <tabel className={styles.main_table}>
                            <tr>
                              <th>
                                全員共通<span>（必須）</span>
                              </th>
                              <td className={styles.main_textHashtag}>#bh_mal</td>
                            </tr>
                            <tr>
                              <th>ハンターアイテム部門</th>
                              <td className={styles.main_textHashtag}>#bh_item</td>
                            </tr>
                            <tr>
                              <th>未来の船舶・移動手段部門</th>
                              <td className={styles.main_textHashtag}>#bh_veh</td>
                            </tr>
                            <tr>
                              <th>未知の海洋生物部門</th>
                              <td className={styles.main_textHashtag}>#bh_life</td>
                            </tr>
                            <tr>
                              <th>未来の風景・建築部門</th>
                              <td className={styles.main_textHashtag}>#bh_land</td>
                            </tr>
                            <tr>
                              <th>ブルーハンター部門</th>
                              <td className={styles.main_textHashtag}>#bh_char</td>
                            </tr>
                          </tabel>
                        </div>
                      </div>
                      <div className={styles.main_blockSm}>
                        <p className={styles.main_text}>
                        （4）すべての入力が終わったら「Tweet」を押し、投稿したら応募完了です。
                        </p>
                        <p className={styles.main_annotation}>※ハッシュタグは「#bh_mal」だけでも構いません。<br />※最低限、作品画像とハッシュタグ「#bh_mal」がついた投稿であれば、当コンペへ応募したとみなされます。ハッシュタグがついていない投稿、間違ったハッシュタグをつけている投稿は、応募が認められませんのでご注意ください。</p>
                      </div>
                    </div>
                    <div className={styles.main_block}>
                      <h3 className={styles.main_heading3}>投稿例</h3>
                      <div className={styles.main_embedTwitter}>
                        <blockquote className="twitter-tweet tw-align-center">
                          <p lang="qme" dir="ltr">
                            <a href="https://twitter.com/hashtag/bh_mal?src=hash&amp;ref_src=twsrc%5Etfw">#bh_mal</a>
                            <a href="https://twitter.com/hashtag/bh_land?src=hash&amp;ref_src=twsrc%5Etfw">#bh_land</a> <a href="https://t.co/kgNUOsZ1UV">pic.twitter.com/kgNUOsZ1UV</a>
                          </p>
                          &mdash; BLUE HUNTER ArtCompetition (Official/アートコンペ公式) (@BlueHunter_Art){" "}
                          <a href="https://twitter.com/BlueHunter_Art/status/1555368544506101760?ref_src=twsrc%5Etfw">August 5, 2022</a>
                        </blockquote>{" "}
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.main_block} ${styles.main_privacy}`}>
                    <h2 className={styles.main_heading2}>個人情報について</h2>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>応募者の個人情報保護の考え方を以下の通り定め、これを遵守することにより、個人情報の漏洩、流用、改ざん等の防止に細心の注意を払います。</p>
                    </div>
                    <div className={styles.main_blockSm}>
                      <ol className={styles.main_numberList}>
                        <li>
                          <p className={`${styles.main_text} ${styles.main_textBold}`}>
                            <span className={styles.main_num}>1.</span> 個人情報の利用目的
                          </p>
                          <div className={styles.main_blockSm}>
                            <div className={styles.main_blockSm}>
                              <p className={styles.main_text}>応募者の個人情報は、以下の利用目的の範囲内でのみ利用させていただきます。</p>
                            </div>
                            <div className={styles.main_blockSm}>
                              <p className={styles.main_text}>
                              (1)審査結果の通知
                              </p>
                              <p className={styles.main_text}>
                              (2)応募作品についての確認事項のご連絡
                              </p>
                              <p className={styles.main_text}>
                              (3)BLUE HUNTERアートコンペティションのご応募等に関するご連絡
                              </p>
                              <p className={styles.main_text}>
                              (4)BLUE HUNTERアートコンペティションの向上に役立てるための統計分析
                              </p>
                              <p className={styles.main_text}>
                              (5)BLUE HUNTERアートコンペティションの発表会や募集などに関するご案内 (希望されない場合は申し出により停止いたします。)
                              </p>
                              <p className={styles.main_text}>
                              (6)BLUE HUNTERアートコンペティション入賞者のマスメディアおよびウェブサイトへの公表 (作品名、氏名、所属等。なお、その場合は公表内容を事前に本人に連絡の上、確認します。) 上記目的以外で必要が生じた場合は、ご本人の承諾を得た上で利用することとします。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <p className={`${styles.main_text} ${styles.main_textBold}`}>
                            <span className={styles.main_num}>2.</span>  第三者への開示・提示
                          </p>
                          <p className={styles.main_text}>応募者の個人情報は、適切な方法で管理・保護に努めてまいります。応募者の個人情報を、ご本人の同意なく第三者に開示・提供は致しません。ただし、BLUE HUNTERアートコンペティション開催、事務局運営の業務に必要な範囲内で業務委託先に開示することがあります。 また、人の生命、身体または財産の保護のために開示の必要があり、ご本人の同意を得ることが困難である場合、また法令により個人情報の開示が求められた場合はこの限りではありません。</p>
                        </li>
                        <li>
                          <p className={`${styles.main_text} ${styles.main_textBold}`}>
                            <span className={styles.main_num}>3.</span>  応募者の同意
                          </p>
                          <p className={styles.main_text}>応募者は上記「応募規定特記」の内容を確認してから、応募申込をしてください。 応募申込をもって、応募者および作者の同意を得られたものとします。</p>
                        </li>
                      </ol>
                      <span className={`${styles.main_text} ${styles.main_textRight}`}>以上</span>
                    </div>
                  </div>
                  <div className={styles.main_block}>
                    <h2 className={styles.main_heading2}>お問い合わせ</h2>
                    <div className={styles.main_blockSm}>
                      <p className={styles.main_text}>お問い合わせは下記メールアドレスへお願いいたします。</p>
                    </div>
                    <img src="/art/mail.png" className={styles.mail} alt="bluehunter.art@gmail.com" />
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
                ノミネート作品
              </button>
            </li>
            <li role="presentation" className={styles.tabItem}>
              <button role="tab"
                      aria-controls="panel2"
                      aria-selected={state.tab === 'panel2'}
                      onClick={handleTabClick}>
                コンテストについて
              </button>
            </li>
          </ul>
        </div>
      </LayoutArt>
    </>
  )
}

export default ArtPage
