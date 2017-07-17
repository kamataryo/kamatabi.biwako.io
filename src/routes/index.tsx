import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore, { history } from '../store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { createPageView } from './PageView'

const Madagascar = { /* some post props */ }

const Routes = () => {
  return (
    <Provider store={ rootStore }>
      <ConnectedRouter history={ history }>
        <main>
          <Route
            path={ '/journeies/Madagascar' }
            component={ createPageView(Madagascar) }
            exact
          />
        </main>
      </ConnectedRouter>
    </Provider>
  )
}
export default Routes
