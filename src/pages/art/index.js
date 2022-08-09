import React from "react"
import * as styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import LayoutArt from "../../components/templates/LayoutArt"
import { Link } from "gatsby"

const ArtPage = ({ location }) => {
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
        <meta property="og:site_name" content="「BLUE HUNTER」公式サイト" />
        <meta property="og:image" content="https://manga.uminohi.jp/art/ogp.png" />
      </Helmet>

      {/* --------------------------------------- mal様修正範囲 開始 --------------------------------------- */}
      <LayoutArt>
        <div className={styles.twitter_logo}>
          <a href="https://twitter.com/BlueHunter_Art" target="_blank" rel="noopener">
            <img src="/art/icon_hover_twitter.svg" width="62" height="74" />
          </a>
        </div>
        <div className={styles.main}>
          <div className={styles.main_blockLg}>
            <h2 className={`${styles.main_imgHeading} ${styles.main_imgHeadingTheme}`}>
              <picture>
                <source srcSet="/art/text_theme.svg" media="(min-width: 768px)" />
                <img src="/art/text_theme_sp.svg" alt="" />
              </picture>
              <span>テーマ</span>
            </h2>
            <p className={styles.main_text}>『BLUE HUNTER アートコンペティション』では「海洋の未来技術を牽引するような、独創的な発想・造形・設定が表現された作品」を、部門別に募集いたします。</p>
            <p className={styles.main_text}>次の5部門から好きなテーマを選び、自分が想像するBLUE HUNTERの世界をアートで表現してください。皆様の自由な発想が、海洋の未来を創ります。</p>

            <div className={styles.main_apply}>
              <h2 className={styles.main_heading2}>応募部門</h2>
              <ol className={styles.main_numberList}>
                <li>
                  <p className={`${styles.main_text} ${styles.main_textBold}`}>
                    <span className={styles.main_num}>1.</span> 未知の海洋生物部門
                  </p>
                  <p className={styles.main_text}>BLUE HUNTER世界に存在するであろう、まだ見ぬ新種の生物</p>
                </li>
                <li>
                  <p className={`${styles.main_text} ${styles.main_textBold}`}>
                    <span className={styles.main_num}>2.</span> 未来の船舶・移動手段部門
                  </p>
                  <p className={styles.main_text}>BLUE HUNTER世界で使われている交通手段、調査船、その他乗り物全般</p>
                </li>
                <li>
                  <p className={`${styles.main_text} ${styles.main_textBold}`}>
                    <span className={styles.main_num}>3.</span> 未来の風景・建築部門
                  </p>
                  <p className={styles.main_text}>温暖化や海面上昇が進んだ都市風景、温暖化が解消された建造物やインフラなど、BLUE HUNTER世界を押し広げる新しい世界観・風景</p>
                </li>
                <li>
                  <p className={`${styles.main_text} ${styles.main_textBold}`}>
                    <span className={styles.main_num}>4.</span> BLUE HUNTER（新キャラ）部門
                  </p>
                  <p className={styles.main_text}>あなたが考えるBLUE HUNTER新キャラクターのキャラデザインと設定</p>
                </li>
                <li>
                  <p className={`${styles.main_text} ${styles.main_textBold}`}>
                    <span className={styles.main_num}>5.</span> ハンターアイテム部門
                  </p>
                  <p className={styles.main_text}>BLUE HUNTER世界で、BLUE HUNTERが使用している、未来の技術が用いられた捕獲アイテム、装備、武器など</p>
                </li>
              </ol>
            </div>
          </div>

          <div className={styles.main_blockLg}>
            <h2 className={`${styles.main_imgHeading} ${styles.main_imgHeadingPrizes}`}>
              <picture>
                <source srcSet="/art/text_prizes.svg" media="(min-width: 768px)" />
                <img src="/art/text_prizes_sp.svg" alt="" />
              </picture>
              <span>賞</span>
            </h2>
            <table className={styles.prizes_table}>
              <tbody>
                <tr>
                  <th>BH大賞</th>
                  <td>賞金30万円</td>
                </tr>
                <tr>
                  <th>審査員特別賞</th>
                  <td>賞金12万円</td>
                </tr>
                <tr>
                  <th>
                    3DCG部門<span className={styles.main_tableIcon}>NEW</span>
                  </th>
                  <td>賞金10万円</td>
                </tr>
                <tr>
                  <th>ナラティブ賞</th>
                  <td>賞金2万円</td>
                </tr>
                <tr>
                  <th>ハンターアイテム部門賞</th>
                  <td>賞金2万円</td>
                </tr>
                <tr>
                  <th>未来の船舶・移動手段部門賞</th>
                  <td>賞金2万円</td>
                </tr>
                <tr>
                  <th>未知の海洋生物部門賞</th>
                  <td>賞金2万円</td>
                </tr>
                <tr>
                  <th>未来の風景・建築部門賞</th>
                  <td>賞金2万円</td>
                </tr>
                <tr>
                  <th>BLUE HUNTER（新キャラ）賞</th>
                  <td>賞金2万円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.main_blockLg}>
            <h2 className={`${styles.main_imgHeading} ${styles.main_imgHeadingHowto}`}>
              <picture>
                <source srcSet="/art/text_howtoapply.svg" media="(min-width: 768px)" />
                <img src="/art/text_howtoapply_sp.svg" alt="" />
              </picture>
              <span>応募ステップ</span>
            </h2>
            <div className={styles.main_step}>
              <div className={styles.main_stepItem}>
                <div className={styles.main_stepImg}>
                  <img src="/art/step1.jpg" />
                </div>
                <p className={styles.main_stepTxt}>BLUE HUNTERのTwitter公式アカウントをフォロー</p>
                <a href="https://twitter.com/BlueHunter_Art" className={`${styles.main_stepBtn} ${styles.main_stepBtnExternal}`} target="_blank" rel="noopener">
                  <img src="/art/icon_twitter_simple.svg" width="24" height="24" className={styles.main_stepBtnImg} />
                  フォローする
                </a>
              </div>
              <div className={styles.main_stepItem}>
                <div className={styles.main_stepImg}>
                  <img src="/art/step2.jpg" />
                </div>
                <p className={styles.main_stepTxt}>テーマに沿って作品を制作</p>
                <Link to="./#test" className={`${styles.main_stepBtn} ${styles.main_stepBtnAnchor}`}>
                  応募方法について
                </Link>
              </div>
              <div className={styles.main_stepItem}>
                <div className={styles.main_stepImg}>
                  <img src="/art/step3.jpg" />
                </div>
                <p className={styles.main_stepTxt}>Twitterに#ハッシュタグをつけて作品を投稿</p>
                <Link to="/" className={`${styles.main_stepBtn} ${styles.main_stepBtnAnchor}`}>
                  ハッシュタグの詳細
                </Link>
              </div>
            </div>
            <Link to="/" className={`${styles.main_btn} ${styles.main_btnExternal}`}>
              <img src="/art/icon_twitter_sm.svg" className={styles.main_btnImg} />
              作品を見る
            </Link>
          </div>

          <div className={styles.main_blockLg}>
            <h2 className={`${styles.main_imgHeading} ${styles.main_imgHeadingDetail}`}>
              <picture>
                <source srcSet="/art/text_detail.svg" media="(min-width: 768px)" />
                <img src="/art/text_detail_sp.svg" alt="" />
              </picture>
              <span>応募要項</span>
            </h2>
            <div className={styles.main_period}>
              <h2 className={styles.main_heading2}>実施期間</h2>
              <p className={`${styles.main_text} ${styles.main_textLg}`}>
                2022年8月x日(金) 10:00〜
                <br className={styles.sp_only} />
                12月18日(日)10:00(日本時間)
              </p>
              <p className={styles.main_annotation}>※作品の応募には、「応募申込」と一次審査通過者には「審査用資料の提出」が必要です。</p>
              <ol className={styles.main_numberList}>
                <li>
                  <h3 className={styles.main_heading3}>1.応募申込</h3>
                  <p className={styles.main_text}>Twitterへの指定フォーマットでの投稿</p>
                  <Link to="/" className={`${styles.main_link} ${styles.main_linkAnchor}`}>
                    応募方法について
                  </Link>
                </li>
                <li>
                  <h3 className={styles.main_heading3}>2.一次審査通過者の提出</h3>
                  <p className={styles.main_text}>
                    1次選考後、通過者にDMにて通知
                    <br />
                    作品納入データ：画像/jpg, PNG（1200px以上　正方形） or 3DCGを撮影した動画または画像(拡張子や容量など)
                    <br />
                    確認事項：
                    <br className={styles.sp_only} />
                    キャンペーン規約への同意　年齢確認
                  </p>
                  <p className={styles.main_annotation}>※プロ、アマチュア問わず応募できます。</p>
                  <p className={styles.main_text}>
                    その他：
                    <br className={styles.sp_only} />
                    受賞時の賞金受け取り用の自身または保護者のPayPalアカウント　
                  </p>
                  <p className={styles.main_annotation}>※PayPalアカウントがない場合は受賞後に作成していただきご連絡ください。ご連絡がない場合は、賞金をお受け取りいただけないのでご注意ください。</p>
                </li>
                <li>
                  <h3 className={styles.main_heading3}>3.スケジュール</h3>
                  <div className={styles.main_blockSm}>
                    <h4 className={styles.main_heading4}>一次審査</h4>
                    <p className={styles.main_text}>2022年8月23日〜10月13日</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <h4 className={styles.main_heading4}>一次選考結果発表</h4>
                    <p className={styles.main_text}>2022年10月21日</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <h4 className={styles.main_heading4}>最終審査期間</h4>
                    <p className={styles.main_text}>2022年10月21日〜11月1日</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <h4 className={styles.main_heading4}>公開審査会・表彰式</h4>
                    <p className={styles.main_text}>2022年12月18日</p>
                  </div>
                  <div className={styles.main_blockSm}>
                    <h4 className={styles.main_heading4}>受賞作品結果発表</h4>
                    <p className={styles.main_text}>2022年12月18日</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className={styles.main_template}>
            <h2 className={styles.main_heading2}>H2タイトル</h2>
            <div className={styles.main_block}>
              <p className={styles.main_text}>本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト。</p>
              <Link to="/" className={styles.main_link}>
                テキストリンク（通常）
              </Link>
              <br />
              <Link to="/" className={styles.main_link}>
                テキストリンク（ホバー）
              </Link>
              <p className={styles.main_annotation}>※注釈テキスト注釈テキスト注釈テキスト注釈テキスト注釈テキスト</p>
              <ul className={styles.main_list}>
                <li>
                  <p className={styles.main_text}>リストリストリストリストリストリストリストリストリスト</p>
                </li>
                <li>
                  <p className={styles.main_text}>リスト</p>
                </li>
                <li>
                  <p className={styles.main_text}>リスト</p>
                </li>
              </ul>

              <ol className={styles.main_numberList}>
                <li>
                  <p className={styles.main_text}>
                    <span className={styles.main_num}>1.</span> ナンバーリストナンバーリストナンバーリストナンバーリスト
                  </p>
                </li>
                <li>
                  <p className={styles.main_text}>
                    <span className={styles.main_num}>2.</span> ナンバーリスト
                  </p>
                </li>
                <li>
                  <p className={styles.main_text}>
                    <span className={styles.main_num}>3.</span> ナンバーリスト
                  </p>
                </li>
              </ol>
            </div>

            <div className={styles.main_block}>
              <h3 className={styles.main_heading3}>H3タイトル</h3>
              <p className={styles.main_text}>本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト。</p>
            </div>

            <div className={styles.main_block}>
              <h3 className={styles.main_heading3}>H3タイトル</h3>
              <div className={styles.main_blockSm}>
                <h4 className={styles.main_heading4}>H4タイトル</h4>
                <p className={styles.main_text}>本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト。</p>
              </div>
              <div className={styles.main_blockSm}>
                <h4 className={styles.main_heading4}>H4タイトル</h4>
                <p className={styles.main_text}>本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト本文テキスト。</p>
              </div>
            </div>

            <div className={styles.main_block} id="test">
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
                  <th>table項目</th>
                  <td>内容が入ります内容が入ります</td>
                </tr>
              </tabel>
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
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
            </div>
          </div>
        </div>
      </LayoutArt>
    </>
  )
}

export default ArtPage
