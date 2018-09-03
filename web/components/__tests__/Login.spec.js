import React from 'react'
import Login from '../../components/login/Login'
import { shallow } from 'enzyme'

describe('Login', () => {
  it('should render correctly', () => {
    const component = shallow(<Login />)
    expect(component).toMatchSnapshot()
  })
})
