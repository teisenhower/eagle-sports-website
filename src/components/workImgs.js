import React from "react";
import styles from "./workImg.module.css";
import images from "./images";
class WorkImgs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: "hidden",
      src: "",
    };
    let onIntersection = (entries) => {
      const images = window.document.querySelectorAll("source, img");
      if (entries[0].intersectionRatio > 0) {
        this.observer.unobserve(this.imageRef.current);
        images.forEach((image) => {
          preloadImage(image);
        });
      }
    };
    this.imageRef = React.createRef();
    this.observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "50px",
      threshold: 0,
    });

    let preloadImage = (image) => {
      if (image.dataset && image.dataset.src) {
        image.src = image.dataset.src;
      }
      if (image.dataset && image.dataset.srcset) {
        image.srcset = image.dataset.srcset;
      }
    };
  }

  componentDidMount() {
    this.observer.observe(this.imageRef.current);
  }

  showShadow(image) {
    this.setState({
      src: image,
    });
    this.state.visible === "hidden"
      ? this.setState({ visible: "show" })
      : this.setState({ visible: "hidden" });
  }
  removeShadow(image) {
    this.state.visible === "show"
      ? this.setState({ visible: "hidden" })
      : this.setState({ visible: "hidden" });
    this.setState({
      src: "",
    });
  }
  render() {
    return (
      <div>
        <div ref={this.imageRef}></div>
        <div
          className={"shadowBox " + this.state.visible}
          onClick={() => this.removeShadow()}
        >
          {/* <div>CLOSE</div> */}
          <picture className={styles.shadowContainer}>
            <source srcSet={this.state.src["srcWebp"]} type="image/webp" />
            <source srcSet={this.state.src["srcJpg"]} type="image/jpeg" />
            <img
              src=""
              className={styles.shadowImage}
              alt="Custom Screen Printed T-Shirt Design"
            />
          </picture>
        </div>
        <div id="workImages" className={styles.imgGrid}>
          {images.map((image) => (
            <picture className={styles.workImg}>
              <source data-srcset={image.srcWebp} type="image/webp" />
              <img
                src=""
                data-src={image.srcJpg}
                className={styles.imgBlock}
                alt="Custom Screen Printed T-Shirt Design"
                onClick={() => this.showShadow(image)}
              />
            </picture>
          ))}
        </div>
      </div>
    );
  }
}

export default WorkImgs;
