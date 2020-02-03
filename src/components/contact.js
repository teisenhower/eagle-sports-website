import React from 'react'
import styles from './contact.module.css'

class Contact extends React.Component{
 render(){
  return(
   <div className={styles.contactForm}>
    <div className={styles.contactItem}>
     <div className={"medium darkBlue " + styles.contactTitle}>CALL
      <div className="hr"></div>
     </div>
     <a class={"white " + styles.contactInfo} href="tel:+1 310 384-2540">(310) 384-2540</a>
    </div>
    <div className={styles.contactItem}>
     <div className={"medium darkBlue " + styles.contactTitle}>EMAIL
      <div className="hr"></div>
     </div>
     <a class={"white " + styles.contactInfo}  href="mailto:elliot@eaglesports.biz">Elliot@eaglesports.biz</a>
    </div>
    <div className={styles.contactItem}>
     <div className={"medium darkBlue " + styles.contactTitle}>FAX
      <div className="hr"></div>
     </div>
     <div class={"white " + styles.contactInfo}>(818) 886-5554</div>
    </div>
   </div>
  )
 }
}

export default Contact