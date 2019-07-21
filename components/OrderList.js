import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import OrderItem from './OrderItem';

const OrderList = ({ orders }) => (
  <View style={styles.container}>
    <ScrollView>
      {orders && orders.map(order => <OrderItem order={order} />)}
    </ScrollView>
    <Button
      icon={
        <Icon name="cart-arrow-right" type="material-community" size={15} />
      }
      title="Checkout"
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default OrderList;
