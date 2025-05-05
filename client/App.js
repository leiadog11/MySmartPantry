import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import { Landing, Login, Register, Home, CreateAccount, CreateAccount2, CreateHousehold } from './components'
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'PlayfairDisplay': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
    'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
    'RobotoSlab': require('./assets/fonts/RobotoSlab-Regular.ttf'),
    'RobotoSlabLight': require('./assets/fonts/RobotoSlab-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false,  
          gestureEnabled: true,  
          gestureDirection: 'horizontal', 
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="CreateAccount2" component={CreateAccount2} />
        <Stack.Screen name="CreateHouseHold" component={CreateHousehold} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
