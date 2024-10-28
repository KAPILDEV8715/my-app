import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfilesStyle from '../styles/ProfilesStyle';

const Profiles: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [userData, setUserData] = useState<{ name: string; email: string; password: string; id: number }[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('userData');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setUserData(parsedData);
        }
      } catch (error) {
        console.error('Error loading data', error);
        Alert.alert('Failed to load data.');
      }
    };
    loadData();
  }, []);

  const handleEdit = (item: { name: string; email: string; password: string; id: number }) => {
    navigation.navigate('Registration', {
      name: item.name,
      email: item.email,
      password: item.password,
      id: item.id,
    });
  };

  const handleDelete = async (id: number) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this user?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: async () => {
            const updatedData = userData.filter(user => user.id !== id);
            setUserData(updatedData);
            await AsyncStorage.setItem('userData', JSON.stringify(updatedData));
            Alert.alert('Data deleted successfully!');
          },
        },
      ],
    );
  };

  const renderItem = ({ item }: { item: { name: string; email: string; password: string; id: number } }) => (
    <View style={ProfilesStyle.item}>
      <Text style={ProfilesStyle.itemText}>Name: {item.name}</Text>
      <Text style={ProfilesStyle.itemText}>Email: {item.email}</Text>
      <Text style={ProfilesStyle.itemText}>Password: {item.password}</Text>
      <View style={ProfilesStyle.buttonContainer}>
        <Button title="Edit" onPress={() => handleEdit(item)} color="#1E88E5" />
        <Button title="Delete" onPress={() => handleDelete(item.id)} color="#E53935" />
      </View>
    </View>
  );

  return (
    <ImageBackground source={require('../src/background3.jpg')} style={ProfilesStyle.background}>
      <View style={ProfilesStyle.overlay}>
        <Text style={ProfilesStyle.title}>All Users</Text>
        {userData.length > 0 ? (
          <FlatList
            data={userData}
            renderItem={renderItem}
            keyExtractor={item => item.id ? item.id.toString() : Math.random().toString()}
          />
        ) : (
          <Text>No data available.</Text>
        )}
        <TouchableOpacity style={ProfilesStyle.backButton} onPress={() => navigation.goBack()}>
          <Text style={ProfilesStyle.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Profiles;
