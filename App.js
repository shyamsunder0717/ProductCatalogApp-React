import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Product Catalog' }}
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetailScreen} 
          options={({ route }) => ({ title: route.params.product.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
