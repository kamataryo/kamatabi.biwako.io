import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import Routes from './routes'

const Site = Routes
const ROOT = document.getElementById('site')

// Go!
render(
  <HMRContainer>
    <Site />
  </HMRContainer>,
  ROOT,
)

// Hot Module Replacement settings
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default
    render(
      <HMRContainer>
        <NextApp />
      </HMRContainer>,
      ROOT,
    )
  })
}
