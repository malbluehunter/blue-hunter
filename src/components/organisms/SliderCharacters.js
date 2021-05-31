import * as React from "react"
import * as styles from "./SliderCharacters.module.scss"
import Slider from "react-slick"
// import { useLocation } from "react-router-dom"

function NextArrow(props) {
  const { onClick } = props
  return <div className={`${styles.slick_arrow} ${styles.slick_prev}`} onClick={onClick} />
}

function PrevArrow(props) {
  const { onClick } = props
  return <div className={`${styles.slick_arrow} ${styles.slick_next}`} onClick={onClick} />
}

const SliderCharacters = () => {
  // const location = useLocation()

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

  // console.log(location.pathname)

  return (
    <>
      <div>
        <Slider {...settings} className={styles.slider}>
          {/* <div className={styles.slider_item}>{location.pathname.match(/kakeru/) ? <img src="/characters/character01.png" alt="" /> : <img src="/characters/character01_current.png" alt="" />}</div> */}
          <div className={styles.slider_item}>
            <img src="/characters/character02.png" alt="" />
          </div>
          <div className={styles.slider_item}>
            <img src="/characters/character03.png" alt="" />
          </div>
          <div className={styles.slider_item}>
            <img src="/characters/character04.png" alt="" />
          </div>
          <div className={styles.slider_item}>
            <img src="/characters/character05.png" alt="" />
          </div>
          <div className={styles.slider_item}>
            <img src="/characters/character06.png" alt="" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default SliderCharacters
