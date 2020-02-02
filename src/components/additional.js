import React from 'react'
import styles from './work.module.css'
import AddItem from './addItem'
import Contact from './contact'

class Additional extends React.Component{

  getCatData(){
    const category = this.props.category;
    if (category === 'additional'){
     return (
       <div>
          <AddItem 
            title="Promotional Items" 
            description="There are over 500,000 promotional items on the market. Lanyards, coffee cups, water bottles, pens, measuring tapes and more. For a full list of products please check out The Magnet Group."
            divider={true}
          />
          <AddItem 
            title="Trophies, Awards, Custom Ribbons" 
            description="Here is where you would put information regarding what you provide as far as trophies, awards, ribbons, etc."
            divider={true}
          />
          <AddItem 
            title="Instant Ice Packs" 
            description="If your rec league or pick up games needs ice packs on hand, we've got you covered. 2 sizes available; 5x6 and 6x9. Please contact us for pricing."
            divider={false}
          />
       </div>
     )
    } else if (category === 'contact'){ 
     return (
      <div>
        <Contact />
      </div>
    )
    }
   } 


 render(){
  return (
   <section className={styles.work}>
    <div className={styles.blue}></div>
    <div className={styles.container}>
     <div className={styles.workHeader}>{this.props.title} <div className="hr float_right"></div></div>
     <p className={"white clearFix float_right " + styles.workDescr}>{this.props.description}</p>
     <div className="clearFix"></div>
      {this.getCatData()}
     </div>
   </section>
  )
 }
}

export default Additional