import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles.js';
import { userActions } from '../actions/userActions.js';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '') {
      Alert.alert("Please enter your username.");
    }
    userActions.Login({"username": username, "password": password}, navigation)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>MySmartPantry</Text>
        <Text style={styles.subtitle}>Login</Text>

        {/* USERNAME INPUT */}
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
            style={styles.input}
            onChangeText={(value) => setUsername(value)}
            value={username}
            inputMode='text'
            keyboardAppearance='dark'
            textContentType='username'
        />

        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.passwordContainer}>
          {/* PASSWORD INPUT */}
          <TextInput
              style={styles.input}
              onChangeText={(value) => setPassword(value)}
              value={password}
              secureTextEntry={!passwordVisible}
              inputMode='text'
              keyboardAppearance='dark'
              textContentType='password'
          />

          {/* SEE PASSWORD BUTTON */}
          <TouchableOpacity style={styles.eyeButton} onPress={() => setPasswordVisible(!passwordVisible)}>
            <MaterialIcons name={passwordVisible ? 'visibility-off' : 'visibility'} size={24} color="black"/>
          </TouchableOpacity>
        </View>

        {/* LOGIN BUTTON */}
        <TouchableOpacity style={[styles.button, { marginBottom: 30 }]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        {/* BACK BUTTON */}
        <TouchableOpacity style={[styles.button, { marginBottom: 15 }]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        {/* MORE INFO BUTTON*/}
        <TouchableOpacity style={styles.moreInfoContainer}>
          <MaterialCommunityIcons style={styles.infoBubble} name="information-outline" size={24} color="white" />
          <Text style={styles.infoText}>Forgot password</Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;