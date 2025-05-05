import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles';

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MySmartPantry</Text>

      {/* LOGIN BUTTON */}
      <TouchableOpacity style={[styles.button, { marginBottom: 30 }]} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* REGISTER BUTTON */}
      <TouchableOpacity style={[styles.button, { marginBottom: 15 }]}  onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* MORE INFO BUTTON*/}
      <TouchableOpacity style={styles.moreInfoContainer}>
        <MaterialCommunityIcons style={styles.infoBubble} name="information-outline" size={24} color="white" />
        <Text style={styles.infoText}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;