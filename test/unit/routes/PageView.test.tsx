import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import { shallow } from 'enzyme'
import PageView from '../../../src/routes/PageView'

describe('test pge view', () => {
  it('should render page-view element.', () => {
    const wrapper = shallow(<PageView />)
    assert(wrapper.find('.page-view').length === 1)
  })
})
