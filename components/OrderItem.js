import React from 'react';
import { View } from 'react-native';
import { Icon, Input, Text } from 'react-native-elements';

const OrderItem = ({ orderItem, increment, decrement }) => (
  <View>
    <Text>orderItem.name</Text>
    <Text>orderItem.price</Text>
    <Icon
      reverse
      name="indeterminate-check-box"
      type="material"
      color="#517fa4"
      onPress={decrement}
    />
    <Input placeHolder={orderItem.quantity} />
    <Icon
      reverse
      name="add-box"
      type="material"
      color="#517fa4"
      onPress={increment}
    />
  </View>
);

export default OrderItem;
