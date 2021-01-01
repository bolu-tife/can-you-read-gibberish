// import React from 'react'
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <ThemeToggler>
//         {({ theme, toggleTheme }) => (
//           <label>
//             <input
//               type="checkbox"
//               onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
//               checked={theme === 'dark'}
//             />{' '}
//             Dark mode
//           </label>
//         )}
//       </ThemeToggler>
//     )
//   }
// }

import React from 'react'
import PropTypes from 'prop-types'

class ThemeToggler extends React.Component {
  state = {
    theme: typeof window !== 'undefined' ? window.__theme : null,
  }

  componentDidMount() {
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }

  toggleTheme(theme) {
    window.__setPreferredTheme(theme)
  }

  render() {
    return (
      <this.props.children
        theme={this.state.theme}
        toggleTheme={this.toggleTheme}
      />
    )
  }
}

ThemeToggler.propTypes = {
  children: PropTypes.func.isRequired,
}

export default ThemeToggler