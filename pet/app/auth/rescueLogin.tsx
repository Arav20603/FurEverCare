import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import ScreenWrapper from '@/app/components/ScreenWrapper'
import { images } from '@/constants/images'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/app/theme';
import { useRouter } from 'expo-router';


const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <ScreenWrapper>
      <View className='flex-1 items-center'>
        <Image source={images.loginImg} className='size-[220px]' />
        <Text className='text-black text-2xl font-bold'>Sign In</Text>
        <Text className='text-gray-500 text-md mt-2'>Enter valid Email Id and Username to continue</Text>

        <SafeAreaView>
          <Ionicons name='person-outline' className='absolute top-14 left-3' size={18} color={colors.Gray} />
          <TextInput placeholder='Email Id' className='px-12 text-gray-600 p-4 rounded-2xl w-[330px] mt-10 border border-gray-200'
          underlineColorAndroid='transparent' value={email} onChangeText={(value) => setEmail(value)}
        />
        </SafeAreaView>
        <SafeAreaView>
          <Ionicons name='lock-closed-outline' className='absolute top-14 left-3' size={18} color={colors.Gray} />
          <TextInput placeholder='Password' className='px-12 text-gray-600 p-4 rounded-2xl w-[330px] mt-10 border border-gray-200'
          underlineColorAndroid='transparent' secureTextEntry={true} value={password} onChangeText={(value) => setPassword(value)}
        />
        </SafeAreaView>

          <TouchableOpacity className='flex-1 items-center mt-10' onPress={() => router.push('/pages/rescueCenters')}>
            <Text className='bg-blue-500 p-3 w-[280px] text-center text-white font-semibold text-xl rounded-xl'>Login</Text>
          </TouchableOpacity>
        <View className='flex-1 flex-row gap-1 absolute bottom-60'>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text className='text-blue-500 font-semibold'>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}
export default Login

const styles = StyleSheet.create({})