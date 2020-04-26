import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Icon, Button } from 'react-native-elements'
import { Item } from '../../shared/slices/items'

const ProductList = ({ items }) => (
  <View style={styles.container}>
    {items.map((product: Item, i: number) => (
      <Card key={i} title={product.name} image={[{ uri: product.code }]}>
        <Text style={styles.text}>{product.description}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={styles.button}
          title="ADD"
        />
      </Card>
    ))}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  text: { marginBottom: 10 },
})

export default ProductList
