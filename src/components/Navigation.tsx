import * as React from 'react'
import ActiveLink from '../containers/ActiveLink'

const Navigation = () => {
  return (
    <nav className={ 'navigation' } role={ 'nav' }>
      <ul>
        <li><ActiveLink to={ '/pages/Madagascar' }>{ 'Madagascar' }</ActiveLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
