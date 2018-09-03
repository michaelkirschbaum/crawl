import React from 'react'
import Register from '../../components/register/Register'
import { shallow } from 'enzyme'

describe('register', () => {
  it('should render correctly', () => {
    const component = shallow(<Register />)
    expect(component).toMatchSnapshot()
  })
