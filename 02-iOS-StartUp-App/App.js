import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import FlyScreen from './screens/FlyScreen'

export default function App() {

const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
    <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="FlyScreen"
          component={FlyScreen}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
        {/* <HomeScreen/> */}
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
