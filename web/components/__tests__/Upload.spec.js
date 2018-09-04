import React from 'react'
import { Upload } from '../../components/upload/Upload'
import fetchMock from 'fetch-mock'
import { shallow, mount } from 'enzyme'
import { spy } from 'sinon'
import { FadeLoader } from 'react-spinners'

fetchMock.get('*', JSON.stringify({res: ''}))

describe('Upload', () => {
  let component

  it('should render correctly', () => {
    component = shallow(<Upload />)
    expect(component).toMatchSnapshot()
  })

  it('calls componentDidMount', () => {
    const spy = spyOn(Upload.prototype, 'componentDidMount')
    component = mount(<Upload />)
    component.instance().componentDidMount()
    expect(spy).toHaveBeenCalled()
  })

  it('should lookup projects', () => {
    component.instance().componentDidMount()
  })

  it('should show error when project lookup fails', () => {

  })

  it('should show spinner when loading project', () => {
    component = shallow(<Upload />)
    expect(component.find(FadeLoader)).to.have.lengthOf(1)
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
