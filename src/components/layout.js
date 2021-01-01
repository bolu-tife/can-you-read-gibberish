import React from "react"
import { css } from "@emotion/react"
import {  useStaticQuery, graphql } from "gatsby"
import MyComponent from "../darkModeToggle/mycomponent.js";
import Navbar from "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import SocialFollow from "../socialfollow/socialfollow.js";
import { Helmet } from "react-helmet"

import { rhythm } from "../utils/typography"




export default function Layout({ children }) {
 
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
  return (

    <div
      css={css`
        margin: 0 auto;
        max-width: 1000px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
      style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}
    >
    <Helmet>
                <meta charSet="utf-8" />
                <html lang="en" amp />
                <title>{data.site.siteMetadata.title}</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
      <MyComponent  />
      <br/>
      <br/>

       <div>

      <header>

      <Navbar/>
      </header>

      </div>
      
      
      <br />
      
      <main className='container'>{children} </main>
      
      <br />
      <Footer />
      <SocialFollow />
    </div>
  )
}

