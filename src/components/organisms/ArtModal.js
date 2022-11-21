import * as React from "react"
import * as styles from "./ArtModal.module.scss"

const ArtModal = ({
  handelRotationRight,
  handelRotationLeft,
  clickedData,
  setClickedData,
}) => {

  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedData(null);
    }
  };

  return (
    <>
      <div className={`${styles.overlay} dismiss`} onClick={handleClick}>
        <div className={styles.modal_container}>
          {clickedData.image.map((img, i) => <div key={i} className={styles.modal_img_wrap}><img src={img} alt="" /></div>)}
          {clickedData.video &&
            clickedData.video.map((elem, i) => <div key={i} className={styles.modal_video_wrap}><video src={elem} controls/></div>)
          }
          <div className={styles.modal_product_info}>
            {clickedData.title &&
              <p className={styles.modal_product_title}><span>作品タイトル / Title of  artwork</span>:{clickedData.title}</p>
            }
            {clickedData.author &&
              <p className={styles.modal_product_author}><span>作者 / Name of artist</span>:{clickedData.author}</p>
            }
            {clickedData.feature &&
              <p className={styles.modal_product_feature}><span>作品の説明 / Description</span>{clickedData.feature}</p>
            }
          </div>
        </div>
        <button className={`${styles.btn_close} dismiss`} onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M93,7.014,90.987,5,83,12.986,75.015,5,73,7.014,80.987,15,73,22.986,75.015,25,83,17.014,90.987,25,93,22.986,85.015,15Z" transform="translate(-73.001 -5)" fill="#fff"/>
          </svg>
        </button>
        <div className={styles.overlay_arrows}>
          <button onClick={handelRotationLeft} className={styles.overlay_arrows_left}>
          </button>
          <button onClick={handelRotationRight} className={styles.overlay_arrows_right}>
          </button>
        </div>
      </div>
    </>
  );
}

export default ArtModal