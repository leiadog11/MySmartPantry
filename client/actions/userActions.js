import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "config";
const API = config.get("API");

async function Login(params, navigation) {
  try {
    const response = await fetch(`${API}login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });

    const data = await response.json();
    if (response.ok) {
      await AsyncStorage.setItem('@token', data.token);
      await AsyncStorage.setItem('@username', data.username);
      navigation.navigate("Home");
    }
    else {
      Alert.alert('Error', data.message || 'Login failed');
    }
  } catch (error) {
    Alert.alert('Error', 'WEBLUH');
  }
};

async function Register(params, navigation) {
  await AsyncStorage.clear();
  try {
    const response = await fetch(`${API}register`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });

    const data = await response.json();
    if (response.ok) {
      await AsyncStorage.setItem('@token', data.token);
      await AsyncStorage.setItem('@username', data.username);
      navigation.navigate("CreateAccount", { "username": data.username});
    }
    else {
      Alert.alert('Error', data.message || 'Register failed');
    }
  } catch (error) {
    Alert.alert('Error', 'Network error. Please try again.');
  }
};

async function GetUserData(onComplete) {
  let username = await AsyncStorage.getItem('@username');
  try {
    const response = await fetch(`${API}user-data/` + username, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();
    if (response.ok) {
      onComplete(data.user);
    }
    else {
      Alert.alert('Error', data.message || 'Could not retrieve user data.');
    }
  } catch (error) {
    Alert.alert('Error', 'WEBLUH');
  }
};

async function UpdateAccount(params, navigation) {
  try {
    const response = await fetch(`${API}update-account`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    });

    const data = await response.json();
    if (response.ok) {
      if (data.page == 1) {
        navigation.navigate("CreateAccount2", { "username": data.username});
      }
      else {
        navigation.navigate("Home");
      }
    }
    else {
      Alert.alert('Error', data.message || 'Could not update account');
    }
  } catch (error) {
    Alert.alert('Error', 'Network error. Please try again.');
  }
};

export const userActions = {
  Login,
  Register,
  GetUserData,
  UpdateAccount
}