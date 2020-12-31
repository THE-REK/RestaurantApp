import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {MealList} from '../components';

function FoodList({route, navigation}) {
  const {name} = route.params;
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    fetchListData();
  }, []);

  function fetchListData() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php`, {
        params: {
          c: name,
        },
      })
      .then((response) => setFoodList(response.data.meals));
  }

  const renderList = ({item}) => (
    <MealList
      item={item}
      onMeal={() => navigation.navigate('Food Details', {id: item.idMeal})}
    />
  );

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.idMeal}
        data={foodList}
        renderItem={renderList}
      />
    </View>
  );
}
export {FoodList};
