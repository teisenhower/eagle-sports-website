import React from 'react'
import styles from './category.module.css'
import config from 'react-global-configuration'
import configuration from '../config';
config.set(configuration);

class Category extends React.Component{
 getCatData(data){
  const category = this.props.category;
  if (category === 'us'){
   return (
     <div key={data.title} className={styles.catItem}>
      <div className={'orange medium ' + styles.catTitle}>{data.title}</div>
      <p className={'lightGrey ' + styles.catDesc}>{data.description}</p>
     </div>
   )
  } else if (category === 'clients'){ 
   return (
    <div key={data.title} className={styles.catItem}>
     <div className={'orange medium ' + styles.catTitle}>{data.title}</div>
     <ul className="lightGrey">
      {data.names.map(name => (
        <li key={name}>{name}</li>
      ))}
     </ul>
    </div>
  )
  } else if (category === 'brands'){ 
   return (
    <div key={data.title} className={styles.catItem}>
     <a target="_blank" rel="noopener noreferrer" href={data.url} className={'lightGrey ' + styles.catTitle}>{data.title}</a>
    </div>
  )};
 } 
 render(){
  const configData = config.get(this.props.category);
  return (
   <div className={styles.details}>
    {configData.map(data => (
      this.getCatData(data)
    ))}
   </div>
  )
 }
}
export default Category