import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import Icon from 'components/atoms/Icon'

import styles from './navigation.module.scss'

const isActive = (path, match, location) =>
  !!(match || path === location.pathname)

const Navigation = () => (
  <nav className={styles.nav} data-testid="main-navigation">
    <ul>
      <li>
        <NavLink
          activeClassName={styles.active}
          exact
          isActive={isActive.bind(this, '/')}
          to="/"
        >
          <span>Home</span>
          <Icon icon={['fas', 'list']} iconsize="1.8rem" />
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.active}
          isActive={isActive.bind(this, '/private')}
          to="/private"
        >
          <span>Private</span>
          <Icon icon={['fas', 'plus-circle']} iconsize="1.8rem" />
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.active}
          isActive={isActive.bind(this, '/private')}
          to="/settings"
        >
          <span>Settings</span>
          <Icon icon={['fas', 'cog']} iconsize="1.8rem" />
        </NavLink>
      </li>
    </ul>
  </nav>
)

// NOTE! isActive only works if withRouter is the outermost HOC,
// see this for more details: https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(Navigation)
