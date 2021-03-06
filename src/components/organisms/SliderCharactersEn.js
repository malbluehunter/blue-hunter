import React from "react"
import * as styles from "./SliderCharacters.module.scss"
import Slider from "react-slick"
import { Link } from "gatsby"

const NextArrow = props => {
  const { onClick } = props
  return <div className={`${styles.slick_arrow} ${styles.slick_prev}`} onClick={onClick} />
}

const PrevArrow = props => {
  const { onClick } = props
  return <div className={`${styles.slick_arrow} ${styles.slick_next}`} onClick={onClick} />
}

const SliderCharacters = props => {
  const { pathname } = props
  let number

  if (pathname.match(/kakeru/)) {
    number = 0
  } else if (pathname.match(/viola/)) {
    number = 1
  } else if (pathname.match(/tsukito/)) {
    number = 2
  } else if (pathname.match(/hawk/)) {
    number = 3
  } else if (pathname.match(/yoshinori/)) {
    number = 4
  } else if (pathname.match(/skull/)) {
    number = 5
  } else if (pathname.match(/jazz/)) {
    number = 6
  } else if (pathname.match(/nagisa/)) {
    number = 7
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    initialSlide: number,
    swipe: true,
    swipeToSlide: true,
  }
  console.log(pathname)
  console.log(number)

  return (
    <>
      <div className={styles.slider_sp}>
        <Slider {...settings} className={styles.slider}>
          {pathname.match(/kakeru/) ? (
            <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/kakeru/">
              <img src="/characters/character01_current.png" alt="カケル" className={styles.current_img} />
            </Link>
          ) : (
            <Link className={styles.slider_item} to="/en/characters/kakeru/">
              <img src="/characters/character01.png" alt="カケル" />
            </Link>
          )}
          {pathname.match(/viola/) ? (
            <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/viola/">
              <img src="/characters/character02_current.png" alt="ヴィオラ" className={styles.current_img} />
            </Link>
          ) : (
            <Link className={styles.slider_item} to="/en/characters/viola/">
              <img src="/characters/character02.png" alt="ヴィオラ" />
            </Link>
          )}
          {pathname.match(/tsukito/) ? (
            <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/tsukito/">
              <img src="/characters/character03_current.png" alt="月人" className={styles.current_img} />
            </Link>
          ) : (
            <Link className={styles.slider_item} to="/en/characters/tsukito/">
              <img src="/characters/character03.png" alt="月人" />
            </Link>
          )}
          {pathname.match(/hawk/) ? (
            <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/hawk/">
              <img src="/characters/character04_current.png" alt="ホーク" className={styles.current_img} />
            </Link>
          ) : (
            <Link className={styles.slider_item} to="/en/characters/hawk/">
              <img src="/characters/character04.png" alt="ホーク" />
            </Link>
          )}
          {pathname.match(/yoshinori/) ? (
            <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/yoshinori/">
              <img src="/characters/character05_current.png" alt="生頼紀誉師" className={styles.current_img} />
            </Link>
          ) : (
            <Link className={styles.slider_item} to="/en/characters/yoshinori/">
              <img src="/characters/character05.png" alt="生頼紀誉師" />
            </Link>
          )}
          {pathname.match(/skull/) ? (
            <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/skull/">
              <img src="/characters/character06_current.png" alt="スカル" className={styles.current_img} />
            </Link>
          ) : (
            <Link className={styles.slider_item} to="/en/characters/skull/">
              <img src="/characters/character06.png" alt="スカル" />
            </Link>
          )}
          {pathname.match(/jazz/) ? (
            <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/jazz/">
              <img src="/characters/character07_current.png" alt="JAZz" className={styles.current_img} />
            </Link>
          ) : (
            <Link className={styles.slider_item} to="/en/characters/jazz/">
              <img src="/characters/character07.png" alt="JAZz" />
            </Link>
          )}
          {pathname.match(/nagisa/) ? (
            <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/nagisa/">
              <img src="/characters/character08_current.png" alt="上原渚" className={styles.current_img} />
            </Link>
          ) : (
            <Link className={styles.slider_item} to="/en/characters/nagisa/">
              <img src="/characters/character08.png" alt="上原渚" />
            </Link>
          )}
        </Slider>
      </div>
      <div className={styles.slider_pc}>
        {pathname.match(/kakeru/) ? (
          <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/kakeru/">
            <img src="/characters/character01_current.png" alt="カケル" className={styles.current_img} />{" "}
          </Link>
        ) : (
          <Link className={styles.slider_item} to="/en/characters/kakeru/">
            <img src="/characters/character01.png" alt="カケル" />
          </Link>
        )}
        {pathname.match(/viola/) ? (
          <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/viola/">
            <img src="/characters/character02_current.png" alt="ヴィオラ" className={styles.current_img} />{" "}
          </Link>
        ) : (
          <Link className={styles.slider_item} to="/en/characters/viola/">
            <img src="/characters/character02.png" alt="ヴィオラ" />
          </Link>
        )}
        {pathname.match(/tsukito/) ? (
          <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/tsukito/">
            <img src="/characters/character03_current.png" alt="月人" className={styles.current_img} />{" "}
          </Link>
        ) : (
          <Link className={styles.slider_item} to="/en/characters/tsukito/">
            <img src="/characters/character03.png" alt="月人" />
          </Link>
        )}
        {pathname.match(/hawk/) ? (
          <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/hawk/">
            <img src="/characters/character04_current.png" alt="ホーク" className={styles.current_img} />{" "}
          </Link>
        ) : (
          <Link className={styles.slider_item} to="/en/characters/hawk/">
            <img src="/characters/character04.png" alt="ホーク" />
          </Link>
        )}
        {pathname.match(/yoshinori/) ? (
          <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/yoshinori/">
            <img src="/characters/character05_current.png" alt="生頼紀誉師" className={styles.current_img} />{" "}
          </Link>
        ) : (
          <Link className={styles.slider_item} to="/en/characters/yoshinori/">
            <img src="/characters/character05.png" alt="生頼紀誉師" />
          </Link>
        )}
        {pathname.match(/skull/) ? (
          <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/skull/">
            <img src="/characters/character06_current.png" alt="スカル" className={styles.current_img} />{" "}
          </Link>
        ) : (
          <Link className={styles.slider_item} to="/en/characters/skull/">
            <img src="/characters/character06.png" alt="スカル" />
          </Link>
        )}
        {pathname.match(/jazz/) ? (
          <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/jazz/">
            <img src="/characters/character07_current.png" alt="JAZz" className={styles.current_img} />{" "}
          </Link>
        ) : (
          <Link className={styles.slider_item} to="/en/characters/jazz/">
            <img src="/characters/character07.png" alt="JAZz" />
          </Link>
        )}
        {pathname.match(/nagisa/) ? (
          <Link className={`${styles.slider_item} ${styles.current_wrapper}`} to="/en/characters/nagisa/">
            <img src="/characters/character08_current.png" alt="上原渚" className={styles.current_img} />{" "}
          </Link>
        ) : (
          <Link className={styles.slider_item} to="/en/characters/nagisa/">
            <img src="/characters/character08.png" alt="上原渚" />
          </Link>
        )}
      </div>
    </>
  )
}

export default SliderCharacters
