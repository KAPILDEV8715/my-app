import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './component/Login';
import Registration from './component/Registration';
import Profiles from './component/Profiles';
import Home from './component/Home';
import FileUpload from './component/FileUpload';
import FileDownload from './component/FileDownload';

const Stack = createStackNavigator();
const App: React.FC = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Data" component={Profiles} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FileUpload" component={FileUpload} />
        <Stack.Screen name="FileDownload" component={FileDownload} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};




export default App; 