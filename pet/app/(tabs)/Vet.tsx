import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';
import vetData from '../config/vetData.json';
import Ionicons from '@expo/vector-icons/Ionicons';
import { icons } from '@/constants/icons';

type VetType = {
  id: string;
  name: string;
  address: string;
  image: string;
  latitude: number;
  longitude: number;
};

const { width, height } = Dimensions.get('window');

const Vet = () => {
  const [vets, setVets] = useState<VetType[]>([]);
  const router = useRouter();

  useEffect(() => {
    setVets(vetData);
  }, []);

  const initialRegion = {
    latitude: 12.9716,
    longitude: 77.5946,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center justify-between p-4">
        <Text className="text-2xl font-bold" style={{ fontFamily: 'Inter_900Black' }}>
          FurEverCare
        </Text>
        <TouchableOpacity onPress={() => router.push('/auth/Profile')}>
          <Image source={icons.petProfile} className="w-10 h-10 rounded-full" />
        </TouchableOpacity>
      </View>

      <View className="mx-4 mb-4 rounded-2xl overflow-hidden">
        <MapView
          style={{ width: '100%', height: height * 0.25 }}
          initialRegion={initialRegion}
          showsUserLocation={true}
        >
          {vets.map((vet) => (
            <Marker
              key={vet.id}
              coordinate={{ latitude: vet.latitude, longitude: vet.longitude }}
              title={vet.name}
              description={vet.address}
            />
          ))}
        </MapView>
      </View>

      <ScrollView className="px-4 mb-6" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold mb-4 text-center">Nearby Vet Centers</Text>

        {vets.map((vet) => (
          <TouchableOpacity
            key={vet.id}
            className="mb-4 rounded-2xl overflow-hidden shadow bg-white"
            // onPress={() => {}}
          >
            <Image source={{ uri: vet.image }} className="w-full h-40" resizeMode="cover" />
            <View className="p-4">
              <Text className="text-xl font-semibold text-gray-800">{vet.name}</Text>
              <Text className="text-sm text-gray-500 mt-1">{vet.address}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Vet;
