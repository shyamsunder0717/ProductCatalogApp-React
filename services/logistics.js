import moment from 'moment';

export const estimateDelivery = (provider, currentTime, isStockAvailable) => {
  const today = moment();
  const cutoffTimeA = moment().set({ hour: 17, minute: 0 });
  const cutoffTimeB = moment().set({ hour: 9, minute: 0 });

  if (provider === 'Provider A') {
    if (currentTime.isBefore(cutoffTimeA) && isStockAvailable) {
      return today.format('MMMM Do YYYY, h:mm a');
    }
  } else if (provider === 'Provider B') {
    if (currentTime.isBefore(cutoffTimeB)) {
      return today.format('MMMM Do YYYY, h:mm a');
    } else {
      return today.add(1, 'days').format('MMMM Do YYYY');
    }
  } else {
    return today.add(Math.floor(Math.random() * 4) + 2, 'days').format('MMMM Do YYYY');
  }
  return 'Out of stock or cutoff time passed for same-day delivery';
};
