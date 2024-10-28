import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import PincodeInput from '../components/PincodeInput';
import CountdownTimer from '../components/CountdownTimer';
import { estimateDelivery } from '../services/logistics';
import moment from 'moment';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params; // Receive selected product from navigation params
  const [provider, setProvider] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [cutoffTime, setCutoffTime] = useState(null);

  const handlePincodeValidation = (pincode, logisticsProvider) => {
    setProvider(logisticsProvider);

    // Set cutoff time based on provider for the countdown timer
    const cutoff = moment().set({
      hour: logisticsProvider === 'Provider A' ? 17 : 9,
      minute: 0,
    });
    setCutoffTime(cutoff);

    // Estimate delivery date
    const estimatedDate = estimateDelivery(logisticsProvider, moment(), product.inStock);
    setDeliveryDate(estimatedDate);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{product.name}</Text>
      <Text style={{ fontSize: 16, color: product.inStock ? 'green' : 'red' }}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </Text>

      <PincodeInput onValidate={handlePincodeValidation} />

      {provider && cutoffTime && (
        <CountdownTimer cutoffTime={cutoffTime} />
      )}

      {deliveryDate ? (
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          Estimated Delivery Date: {deliveryDate}
        </Text>
      ) : (
        provider && (
          <Text style={{ marginTop: 10, fontSize: 16, color: 'red' }}>
            Cannot estimate delivery due to stock or cutoff time issues.
          </Text>
        )
      )}

      <Button title="Back to Products" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProductDetailScreen;
