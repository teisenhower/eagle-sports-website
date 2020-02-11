import React from "react";
import Styles from "./nav.module.css";
import logo from "./imgs/logo30.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.navBar = this.navBar.bind(this);
    this.state = {
      toggle: ""
    };
    // this.toggle = React.createRef();
  }
  debounce(func, wait = 25, immediate = false) {
    let timeout;
    return function() {
      const context = this,
        args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  navBar(e) {
    // const screenWidth = window.screen.width;
    const nav = document.querySelector("nav");
    const section = document.querySelector("ul");
    const isCollapsed = section.getAttribute("data-collapsed") === "true";
    if (window.scrollY > 100) {
      nav.classList.add("animationIn");
      nav.classList.remove("animationOut");
    } else {
      nav.classList.remove("animationIn");
      nav.classList.add("animationOut");
      if (!isCollapsed) {
        this.handleToggle();
      }
    }
  }
  scrollNav(location, e) {
    const screenWidth = window.screen.width;
    const loc = document.getElementById(location);
    // const nav = document.querySelector("nav");
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: loc.offsetTop - 50
    });
    console.log(this);

    if (screenWidth <= 976 && e !== "logo") {
      this.handleToggle();
    }
  }

  handleToggle() {
    const section = document.querySelector("ul");
    const isCollapsed = section.getAttribute("data-collapsed") === "true";
    this.setState(prevState => ({
      toggle: prevState.toggle === "" ? " open" : ""
    }));
    if (isCollapsed) {
      this.open(section);
      section.setAttribute("data-collapsed", "false");
      section.classList.toggle("expanded");
    } else {
      this.close(section);
      section.classList.toggle("expanded");
    }
  }
  open(element) {
    const navHeight = element.scrollHeight;
    element.style.height = navHeight + "px";
    element.addEventListener("transitionend", function(e) {
      element.removeEventListener("transitionend", arguments.caller);
      element.style.height = navHeight;
    });
    element.setAttribute("data-collapsed", "false");
  }
  close(element) {
    const navHeight = element.scrollHeight;
    const elementTransition = element.style.transition;
    element.style.transition = "";
    requestAnimationFrame(function() {
      element.style.height = navHeight + "px";
      element.style.transition = elementTransition;
      requestAnimationFrame(function() {
        element.style.height = 0 + "px";
      });
    });
    element.setAttribute("data-collapsed", "true");
  }
  componentDidMount() {
    window.addEventListener("scroll", this.debounce(this.navBar));
  }
  render() {
    return (
      <nav>
        <picture
          id={Styles.navImage}
          onClick={() => this.scrollNav("root", "logo")}
        >
          <source srcSet={logo} type="image/webp" />
          <img alt="Eagle Sports and Awards" srcSet={logo} />
        </picture>
        <div
          ref={this.toggle}
          className={Styles.toggle}
          onClick={() => this.handleToggle()}
        >
          <div id="hamburger" className={Styles.hamburger + this.state.toggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="xicon" className={Styles.xicon + this.state.toggle}>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={Styles.section} data-collapsed="true">
          <li className="medGrey" onClick={() => this.scrollNav("root")}>
            Home
          </li>
          <li className="medGrey" onClick={() => this.scrollNav("ourWork")}>
            Work
          </li>
          <li className="medGrey" onClick={() => this.scrollNav("clients")}>
            Clients
          </li>
          <li className="medGrey" onClick={() => this.scrollNav("additional")}>
            Additional
          </li>
          <li className="medGrey" onClick={() => this.scrollNav("brands")}>
            Brands
          </li>
          <li className="medGrey" onClick={() => this.scrollNav("contact")}>
            Contact
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
