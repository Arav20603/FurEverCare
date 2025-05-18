import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import reportsData from '../config/reports.json';

const SCREEN_WIDTH = Dimensions.get('window').width;

const RescueCenter = () => {
  const [reports, setReports] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMapId, setActiveMapId] = useState(null); // show one map at a time

  useEffect(() => {
    setReports(reportsData);
  }, []);

  const filteredReports = reports.filter(
    (report: any) =>
      report.animalType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStatusUpdate = (id: any, newStatus: any) => {
    const updatedReports = reports.map((report: any) =>
      report.id === id ? { ...report, status: newStatus } : report
    );
    setReports(updatedReports);
  };

  const renderItem = ({ item }: any) => (
    <View className="bg-white rounded-xl p-4 mb-4 shadow">
      <View className="flex-row justify-between mb-2">
        <Text className="text-xl font-bold text-gray-800">{item.animalType}</Text>
        <Text
          className={`text-xs font-bold px-2 py-1 rounded-full self-start ${
            item.status === 'New'
              ? 'bg-yellow-200 text-yellow-800'
              : item.status === 'In Progress'
              ? 'bg-blue-200 text-blue-800'
              : 'bg-green-200 text-green-800'
          }`}
        >
          {item.status}
        </Text>
      </View>

      <Text className="text-gray-600 mb-1">{item.description}</Text>
      <Text className="text-gray-500 text-sm mb-1">📍 {item.location}</Text>
      <Text className="text-gray-500 text-sm mb-2">📞 {item.contact}</Text>

      <TouchableOpacity
        onPress={() => setActiveMapId(activeMapId === item.id ? null : item.id)}
        className="bg-gray-200 px-3 py-1 rounded mb-2"
      >
        <Text className="text-blue-600 text-center">
          {activeMapId === item.id ? 'Hide Map' : 'View Map'}
        </Text>
      </TouchableOpacity>

      {activeMapId === item.id && (
        <MapView
          style={{ height: 150, width: SCREEN_WIDTH - 32, borderRadius: 12 }}
          initialRegion={{
            latitude: item.latitude,
            longitude: item.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude: item.latitude, longitude: item.longitude }} />
        </MapView>
      )}

      <View className="flex-row mt-4 space-x-2">
        {item.status !== 'In Progress' && (
          <TouchableOpacity
            className="bg-blue-600 px-4 py-2 rounded-xl"
            onPress={() => handleStatusUpdate(item.id, 'In Progress')}
          >
            <Text className="text-white font-semibold">Accept</Text>
          </TouchableOpacity>
        )}
        {item.status !== 'Resolved' && (
          <TouchableOpacity
            className="bg-green-600 px-4 py-2 rounded-xl ml-5"
            onPress={() => handleStatusUpdate(item.id, 'Resolved')}
          >
            <Text className="text-white font-semibold">Resolve</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="bg-white rounded-xl p-4 mb-4 shadow">
        <Text className="text-xl font-bold">Hope Animal Rescue</Text>
        <Text className="text-gray-600">Koramangala, Bangalore</Text>
        <Text className="text-gray-500">Open: 9am – 9pm</Text>
      </View>

      <TextInput
        placeholder="Search by animal or location"
        value={searchQuery}
        onChangeText={setSearchQuery}
        className="bg-white rounded-xl p-3 mb-4 shadow"
      />

      <FlatList
        data={filteredReports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RescueCenter;
