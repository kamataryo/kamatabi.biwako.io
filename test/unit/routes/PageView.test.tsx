import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import { shallow } from 'enzyme'
import PageView from '../../../src/routes/PageView'
import Navigation from '../../../src/components/Navigation'

describe('test Home view', () => {
  it('should render counter-view element.', () => {
    const wrapper = shallow(<PageView />)
    assert(wrapper.find('#home-view').length === 1)
  })

  it('should render Home component.', () => {
    const wrapper = shallow(<PageView />)
    assert(wrapper.find(Navigation).length === 1)
  })
})
