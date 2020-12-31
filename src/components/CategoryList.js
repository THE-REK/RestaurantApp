import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {category_item} from '../styles/components_styles';
function CategoryList({item, onCategory}) {
  return (
    <View style={category_item.container}>
      <TouchableOpacity onPress={onCategory}>
        <Image
          resizeMode="contain"
          source={{uri: item.strCategoryThumb}}
          style={category_item.logo}
        />
        <Text style={category_item.title}> {item.strCategory} </Text>
      </TouchableOpacity>
    </View>
  )
}
export {CategoryList};
