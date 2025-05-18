import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import shopData from '../config/shopData.json';
// import { icons } from '@/constants/icons';
import { useRouter } from 'expo-router';

const Shop = () => {
  const [search, setSearch] = useState('');
  const products = shopData;
  const router = useRouter()

  return (
    <View className="flex-1 bg-gray-100 px-4 pt-6">

      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-2xl font-bold">Pet Products</Text>
        <TouchableOpacity>
          <Ionicons name="filter-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center bg-white rounded-xl px-3 py-2 shadow mb-4">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search products..."
          value={search}
          onChangeText={(text) => setSearch(text)}
          className="ml-2 flex-1 text-base"
        />
      </View>

      <FlatList
        data={products.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white p-4 mb-4 rounded-2xl shadow w-[48%]">
            <Image source={{ uri: item.image }} className="w-full h-28 rounded-lg mb-2" />
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text className="text-sm text-gray-500">{item.description}</Text>
            <Text className="text-blue-600 font-bold mt-1">{item.price}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Shop;
