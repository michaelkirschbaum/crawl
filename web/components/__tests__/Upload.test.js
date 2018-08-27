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

  it('should lookup projects', () => {

  })

  it('should show error when project lookup fails', () => {

  })

  it('should show spinner when loading project', () => {

  })

  it('set error when loading project fails', () => {

  })

  describe('submit is clicked', () => {
    it('should save project', () => {

    })

    it('should set error when unable to save project', () => {

    })

    it('should upload image', () => {

    })

    it('should set project in state', () => {
      
    })
  })
})
