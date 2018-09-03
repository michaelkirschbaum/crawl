import React from 'react'
import Settings from '../../components/settings/Settings'
import { shallow } from 'enzyme'

describe('Settings', () => {
  it('should render correctly', () => {
    const component = shallow(<Settings />)
    expect(component).toMatchSnapshot()
  })
