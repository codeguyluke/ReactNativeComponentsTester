// @flow

import React from 'react'
import { View } from 'react-native'
import AwesomeButton from './components/awesome-button'
import style from './app.style'

export default function App() {
  return (
    <View style={style.container}>
      <AwesomeButton onPress={() => {}}>Click me tender</AwesomeButton>
    </View>
  )
}
