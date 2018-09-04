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
})
