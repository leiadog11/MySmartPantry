import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles.js';

const Barcodes = ({ navigation }) => { 

    return (
        <View style={styles.homePages}>
            <Text style={styles.pageTitle}>Barcodes</Text>
        </View>
    );
};

export default Barcodes;