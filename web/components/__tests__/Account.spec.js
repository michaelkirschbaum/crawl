import React from 'react'
import { Account } from '../../components/account/Account'
import { shallow } from 'enzyme'

describe('Account', () => {
  it('should render correctly', () => {
    const component = shallow(<Account />)
    expect(component).toMatchSnapshot()
  })
})
