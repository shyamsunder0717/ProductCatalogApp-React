import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ProductList from '../components/ProductList';
import PincodeInput from '../components/PincodeInput';
import CountdownTimer from '../components/CountdownTimer';
import { estimateDelivery } from '../services/logistics';
import { products } from '../services/data';
import moment from 'moment';

const HomeScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [provider, setProvider] = useState('');
  const cutoffTime = moment().set({ hour: provider === 'Provider A' ? 17 : 9, minute: 0 });

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handlePincodeValidation = (pincode, logisticsProvider) => {
    setProvider(logisticsProvider);
    const estimatedDate = estimateDelivery(logisticsProvider, moment(), selectedProduct?.inStock);
    setDeliveryDate(estimatedDate);
  };

  return (
    <View style={{ padding: 20 }}>
      <ProductList products={products} onSelect={handleProductSelect} />
      {selectedProduct && <Text>Selected Product: {selectedProduct.name}</Text>}
      <PincodeInput onValidate={handlePincodeValidation} />
      {provider && <CountdownTimer cutoffTime={cutoffTime} />}
      {deliveryDate && <Text>Estimated Delivery Date: {deliveryDate}</Text>}
    </View>
  );
};

export default HomeScreen;
