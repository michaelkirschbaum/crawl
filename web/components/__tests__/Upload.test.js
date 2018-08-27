import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Upload from '../../components/upload/Upload'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock'

Enzyme.configure({ adapter: new Adapter() });

describe('Upload', () => {
  it('should render correctly', () => {
    /* const component = shallow(
      <Upload />
    )
    expect(component).toMatchSnapshot() */
  })

  it('should fetch projects', () => {
    fetchMock.get('*', JSON.stringify({response: ''}))

    // expect.assertion(1)
    // return getImage('test.jpeg').then
  })

  it('should set error when getImage fails', () => {

  })

  describe('', () => {
    it('', () => {

    })
  })
})
