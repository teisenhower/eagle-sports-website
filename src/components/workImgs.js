import React from 'react'
import styles from './workImg.module.css'
import images from './images'
class WorkImgs extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: "hidden",
      src: ""
    }
  }

 componentDidMount() { // Lifecyle method
  const images =  document.querySelectorAll('source.lazyLoad');
  const timer = setInterval(() => {
   console.log("load images")
   images.forEach(image => 
    image.src = (image.dataset.info)
    )
   clearInterval(timer)
   },2000);
 }
 showShadow(image){
   this.setState({
     src: image
    })
  console.log(this.state.src['srcJpg']);
  this.state.visible === "hidden" ? this.setState({visible: "show"}) : this.setState({visible: "hidden"})
 }
 removeShadow(image){
  this.state.visible === "show" ? this.setState({visible: "hidden"}) : this.setState({visible: "hidden"})
  this.setState({
    src: ""
   })
 }
 render(){
  return (
   <div>
     <div className={"shadowBox " + this.state.visible } onClick={() => this.removeShadow()}>
        {/* <div>CLOSE</div> */}
        <picture className={styles.shadowContainer}>
          <source srcSet={this.state.src['srcWebp']} type="image/webp" />
          <source srcSet={this.state.src['srcJpg']} type="image/jpeg" />
          <img src='' className={styles.shadowImage} alt="Eagle Sports and Awards"/>
        </picture>
     </div>
    <div id="workImages"className={styles.imgGrid}>
    {images.map(image => (
    <picture>
     <source className="lazyLoad" srcSet='' data-info={image.srcWebp} type="image/webp" />
     <source className="lazyLoad" srcSet='' data-info={image.srcJpg} type="image/jpeg" />
     <img src={image.srcJpg} className={"lazyLoad " + styles.imgBlock} alt="Eagle Sports and Awards" onClick={() => this.showShadow(image)}/>
    </picture>
   ))}
    </div>
   </div>
  )
 }
}

export default WorkImgs