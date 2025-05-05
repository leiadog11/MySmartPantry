import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles.js';

const Coupons = ({ navigation }) => { 

    return (
        <View style={styles.homePages}>
            <Text style={styles.pageTitle}>Coupons</Text>
        </View>
    );
};

export default Coupons;