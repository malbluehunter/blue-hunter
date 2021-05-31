import * as React from "react"
import * as styles from "./SliderCharacters.module.scss"
import Slider from "react-slick"

function NextArrow(props) {
  const { onClick } = props
  return <div className={`${styles.slick_arrow} ${styles.slick_prev}`} onClick={onClick} />
}

function PrevArrow(props) {
  const { onClick } = props
  return <div className={`${styles.slick_arrow} ${styles.slick_next}`} onClick={onClick} />
}

const SliderCharacters = props => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  const { pathname } = props

  return (
    <>
      <div className={styles.slider_sp}>
        <Slider {...settings} className={styles.slider}>
          {pathname.match(/kakeru/) ? (
            <a className={`${styles.slider_item} ${styles.current_wrapper}`} href="/characters/kakeru/">
              <img src="/characters/character01_current.png" alt="カケル" className={styles.current_img} />{" "}
            </a>
          ) : (
            <a className={styles.slider_item} href="/characters/kakeru/">
              <img src="/characters/character01.png" alt="カケル" />
            </a>
          )}
          <a className={styles.slider_item} href="/characters/kakeru/">
            <img src="/characters/character02.png" alt="" />
          </a>
          <a className={styles.slider_item} href="/characters/kakeru/">
            <img src="/characters/character03.png" alt="" />
          </a>
          <a className={styles.slider_item} href="/characters/kakeru/">
            <img src="/characters/character04.png" alt="" />
          </a>
          <a className={styles.slider_item} href="/characters/kakeru/">
            <img src="/characters/character05.png" alt="" />
          </a>
          <a className={styles.slider_item} href="/characters/kakeru/">
            <img src="/characters/character06.png" alt="" />
          </a>
          <a className={styles.slider_item} href="/characters/kakeru/">
            <img src="/characters/character07.png" alt="" />
          </a>
          <a className={styles.slider_item} href="/characters/kakeru/">
            <img src="/characters/character08.png" alt="" />
          </a>
        </Slider>
      </div>
      <div className={styles.slider_pc}>
        {pathname.match(/kakeru/) ? (
          <a className={`${styles.slider_item} ${styles.current_wrapper}`} href="/characters/kakeru/">
            <img src="/characters/character01_current.png" alt="カケル" className={styles.current_img} />{" "}
          </a>
        ) : (
          <a className={styles.slider_item} href="/characters/kakeru/">
            <img src="/characters/character01.png" alt="カケル" />
          </a>
        )}
        <a className={styles.slider_item} href="/characters/kakeru/">
          <img src="/characters/character02.png" alt="" />
        </a>
        <a className={styles.slider_item} href="/characters/kakeru/">
          <img src="/characters/character03.png" alt="" />
        </a>
        <a className={styles.slider_item} href="/characters/kakeru/">
          <img src="/characters/character04.png" alt="" />
        </a>
        <a className={styles.slider_item} href="/characters/kakeru/">
          <img src="/characters/character05.png" alt="" />
        </a>
        <a className={styles.slider_item} href="/characters/kakeru/">
          <img src="/characters/character06.png" alt="" />
        </a>
        <a className={styles.slider_item} href="/characters/kakeru/">
          <img src="/characters/character07.png" alt="" />
        </a>
        <a className={styles.slider_item} href="/characters/kakeru/">
          <img src="/characters/character08.png" alt="" />
        </a>
      </div>
    </>
  )
}

export default SliderCharacters
