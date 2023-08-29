import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

type Props = {}

const index = (props: Props) => {

  return (
    <Tabs
      // detachInactiveScreens
      // sceneContainerStyle={{backgroundColor: '#ccc', padding: 55}}

      // if applying to all of them
      screenOptions={{
        headerShown: false,
        // tabBarStyle: {backgroundColor:'red'},
      }}
    >
      <Tabs.Screen name="index"
        options={{
          title: "Home",
          // tabBarIcon: ({ focused, color, size }) => <Text>{size}</Text>
        }} />
      <Tabs.Screen name="Inbox" options={{ title: "Page 1" }} />
      <Tabs.Screen name="Transactions" options={{ title: "Page 2" }} /> 
      <Tabs.Screen name="Profile" options={{ title: "Page 3" }} /> 
    </Tabs>
  )
}

export default index

const styles = StyleSheet.create({})