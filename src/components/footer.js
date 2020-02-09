import React from 'react'
import styles from './footer.module.css'
const date = new Date();
let currentYear = date.getFullYear();

class Footer extends React.Component{
 render(){
  return(
   <div className={styles.footer}>
    <div className={styles.footerCats}>
     <div className={styles.footerItem}>
      <div className={"medium medGrey " + styles.footerItemTitle}>Need Help?</div>
      <ul className={styles.footerList}>
       <li><a class={"medGrey " + styles.contactInfo} href="tel:+1 310 384-2540">(310) 384-2540</a></li>
       <li><a class={"medGrey " + styles.contactInfo}  href="mailto:elliot@eaglesports.biz">Elliot@eaglesports.biz</a></li>
      </ul>
     </div>
     <div className={styles.footerItem}>
      <div className={"medium medGrey " + styles.footerItemTitle}>Connect With Us</div>
      <ul className={styles.footerList}>
       <li><a target="_blank" rel="noopener noreferrer" class={"medGrey " + styles.contactInfo} href="https://www.facebook.com/">Facebook</a></li>
       <li><a target="_blank" rel="noopener noreferrer" class={"medGrey " + styles.contactInfo} href="https://www.linkedin.com/">LinkedIn</a></li>
       <li><a target="_blank" rel="noopener noreferrer" class={"medGrey " + styles.contactInfo} href="https://www.yelp.com/">Yelp</a></li>
      </ul>
     </div>
    </div>
    <div className={styles.copyright}>
     <small className="medGrey">Copyright &copy; {currentYear} Eagle Sports and Awards. All Rights Reserved</small>
    </div>
   </div>
  )
 }
}

export default Footer
