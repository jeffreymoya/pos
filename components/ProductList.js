import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { Button } from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductList = ({ products }) => (
  <View style={styles.container}>
    {products.map((product, i) => (
      <Card key={i} title={product.name} image={require(product.imageUrl)}>
        <Text style={{ marginBottom: 10 }}>{product.description}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
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
});

export default ProductList;
