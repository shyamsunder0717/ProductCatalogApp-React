import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const ProductList = ({ products, onSelect }) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() => onSelect(item)}
        disabled={!item.inStock}
        style={{ opacity: item.inStock ? 1 : 0.5 }}
      >
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
          <Text>{item.inStock ? 'In Stock' : 'Out of Stock'}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

export default ProductList;
