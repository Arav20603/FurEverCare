import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';

const Emergency = () => {
  const [image, setImage] = useState<string | null>(null);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      allowsEditing: true,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setVideoUri(null);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      allowsEditing: true,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setVideoUri(null);
    }
  };

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 0.7,
    });
    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
      setImage(null);
    }
  };

  const recordVideo = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 0.7,
    });
    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
      setImage(null);
    }
  };

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied');
      return;
    }
    const loc = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
    });
  };

  const handleSubmit = async () => {
    if ((!image && !videoUri) || !description || !location) {
      Alert.alert('Please fill out all fields and add an image or video!');
      return;
    }

    const newReport = {
      id: Date.now().toString(),
      media: image ? { type: 'image', uri: image } : { type: 'video', uri: videoUri },
      description,
      location,
      timestamp: new Date().toISOString(),
    };

    const existing = await AsyncStorage.getItem('sosReports');
    const parsed = existing ? JSON.parse(existing) : [];
    parsed.push(newReport);

    await AsyncStorage.setItem('sosReports', JSON.stringify(parsed));
    Alert.alert('✅ Report Submitted!');
    setImage(null);
    setVideoUri(null);
    setDescription('');
    setLocation(null);
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 py-6">
      <Text className="text-3xl font-bold text-center text-rose-600 mb-6">🚨 Emergency SOS</Text>

      <View className="bg-gray-100 p-4 rounded-2xl shadow-md">
        <Text className="text-lg font-semibold mb-2">Upload Media</Text>

        <View className="flex-row justify-between mb-3">
          <TouchableOpacity
            onPress={pickImage}
            className="bg-blue-500 px-4 py-2 rounded-full flex-row items-center"
          >
            <Ionicons name="image-outline" size={20} color="white" />
            <Text className="text-white ml-2 font-semibold">Gallery Image</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={takePhoto}
            className="bg-green-500 px-4 py-2 rounded-full flex-row items-center"
          >
            <Ionicons name="camera-outline" size={20} color="white" />
            <Text className="text-white ml-2 font-semibold">Camera Photo</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            onPress={pickVideo}
            className="bg-indigo-500 px-4 py-2 rounded-full flex-row items-center"
          >
            <Ionicons name="videocam-outline" size={20} color="white" />
            <Text className="text-white ml-2 font-semibold">Gallery Video</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={recordVideo}
            className="bg-pink-600 px-4 py-2 rounded-full flex-row items-center"
          >
            <Ionicons name="videocam" size={20} color="white" />
            <Text className="text-white ml-2 font-semibold">Record Video</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-lg font-semibold mb-1">Description</Text>
        <TextInput
          placeholder="Describe the situation..."
          className="bg-white border border-gray-300 p-3 rounded-lg mb-4 text-gray-800"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity
          onPress={getLocation}
          className="bg-purple-600 py-3 rounded-full items-center mb-4"
        >
          <Text className="text-white font-bold">📍 Get Current Location</Text>
        </TouchableOpacity>

        {location && (
          <Text className="text-gray-600 mb-4 text-center">
            📌 {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
          </Text>
        )}

        {/* Image Preview */}
        {image && (
          <View className="mb-4">
            <Image
              source={{ uri: image }}
              className="w-full h-48 rounded-xl mb-2"
              resizeMode="cover"
            />
            <TouchableOpacity
              onPress={() => setImage(null)}
              className="bg-red-500 py-2 rounded-full items-center"
            >
              <Text className="text-white font-semibold">❌ Remove Image</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Video Preview */}
        {videoUri && (
          <View className="mb-4">
            <Video
              source={{ uri: videoUri }}
              style={{ width: '100%', height: 200, borderRadius: 12, marginBottom: 8 }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping={false}
            />
            <TouchableOpacity
              onPress={() => setVideoUri(null)}
              className="bg-red-500 py-2 rounded-full items-center"
            >
              <Text className="text-white font-semibold">❌ Remove Video</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-rose-600 py-3 rounded-full items-center"
        >
          <Text className="text-white font-bold text-lg">🚀 Submit Report</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Emergency;
