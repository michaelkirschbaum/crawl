import React from 'react'
import { shallow } from 'enzyme'
import Upload from '../../components/upload/Upload'
import fetchMock from 'fetch-mock'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Upload', () => {
  fetchMock.get('*', JSON.stringify({res: ''}))

  it('should render correctly', () => {
    const component = shallow(<Upload />)
    expect(component).toMatchSnapshot()
  })

  it('should fetch projects', () => {
    // return getImage('test.jpeg').then
  })
})
