import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const CreateCommunity = () => {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleCreate = () => {
    if (!communityName || !description) {
      ToastAndroid.show('Please fill in all fields', ToastAndroid.SHORT);
      return;
    }

    ToastAndroid.show('Community created (dummy)', ToastAndroid.SHORT);
    router.back(); // Go back to Community listing
  };

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-10">
      <Text className="text-2xl font-bold text-center mb-6">Create New Community</Text>

      <Text className="text-lg mb-2">Community Name</Text>
      <TextInput
        value={communityName}
        onChangeText={setCommunityName}
        placeholder="e.g., Pet Lovers Bangalore"
        className="border border-gray-300 p-4 mb-4 rounded-xl"
      />

      <Text className="text-lg mb-2">Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Tell us about your community"
        multiline
        numberOfLines={4}
        className="border border-gray-300 p-4 mb-6 rounded-xl"
      />

      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-xl"
        onPress={handleCreate}
      >
        <Text className="text-white text-center font-semibold text-lg">Create Community</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateCommunity;
