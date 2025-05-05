import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles.js';

import banana from '../../assets/images/banana.png';

const instructions = ["Do this!", "Do that!", "Boo yeah!"];

const Recipes = ({ navigation }) => {
    return (
        <View style={styles.homePages}>
            <Text style={styles.pageTitle}>Recipes</Text>

            <View style={styles.recipeBook}>
                <View style={styles.recipeName}>
                    <Image source={banana} style={styles.recipeImage}></Image>
                    <View style={styles.recipeText}>
                        <Text style={styles.recipeTitle}>Banana Recipe</Text>
                        <Text style={styles.recipeDescription}>This recipe is for...</Text>
                    </View>
                </View>

                <View style={styles.recipeInstructions}>
                    <Text style={styles.instructionsTitle}>Instructions</Text>
                    <ScrollView>
                        {instructions.map((item, index) => (
                            <View style={styles.bulletItem} key={index}>
                                <Text style={styles.bullet}>{'\u2022'}</Text>
                                <Text style={styles.itemText}>{item}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.ingredients}>
                    <Text style={styles.instructionsTitle}>Ingredients</Text>
                    <View style={styles.ingredientButtons}>
                        <TouchableOpacity style={styles.recipeAdd}>
                            <MaterialIcons style={styles.addIcon} name={'add'} size={30} color="black" />
                            <Text style={styles.addText2}>Add Item</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ingredientRemove}>
                            <Text style={styles.ingredientRemoveText}>Remove Items from Pantry</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Recipes;