import '../styles/global.css'
import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';
import Wordpress2016 from 'typography-theme-wordpress-2016'


const typography = new Typography(funstonTheme)






Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)',
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
  },
})

export default typography
export const rhythm = typography.rhythm


