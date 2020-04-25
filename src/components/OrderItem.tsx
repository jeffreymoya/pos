import React from 'react'
import { View } from 'react-native'
import { Icon, Input, Text } from 'react-native-elements'

const OrderItem = ({ order }) => (
  <View>
    <Text>order.name</Text>
    <Text>order.price</Text>
    <Icon
      reverse
      name="indeterminate-check-box"
      type="material"
      color="#517fa4"
    />
    <Input placeholder={order} />
    <Icon reverse name="add-box" type="material" color="#517fa4" />
  </View>
)

export default OrderItem
