import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faTwitter,
  
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";



export default function SocialFollow() {
  return (
    <div class="social-container">
      
<a href="https://www.twitter.com/boluutife" className="twitter social" target="_blank" rel="noreferrer" aria-label="twitter profile">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.github.com/bolu-tife" className="github social" target="_blank" rel="noreferrer" aria-label="github profile">
<FontAwesomeIcon icon={faGithub} size="2x" />
</a>
<a href="https://www.linkedin.com/in/boluwatifeomosowon/" className="linkedin social" target="_blank" rel="noreferrer" aria-label="linkedin profile">
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
</div>
 );
}