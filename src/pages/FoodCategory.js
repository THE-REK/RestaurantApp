import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';
import {CategoryList} from '../components';

function FoodCategory(props) {
  const [foodCategories, setFoodCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => setFoodCategories(response.data.categories));
  }

  const renderCategory = ({item}) => (
    <CategoryList
      item={item}
      onCategory={() =>
        props.navigation.navigate('Food List', {name: item.strCategory})
      }
    />
  );

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.idCategory}
        data={foodCategories}
        renderItem={renderCategory}
        numColumns={2}
      />
    </View>
  );
}
export {FoodCategory};
