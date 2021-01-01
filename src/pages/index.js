import React from "react"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import SEO from "../components/seo"
import GibberishGen from "../quotegen/gibberishgen"




export default function Home() {
  return (
    <Layout>
     <SEO title="Gibberish" />
      <div
      css={css`
            // display: inline-block;
            font-size: 30px;
            font-weight: 300;
            text-align:center
          `}>
        
         <h2 >Test Your Skills</h2>
         <div id='gibbs'>
         
        </div>
        <GibberishGen />
      </div>

      
      
    </Layout>
  )
}
export { ThemeToggler }

