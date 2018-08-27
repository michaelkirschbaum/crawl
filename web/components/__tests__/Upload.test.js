import React from 'react'
import { shallow } from 'enzyme'
import Upload from '../../components/upload/Upload'
import fetchMock from 'fetch-mock'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() })

describe('Upload', () => {
  fetchMock.get('*', JSON.stringify({response: ''}))

  it('should render correctly', () => {
    const component = renderer.create(
      <Upload />
    ).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should fetch projects', () => {
    // return getImage('test.jpeg').then
  })
})
