import React from 'react'
import { shallow } from 'enzyme'
import Upload from '../../components/upload/Upload'
import fetchMock from 'fetch-mock'

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
})
