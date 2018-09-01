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
    expect(false).toBe(true)
  })

  it('should show error when project lookup fails', () => {
    expect(false).toBe(true)
  })

  it('should show spinner when loading project', () => {
    expect(false).toBe(true)
  })

  it('set error when loading project fails', () => {
    expect(false).toBe(true)
  })

  describe('submit is clicked', () => {
    it('should save project', () => {
      expect(false).toBe(true)
    })

    it('should set error when unable to save project', () => {
      expect(false).toBe(true)
    })

    it('should upload image', () => {
      expect(false).toBe(true)
    })

    it('should set project in state', () => {
      expect(false).toBe(true)
    })
  })
})
