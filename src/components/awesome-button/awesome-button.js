// @flow

import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'
import style from './awesome-button.style'

type Props = {
  onPress: Function,
  children: string,
  style?: number | Object | Array<number>,
  textStyle?: number | Object | Array<number>,
}

export default function AwesomeButton(props: Props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={StyleSheet.flatten([style.container, props.style])}
    >
      <Text style={StyleSheet.flatten([style.text, props.textStyle])}>{props.children}</Text>
    </TouchableHighlight>
  )
}

AwesomeButton.defaultProps = {
  style: undefined,
  textStyle: undefined,
}
