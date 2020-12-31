import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {meal_item} from '../styles/components_styles';

function MealList({item, onMeal}) {
  return (
    <View style={meal_item.container}>
      <TouchableOpacity onPress={onMeal}>
        <ImageBackground
          source={{uri: item.strMealThumb}}
          style={meal_item.logo}>
          <View style={meal_item.title_view}>
            <Text style={meal_item.title}> {item.strMeal} </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
export {MealList};
