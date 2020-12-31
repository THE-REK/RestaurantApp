import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, Button, Linking} from 'react-native';
import axios from 'axios';
import {detail_item} from '../styles/pages_styles';

function FoodDetail({route}) {
  const {id} = route.params;
  const [foodDetails, setFoodDetails] = useState([]);

  useEffect(() => {
    fetchDetailData();
  }, []);

  function fetchDetailData() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
          i: id,
        },
      })
      .then((response) => setFoodDetails(response.data.meals));
  }

  const renderDetail = ({item}) => (
    <View style={detail_item.container}>
      <Image source={{uri: item.strMealThumb}} style={detail_item.logo} />
      <Text style={detail_item.title1}>{item.strMeal} </Text>
      <Text style={detail_item.title2}> Which country: {item.strArea} </Text>
      <Text style={detail_item.description}>{item.strInstructions} </Text>
      <Button
        title="Recipe on Youtube"
        onPress={() => Linking.openURL(item.strYoutube)}
        color="orange"
      />
    </View>
  );

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.idMeal}
        data={foodDetails}
        renderItem={renderDetail}
      />
    </View>
  );
}
export {FoodDetail};
