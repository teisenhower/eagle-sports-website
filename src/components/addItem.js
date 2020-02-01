import React from 'react'
import styles from './addItem.module.css'

class AddItem extends React.Component{

 makeDivider(prop){
  if (prop){
   return(
    <div className="hr"></div>
   )
  }

 }
 render() {
  return (
   <div className={styles.addItem}>
    <div className={"medium " + styles.itemTitle}>{this.props.title}</div>
    <p className={"white " + styles.itemDesc}>{this.props.description}</p>
    {this.makeDivider(this.props.divider)}
   </div>
  )
 }
}

export default AddItem