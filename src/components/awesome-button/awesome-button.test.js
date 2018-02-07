import React from 'react'
import { StyleSheet } from 'react-native'
import { shallow } from 'enzyme'
import { noop, sampleText } from '../../utils/test-helpers'
import AwesomeButton from './awesome-button'

describe('<AwesomeButton>', () => {
  const Component = <AwesomeButton onPress={noop}>{sampleText}</AwesomeButton>

  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component)
      expect(wrapper).toMatchSnapshot()
    })

    it('renders external container style from object', () => {
      const Clone = React.cloneElement(Component, { style: { backgroundColor: 'red' } })
      const wrapper = shallow(Clone)
      expect(wrapper).toMatchSnapshot()
    })

    it('renders external container style from ID', () => {
      const styles = StyleSheet.create({
        containerStyle: {
          padding: 4,
        },
      })
      const Clone = React.cloneElement(Component, { style: styles.containerStyle })
      const wrapper = shallow(Clone)
      expect(wrapper).toMatchSnapshot()
    })

    it('renders external container style from array', () => {
      const style1 = { backgroundColor: 'yellow' }
      const styles = StyleSheet.create({
        style2: {
          maxHeight: 32,
        },
      })
      const Clone = React.cloneElement(Component, { style: [style1, styles.style2] })
      const wrapper = shallow(Clone)
      expect(wrapper).toMatchSnapshot()
    })

    it('renders external text style from object', () => {
      const Clone = React.cloneElement(Component, { textStyle: { color: 'black' } })
      const wrapper = shallow(Clone)
      expect(wrapper).toMatchSnapshot()
    })

    it('renders external text style from ID', () => {
      const styles = StyleSheet.create({
        textStyle: {
          fontSize: 12,
        },
      })
      const Clone = React.cloneElement(Component, { textStyle: styles.textStyle })
      const wrapper = shallow(Clone)
      expect(wrapper).toMatchSnapshot()
    })

    it('renders external text style from array', () => {
      const style1 = { color: 'blue' }
      const styles = StyleSheet.create({
        style2: {
          fontFamily: 'sans-serif',
        },
      })
      const Clone = React.cloneElement(Component, { textStyle: [style1, styles.style2] })
      const wrapper = shallow(Clone)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Functionality', () => {
    it('handles onPress callback', () => {
      const onPressSpy = jest.fn()
      const Clone = React.cloneElement(Component, { onPress: onPressSpy })
      const wrapper = shallow(Clone)
      wrapper.simulate('press')
      expect(onPressSpy).toHaveBeenCalledTimes(1)
    })
  })
})
