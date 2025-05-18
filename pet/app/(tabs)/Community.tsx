import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { icons } from '@/constants/icons';
import communityData from '../config/communityData.json';

const Community = () => {
  const router = useRouter();
  const [communities, setCommunities] = useState<any>([]);

  useEffect(() => {
    setCommunities(communityData);
  }, []);

  return (
    <View className="flex-1 bg-white">
      
      <View className="flex-row items-center justify-between p-4">
        <Text className="text-2xl font-bold">FurEverCare</Text>
        <TouchableOpacity onPress={() => router.push('/auth/Profile')}>
          <Image source={icons.petProfile} className="w-10 h-10 rounded-full" />
        </TouchableOpacity>
      </View>

        <TouchableOpacity
          onPress={() => router.push('/pages/createCommunity')}
          className=" p-3 mb-10"
        >
          <Text className="text-white text-center font-semibold rounded-xl w-[50%] p-3 bg-blue-500">Create New Community</Text>
        </TouchableOpacity>
      <ScrollView className="px-4">
        <Text className="text-2xl font-bold mb-4 text-center">Communities</Text>
        {communities.map((item: any) => (
          <TouchableOpacity
            key={item.id}
            className="mb-6 bg-white rounded-2xl shadow"
            // onPress={() => router.push(`/CommunityDetail?id=${item.id}`)}
          >
            <Image
              source={{ uri: item.image }}
              className="w-full h-40 rounded-t-2xl"
              resizeMode="cover"
            />
            <View className="p-4">
              <Text className="text-xl font-semibold text-gray-800">{item.name}</Text>
              <Text className="text-sm text-gray-500 mt-1">{item.description}</Text>
              <Text className="text-xs text-gray-400 mt-1">
                📍 {item.location} • 👥 {item.membersCount} members
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        
      </ScrollView>
    </View>
  );
};

export default Community;
