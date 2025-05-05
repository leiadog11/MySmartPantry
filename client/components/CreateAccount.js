import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles.js';
import { userActions } from '../actions/userActions.js';

const CreateAccount = ({ navigation, route }) => {
  const { username } = route.params;

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState(null);

  const handleAccountInfo = () => { 
    userActions.UpdateAccount({ 
      "username": username, 
      "page": 1,
      "first_name": name, 
      "last_name": lastName, 
      "birthday": birthday }, 
      navigation
    ) 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Account Info</Text>

        {/* FIRST NAME INPUT */}
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setName(value)}
          value={name}
          inputMode='text'
          keyboardAppearance='dark'
          textContentType='givenName'
        />

        {/* LAST NAME INPUT */}
        <Text style={styles.inputLabel}>Last Name (OPTIONAL)</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setLastName(value)}
          value={lastName}
          inputMode='text'
          keyboardAppearance='dark'
          textContentType='familyName'
        />

        {/* BIRTHDAY INPUT */}
        <Text style={styles.inputLabel}>Birthday (OPTIONAL)</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setBirthday(value)}
          value={birthday}
          inputMode='numeric'
          keyboardAppearance='dark'
          textContentType='birthdate'
        />

        {/* CONTINUE BUTTON */}
        <TouchableOpacity style={[styles.button, { marginBottom: 30 }]} onPress={handleAccountInfo}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateAccount;