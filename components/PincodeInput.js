import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';
import { pincodes } from '../services/data';

const PincodeInput = ({ onValidate }) => {
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState(null);

  const validatePincode = () => {
    if (pincodes[pincode]) {
      onValidate(pincode, pincodes[pincode]);
      setError(null);
    } else {
      setError('Invalid Pincode');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={setPincode}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Validate Pincode" onPress={validatePincode} />
    </View>
  );
};

export default PincodeInput;
