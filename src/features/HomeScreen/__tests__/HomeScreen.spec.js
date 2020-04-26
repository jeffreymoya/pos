import React from 'react'
import HomeScreen from '../HomeScreen'
import renderer from 'react-test-renderer'

describe('HomeScreen', () => {
  const props = {
    items: [],
    products: [],
  }
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
