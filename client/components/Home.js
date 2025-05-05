import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Pantry, ShoppingList, Recipes, Barcodes, Coupons } from './HomePages';
import { userActions } from '../actions/userActions.js';
import styles from '../styles.js';

import profile1 from '../assets/images/profile1.png';
import profile2 from '../assets/images/profile2.png';
import profile3 from '../assets/images/profile3.png';
import profile4 from '../assets/images/profile4.png';
import profile5 from '../assets/images/profile5.png';

const Home = ({ navigation }) => {
  const [data, setData] = useState({});
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const sidebarWidth = useRef(new Animated.Value(0)).current;

  const images = [profile1, profile2, profile3, profile4, profile5];

  const toggleSidebar = () => {
    const newValue = !isSideBarOpen; // compute the target first

    Animated.timing(sidebarWidth, {
      toValue: newValue ? 0.3 : 0, // open or close
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsSideBarOpen(newValue); // update the state afterward
  };

  const renderScreen = () => {
    switch (currentTab) {
      case 0:
        return <Pantry navigation={navigation} />;
      case 1:
        return <ShoppingList navigation={navigation} />;
      case 2:
        return <Recipes navigation={navigation} />;
      case 3:
        return <Barcodes navigation={navigation} />;
      case 4:
        return <Coupons navigation={navigation} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    userActions.GetUserData((data) => {
      setData(data);
    });
  }, []);

  return (
    <View style={styles.home}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => toggleSidebar()}>
          <MaterialIcons style={styles.topBarMenu} name={'menu'} size={36} color="#D0D6D6" />
        </TouchableOpacity>
        <Text style={styles.topBarText}>{data.first_name}</Text>
        <TouchableOpacity style={[styles.profileBackground, { backgroundColor: data.background_color }]} onPress={() => navigation.navigate("CreateAccount2", { "username": data.username })}>
          <Image source={images[data.icon]} style={styles.profilePic}></Image>
        </TouchableOpacity>
      </View>

      {renderScreen()}

      <Animated.View style={[styles.sideBar, { width: sidebarWidth.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) }]}>
        <TouchableOpacity style={[styles.sideBarButton, currentTab === 0 && styles.sideBarButtonSelected]} onPress={() => setCurrentTab(0)}>
          <MaterialIcons name={'kitchen'} size={75} color="#4C7273" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.sideBarButton, currentTab === 1 && styles.sideBarButtonSelected]} onPress={() => setCurrentTab(1)}>
          <MaterialIcons name={'format-list-bulleted'} size={75} color="#4C7273" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.sideBarButton, currentTab === 2 && styles.sideBarButtonSelected]} onPress={() => setCurrentTab(2)}>
          <MaterialIcons name={'library-books'} size={75} color="#4C7273" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.sideBarButton, currentTab === 3 && styles.sideBarButtonSelected]} onPress={() => setCurrentTab(3)}>
          <MaterialCommunityIcons name={'barcode'} size={75} color="#4C7273" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.sideBarButton, currentTab === 4 && styles.sideBarButtonSelected]} onPress={() => setCurrentTab(4)}>
          <MaterialIcons name={'sell'} size={75} color="#4C7273" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsButton}>
          <MaterialIcons name={'settings'} size={35} color="#4C7273" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Home;