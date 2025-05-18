import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import ScreenWrapper from '@/app/components/ScreenWrapper';
import { images } from '@/constants/images';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/app/theme';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View className="flex-1 items-center px-4 py-6">
            <Image source={images.loginImg} className="w-44 h-44 mb-4" resizeMode="contain" />

            <Text className="text-black text-2xl font-bold">Sign In</Text>
            <Text className="text-gray-500 text-center mt-2">
              Enter valid Email Id and Password to continue
            </Text>

            <View className="w-full mt-6">
              <View className="relative mb-4">
                <Ionicons name="person-outline" size={18} color={colors.Gray} style={styles.icon} />
                <TextInput
                  placeholder="Email Id"
                  className="pl-10 pr-4 py-3 text-gray-700 rounded-2xl border border-gray-300"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View className="relative mb-6">
                <Ionicons name="lock-closed-outline" size={18} color={colors.Gray} style={styles.icon} />
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  className="pl-10 pr-4 py-3 text-gray-700 rounded-2xl border border-gray-300"
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <TouchableOpacity onPress={() => router.push('/Vet')}>
                <Text className="bg-blue-500 p-3 text-center text-white font-semibold text-lg rounded-xl">
                  Login
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center mt-6">
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/auth/Signup')}>
                <Text className="text-blue-500 font-semibold">Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 14,
    left: 12,
  },
});
