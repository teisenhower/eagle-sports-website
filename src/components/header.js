import React from "react";
import styles from "./header.module.css";
import headerImagewebp from "../imgs/header.webp";
import headerImagejpg from "../imgs/header.jpg";
import config from "react-global-configuration";

function test() {
  const work = document.getElementById("ourWork");
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: work.offsetTop
  });
}
class Header extends React.Component {
  render() {
    const about = config.get("about");
    return (
      <section className={styles.mainHero}>
        <div className={styles.imageOverlay}></div>
        <picture>
          <source srcSet={headerImagewebp} type="image/webp" />
          <img alt="Eagle Sports and Awards" srcSet={headerImagejpg} />
        </picture>
        {/* <img src={headerImage} /> */}
        <div className={styles.headerInfo}>
          <h1>
            WHO WE ARE <div className="hr"></div>
          </h1>
          <div className={styles.about}>
            {about.map(data => (
              <p>{data}</p>
            ))}
          </div>
          <div className={styles.work} onClick={() => test()}>
            OUR WORK
          </div>
        </div>
      </section>
    );
  }
}
export default Header;
