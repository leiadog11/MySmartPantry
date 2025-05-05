import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles.js';
import { userActions } from '../actions/userActions.js';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleRegister = () => { userActions.Register({ "username": username, "password": password, "email": email }, navigation) }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>MySmartPantry</Text>
        <Text style={styles.subtitle}>Register</Text>

        {/* EMAIL INPUT */}
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          value={email}
          inputMode='email'
          keyboardAppearance='dark'
          textContentType='email'
        />

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
            <MaterialIcons name={passwordVisible ? 'visibility-off' : 'visibility'} size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.inputLabel}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          {/* CONFIRM PASSWORD INPUT */}
          <TextInput
            style={styles.input}
            onChangeText={(value) => setConfirmPassword(value)}
            value={confirmPassword}
            secureTextEntry={!confirmPasswordVisible}
            inputMode='text'
            keyboardAppearance='dark'
            textContentType='text'
          />

          {/* SEE CONFIRM PASSWORD BUTTON */}
          <TouchableOpacity style={styles.eyeButton} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
            <MaterialIcons name={confirmPasswordVisible ? 'visibility-off' : 'visibility'} size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* REGISTER BUTTON */}
        <TouchableOpacity style={[styles.button, { marginBottom: 30 }]} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        {/* BACK BUTTON */}
        <TouchableOpacity style={[styles.button, { marginBottom: 15 }]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;