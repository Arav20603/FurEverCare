import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { icons } from '@/constants/icons'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
        router.push('/auth/Welcome')
    }, 500)
  }, [])
  return (
    <View className='flex-1 justify-center items-center'
    >
      <Image
        source={icons.logo}
        resizeMode='contain'
        className='h-[20%]'
      />
    </View>
    // <Welcome />
  )
}

export default index

const styles = StyleSheet.create({})