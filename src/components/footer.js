import React from "react";
import styles from "./footer.module.css";
import config from "react-global-configuration";
import configuration from "../config";
const date = new Date();
let currentYear = date.getFullYear();
const socialLinks = config.get("social");

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerCats}>
          <div className={styles.footerItem}>
            <div className={"medium medGrey " + styles.footerItemTitle}>
              Need Help?
            </div>
            <ul className={styles.footerList}>
              <li>
                <a
                  class={"medGrey " + styles.contactInfo}
                  href="tel:+1 310 384-2540"
                >
                  (310) 384-2540
                </a>
              </li>
              <li>
                <a
                  class={"medGrey " + styles.contactInfo}
                  href="mailto:elliot@eaglesports.biz"
                >
                  Elliot@eaglesports.biz
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <div className={"medium medGrey " + styles.footerItemTitle}>
              Connect With Us
            </div>
            <ul className={styles.footerList}>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class={"medGrey " + styles.contactInfo}
                  href={socialLinks[0].facebook}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class={"medGrey " + styles.contactInfo}
                  href={socialLinks[0].yelp}
                >
                  Yelp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <small className="medGrey">
            Copyright &copy; {currentYear} Eagle Sports and Awards. All Rights
            Reserved
          </small>
        </div>
      </div>
    );
  }
}

export default Footer;
