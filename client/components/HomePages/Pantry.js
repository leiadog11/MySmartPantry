import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles.js';

const data = [
    { label: 'Pantry 1', value: '1' },
    { label: 'Pantry 2', value: '2' },
    { label: 'Pantry 3', value: '3' },
    { label: 'Pantry 4', value: '4' },
    { label: 'Pantry 5', value: '5' },
];

const data2 = [
    { label: 'Filter 1', value: '1' },
    { label: 'Filter 2', value: '2' },
    { label: 'Filter 3', value: '3' }
];

const Pantry = ({ navigation }) => {
    const [value, setValue] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (text) => {
        setSearchQuery(text);
    };

    return (
        <View style={styles.homePages}>
            <Dropdown
                style={styles.pantrySelector}
                placeholderStyle={styles.pantrySelectorText}
                selectedTextStyle={styles.pantrySelectorText}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Select Pantry"
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                iconStyle={{ tintColor: 'black' }}
            />
            <View style={styles.pantrySettings}>
                <TextInput style={styles.pantrySearch} value={searchQuery} onChangeText={handleSearchChange} />
                <Dropdown
                style={styles.pantryFilter}
                placeholderStyle={styles.filterSelectorText}
                selectedTextStyle={styles.filterSelectorText}
                data={data2}
                labelField="label"
                valueField="value"
                placeholder="Filter"
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                iconStyle={{ tintColor: 'black' }}
            />
            </View>

            <View style={styles.pantryItems}>
                <TouchableOpacity style={styles.pantryAdd}>
                    <MaterialIcons style={styles.addIcon} name={'add'} size={30} color="black"/>
                    <Text style={styles.addText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Pantry;