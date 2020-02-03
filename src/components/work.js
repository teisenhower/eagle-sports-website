import React from 'react'
import styles from './work.module.css'
import WorkImgs from './workImgs'

class Work extends React.Component{
 render(){
  return (
   <section className={styles.work}>
    <div className={styles.blue}></div>
    <div className={styles.container}>
     <div className={styles.workHeader}>OUR WORK <div className="hr float_right"></div></div>
     <p className={"white clearFix float_right " + styles.workDescr}>We pride ourselves on the quality of work we provide to our customers. Our dedicated team is here to make sure that you are 100% satisfied with your project.</p>
     <div className="clearFix"></div>
     <WorkImgs />
     </div>
   </section>
  )
 }
}

export default Work