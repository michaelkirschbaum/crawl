import React from 'react'
import { Login } from '../../components/login/Login'
import { shallow } from 'enzyme'

describe('Login', () => {
  it('should render correctly', () => {
    const component = shallow(<Login location={{ state: { pathname: '/'} }}/>)
    expect(component).toMatchSnapshot()
  })
})
