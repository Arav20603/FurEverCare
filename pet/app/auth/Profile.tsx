// app/(tabs)/Profile.tsx
import { View, Text, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { users } from '../config/users'
import { images } from '@/constants/images';

const Profile = () => {
  const data = users[0]

  return (
    <ScrollView className='p-4'>
      <Text className='text-2xl font-bold mb-4 text-center'>Pet Owner Profile</Text>
      <Image source={images.petOwnerProfile} style={{width: '40%', height: '60%'}} className='rounded-full ml-30' />
      <View className='bg-gray-100 p-4 rounded-2xl'>
        <Text className='text-lg mb-2'>👤 Name: {data.name} </Text>
        <Text className='text-lg mb-2'>📧 Email: {data.email}</Text>
        <Text className='text-lg mb-2'>🐾 Pet Name: {data.petName}</Text>
        <Text className='text-lg mb-2'>🐕 Pet Type: {data.petType}</Text>
        <Text className='text-lg mb-2'>🐕 Pet Breed: {data.breed}</Text>
        <Text className='text-lg mb-2'>🎂 Pet Age: {data.age}</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
