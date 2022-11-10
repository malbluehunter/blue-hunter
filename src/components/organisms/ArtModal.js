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
          <img src={clickedData.link} alt="bigger pic" />
          <div className={styles.modal_product_info}>
            <p>{clickedData.title}</p>
            <p>{clickedData.author}</p>
            <p>{clickedData.function}</p>
            <p>{clickedData.level}</p>
            <p>{clickedData.size}</p>
            <p>{clickedData.feature}</p>
          </div>
        </div>
        <button className={`${styles.btn_close} dismiss`} onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M93,7.014,90.987,5,83,12.986,75.015,5,73,7.014,80.987,15,73,22.986,75.015,25,83,17.014,90.987,25,93,22.986,85.015,15Z" transform="translate(-73.001 -5)" fill="#fff"/>
          </svg>
        </button>
        <button onClick={handelRotationLeft} className={styles.overlay_arrows_left}>
        </button>
        <button onClick={handelRotationRight} className={styles.overlay_arrows_right}>
        </button>
      </div>
    </>
  );
}

export default ArtModal