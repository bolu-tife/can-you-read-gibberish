import React from "react";
import styles from "../footer/footer.module.css";
const Footer = () => {
  return <footer class="social-container footer" >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a className={styles.footerlink} href="https://www.gatsbyjs.org">Gatsby</a>

          
        </footer>;
};
export default Footer;
