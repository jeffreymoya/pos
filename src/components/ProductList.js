import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { Button } from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductList = ({ items }) => (
  <View style={styles.container}>
    {items.map((product, i) => (
      <Card key={i} title={product.name} image={product.code}>
        <Text style={styles.text}>{product.description}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          backgroundColor="#03A9F4"
          buttonStyle={styles.button}
          title="ADD"
        />
      </Card>
    ))}
  </View>
);

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
});

export default ProductList;
