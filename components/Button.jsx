
import React from 'react'
import { StyleSheet, View } from 'react-native'


export default function Button({ children, bg = "#0665CB", styleProps }) {
  return (
    <View style={[styles.container, { backgroundColor: bg, ...styleProps }]}>
      {children}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#0665CB",
    borderRadius: 24,
    padding: 15
  }
})