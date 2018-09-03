import React from 'react'
import Register from '../../components/register/Register'
import { shallow } from 'enzyme'

describe('Register', () => {
  it('should render correctly', () => {
    const component = shallow(<Register />)
    expect(component).toMatchSnapshot()
  })
})
