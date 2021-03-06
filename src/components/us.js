import React from "react";
import styles from "./us.module.css";
import Category from "./details";

class Us extends React.Component {
  render() {
    return (
      <section id={this.props.id} className={styles.us}>
        <div className={styles.white}></div>
        <div>
          <div className={styles.container}>
            <div className={"dissolve " + styles.usHeader}>
              {this.props.title}
              <div className="hr"></div>
            </div>
          </div>
          <div className={styles.container}>
            <Category category={this.props.category} />
          </div>
        </div>
      </section>
    );
  }
}
export default Us;
