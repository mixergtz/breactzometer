import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../configureStore'
import { mount } from 'enzyme'
import SearchBar from '../../containers/SearchBar'

function setup() {

  const store = configureStore()
  const enzymeWrapper = mount(<Provider store={store}><SearchBar/></Provider>)

  return {
    enzymeWrapper
  }
}


describe('containers', () => {
  describe('SearchBar', () => {
    it('should start with search button disabled', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('button').text()).toBe('Search Air Quality')
      expect(enzymeWrapper.find('button').props()["disabled"]).toBe(true)
    })

    it('should enable button if input is populated', () => {
      const { enzymeWrapper } = setup()
      const input = enzymeWrapper.find('input')

      input.node.value = "Foo"
      input.simulate('change')

      expect(enzymeWrapper.find('button').props()["disabled"]).toBe(false)
    })

    it('should disable button if input is empty after being populated', () => {
      const { enzymeWrapper } = setup()
      const input = enzymeWrapper.find('input')

      input.node.value = "Foo"
      input.simulate('change')

      input.node.value = ""
      input.simulate('change')

      expect(enzymeWrapper.find('button').props()["disabled"]).toBe(true)
    })
  })
})
