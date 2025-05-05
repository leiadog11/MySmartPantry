import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles.js';
import { userActions } from '../actions/userActions.js';

import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';

import profile1 from '../assets/images/profile1.png';
import profile2 from '../assets/images/profile2.png';
import profile3 from '../assets/images/profile3.png';
import profile4 from '../assets/images/profile4.png';
import profile5 from '../assets/images/profile5.png';

const CreateAccount2 = ({ navigation, route }) => {
  const { username } = route.params;

  const [currentImage, setCurrentImage] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);

  const images = [profile1, profile2, profile3, profile4, profile5];
  const backgrounds = ["#ff80ed", "#065535", "#133337", "#ff0000", "#e6e6fa", "#ffd700", "#0000ff", "#800080"];

  const handleAccountInfo = () => {
    userActions.UpdateAccount({
      "username": username,
      "page": 2,
      "icon": currentImage,
      "background_color": backgrounds[currentBackground]
    },
      navigation
    )
  }

  const handleImageSelection = (direction) => {
    setCurrentImage(currentImage + direction);
  }

  const handleBackgroundSelection = (direction) => {
    setCurrentBackground(currentBackground + direction);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Select an Icon</Text>

      { /* ICON SELECTOR */}
      <View style={styles.selector}>
        <TouchableOpacity disabled={currentImage == 0 ? true : false} style={styles.arrow} onPress={() => handleImageSelection(-1)}>
          <Image style={styles.arrow} source={leftArrow}></Image>
        </TouchableOpacity>
        <Image style={styles.icon} source={images[currentImage]}></Image>
        <TouchableOpacity disabled={currentImage === images.length - 1 ? true : false} onPress={() => handleImageSelection(1)}>
          <Image source={rightArrow}></Image>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Select a Background</Text>

      { /* Background SELECTOR */}
      <View style={styles.selector}>
        <TouchableOpacity disabled={currentBackground == 0 ? true : false} style={styles.arrow} onPress={() => handleBackgroundSelection(-1)}>
          <Image style={styles.arrow} source={leftArrow}></Image>
        </TouchableOpacity>
        <View style={[styles.backgroundColor, { backgroundColor: backgrounds[currentBackground] }]}></View>
        <TouchableOpacity disabled={currentBackground === backgrounds.length - 1 ? true : false} onPress={() => handleBackgroundSelection(1)}>
          <Image source={rightArrow}></Image>
        </TouchableOpacity>
      </View>

      {/* CONTINUE BUTTON */}
      <TouchableOpacity style={[styles.button, { marginBottom: 10 }]} onPress={handleAccountInfo}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* BACK BUTTON */}
      <TouchableOpacity style={[styles.button, { marginBottom: 30 }]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

    </View>
  );
};

export default CreateAccount2;