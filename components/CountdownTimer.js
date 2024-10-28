import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

const CountdownTimer = ({ cutoffTime }) => {
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const duration = moment.duration(cutoffTime.diff(now));
      const hours = Math.floor(duration.asHours());
      const minutes = duration.minutes();
      setRemainingTime(`${hours}h ${minutes}m`);
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [cutoffTime]);

  return (
    <View>
      <Text>Time Remaining for Same-Day Delivery: {remainingTime}</Text>
    </View>
  );
};

export default CountdownTimer;
