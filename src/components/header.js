import React from 'react'
import styles from './header.module.css'
import headerImagewebp from '../imgs/header.webp'
import headerImagejpg from '../imgs/header.jpg'

function test(){
  console.log("CLICKED");
  
}
class Header extends React.Component{
  render() {
    return (     
      <section className={styles.mainHero}>
        <div className={styles.imageOverlay}></div>
          <picture>
            <source srcSet={headerImagewebp} type="image/webp" />
            <img alt="Eagle Sports and Awards" srcSet={headerImagejpg} />
          </picture>
          {/* <img src={headerImage} /> */}
          <div className={styles.headerInfo}>
          <p>WHO WE ARE <div className="hr"></div></p>
          <p>Vietnam Veteran owned <br /><br />I was in recreation for over 20 years and also very involved in my childrens’ schools and as a past PTA and PTSA president within the 33rd district, I understand the hardship of dealing with tight budgets to provide maximum programs and equipment. <br /><br />Eagle Sports and Awards wants to help provide your agency with top quality products including T-shirts, golf shirts, hats and all types of sports uniforms.  We also provide trophies, banners, ice packs and any promotional and fund raising items that will enhance your agencies.</p>
          <div className={styles.work} onClick={() => test()}>OUR WORK</div>
        </div>
      </section>
    )
  }
}
export default Header