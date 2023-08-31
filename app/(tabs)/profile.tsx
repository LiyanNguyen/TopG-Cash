import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const profile = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
