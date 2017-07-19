import 'mocha'
import * as React from 'react'
import * as assert from 'power-assert'
import { shallow } from 'enzyme'
import PhotoFrame from '../../../src/components/PhotoFrame'

describe('Test of PhotoFrame component', () => {
  it('should render <img>', () => {
    const wrapper = shallow(<PhotoFrame path={ './path/to/img' } />)
    assert(wrapper.find('img').length > 0)
  })
})
