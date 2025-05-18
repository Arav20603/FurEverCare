import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [breed, setPetBreed] = useState('');
  const [age, setAge] = useState('');



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.head}>Create New Account</Text>

      <TextInput placeholder="Full Name" style={styles.textInput} onChangeText={setUserName} />
      <TextInput placeholder="Email" style={styles.textInput} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry style={styles.textInput} onChangeText={setPassword} />
      <TextInput placeholder="Pet Name" style={styles.textInput} onChangeText={setPetName} />
      <TextInput placeholder="Pet Type" style={styles.textInput} onChangeText={setPetType} />
      <TextInput placeholder="Pet Type" style={styles.textInput} onChangeText={setPetBreed} />
      <TextInput placeholder="Pet Age" style={styles.textInput} onChangeText={setAge} />

      <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/auth/Login')}>
        <Text style={styles.loginBtnText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/auth/Login')} style={styles.createBtn}>
        <Text style={styles.createBtnText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  head: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  loginBtn: {
    backgroundColor: '#1E90FF',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  loginBtnText: { color: '#fff', fontWeight: 'bold' },
  createBtn: {
    borderWidth: 1,
    borderColor: '#1E90FF',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  createBtnText: { color: '#1E90FF', fontWeight: 'bold' },
});
