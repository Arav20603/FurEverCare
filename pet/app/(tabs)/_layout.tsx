import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

const TabIcon = ({ focused, name }: any) => {
  const iconSize = focused ? 30 : 24

  return (
      <Ionicons name={name} size={iconSize} />
  );
};

const Root_Layout = () => {
  return (
    <Tabs screenOptions={{headerShown: false,
      tabBarShowLabel: false
    }} >
      <Tabs.Screen
        name="Vet"
        options={{
          headerShown: false,
          title: 'Vet',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name='medkit-sharp' />
          ),
        }}
      />
      <Tabs.Screen
        name="Community"
        options={{
          headerShown: false,
          title: 'Community',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name='people' />
          ),
        }}
      />
      <Tabs.Screen
        name="Emergency"
        options={{
          headerShown: false,
          title: 'Emergency',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name='help-buoy' />
          ),
        }}
      />
      <Tabs.Screen
        name="Shop"
        options={{
          headerShown: false,
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name='bag' />
          ),
        }}
      />
      
    </Tabs>
  )
}

export default Root_Layout

const styles = StyleSheet.create({})