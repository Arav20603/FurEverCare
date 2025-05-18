import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/type'
import { colors } from '../theme'

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  return (
    <View style={{
      paddingTop: 30,
      flex: 1,
      backgroundColor: 'white'
    }}>
      <StatusBar barStyle='light-content' />
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})