import React from 'react'
import Account from '../../components/account/Account'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Account', () => {
  it('should render correctly', () => {
    const component = shallow(<Account />)
    expect(component).toMatchSnapshot()
  })
})
