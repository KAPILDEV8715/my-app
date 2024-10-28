import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyle from '../styles/HomeStyle';
// import Button from './Button';

const Home = (props: { navigation: { navigate: (screen: string) => void } }) => {
  return (
    <View >
      <View style={HomeStyle.container}>
      <Text style={HomeStyle.title}>Home Component</Text>
      </View>
        
        <TouchableOpacity 
          style={HomeStyle.navButton} 
          onPress={() => props.navigation.navigate('Registration')}>
          <Text style={HomeStyle.navButtonText}>Add User</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={HomeStyle.navButton} 
          onPress={() => props.navigation.navigate('Data')}>
          <Text style={HomeStyle.navButtonText}>User Profiles</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={HomeStyle.navButton} 
          onPress={() => props.navigation.navigate('FileUpload')}>
          <Text style={HomeStyle.navButtonText}>Upload File</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={HomeStyle.navButton} 
          onPress={() => props.navigation.navigate('FileDownload')}>
          <Text style={HomeStyle.navButtonText}>Dwonload File</Text>
        </TouchableOpacity>
      </View>
    
  );
};

 
export default Home;
 
 
 