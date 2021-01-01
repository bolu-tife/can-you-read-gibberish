import React from "react"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import SEO from "../components/seo"
import { Link} from "gatsby"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
export default function Home()
 {
  const { width, height } = useWindowSize()
 
  return (
    <Layout>
     <SEO title="Gibberish" />
      <div className='center'
      css={css`
            display: inline-block;
            font-size: 30px;
            font-weight: 300;
            
          `}>
 
         Guess what, You are a gibberish reader!

         <div className='center' >
         <p>Do you want to play again?</p>

         <Link 
              to={`/`}>
              <button className="btn whitebutton " aria-label=" button">
                Yes!
              </button>
              </Link>
            </div>
         
        <Confetti
      width={width}
      height={height}
    />
      </div>

      
      
    </Layout>
  )
}
export { ThemeToggler }
