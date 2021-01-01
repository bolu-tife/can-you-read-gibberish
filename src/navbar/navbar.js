import React from "react";
import styles from "../navbar/navbar.module.css";

import { useStaticQuery, Link, graphql } from "gatsby"
// import useSound from "use-sound"

// import laugh2 from "../navbar/happy.mp3"
const Navbar = () => {
    const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  //   const [play1] = useSound(laugh1)
  // const [play2] = useSound(laugh1)
  // const [play3] = useSound(laugh1)
  // const [play, { stop }] = useSound(laugh2)
  // const laughingLillianOnClick = event => {
  //   event.preventDefault()
  //   const ourTopChildrenLaughs = [play1, play2, play3]
  //   const random = Math.floor(Math.random() * 3)
  //   ourTopChildrenLaughs[random]()
  // }
  return <ul  className={styles.sidenav}>
  
  
  <li className={styles.left}><Link className={styles.titlelink} to={`/`}><h1>{data.site.siteMetadata.title}</h1></Link></li>
  
  <li className={styles.right} ><Link className={styles.link} to={`/about`}>About</Link></li>
  
  <li className={styles.right} ><Link className={styles.link} to={`/`}>Home</Link></li>
  
</ul>;
};
export default Navbar;


