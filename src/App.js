import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FoodList, FoodCategory, FoodDetail} from './pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Food Category" component={FoodCategory} />
        <Stack.Screen name="Food List" component={FoodList} />
        <Stack.Screen name="Food Details" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
