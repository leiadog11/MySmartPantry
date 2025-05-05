import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles.js';

const ShoppingList = ({ navigation }) => { 
    return (
        <View style={styles.homePages}>
            <Text style={styles.pageTitle}>Shopping List</Text>

            <View style={styles.shoppingListSettings}>
                <TouchableOpacity style={styles.shoppingListSettingButton}>
                    <Text style={styles.shoppingListSettingText}>Clear All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shoppingListSettingButton}>
                    <Text style={styles.shoppingListSettingText}>Add Items to Pantry</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.shoppingListItems}>
                <TouchableOpacity style={styles.shoppingListAdd}>
                    <MaterialIcons style={styles.addIcon} name={'add'} size={30} color="black"/>
                    <Text style={styles.addText2}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ShoppingList;