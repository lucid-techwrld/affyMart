export const deliveryOptions = [{
  id: '1', 
  deliveryDays: 7,
  deliveryPrice: 0
},
{
  id: '2',
  deliveryDays: 3,
  deliveryPrice: 499
},
{
  id: '3',
  deliveryDays: 1,
  deliveryPrice: 999
}];


export function getDelivery(deliveryOptionId) {
  let deliveryOption = deliveryOptions.find((option) => option.id === deliveryOptionId);
  return deliveryOption || deliveryOptions[0];
}