import React, { useEffect } from 'react';
import { Header } from 'react-native-elements';
import ProductList from './ProductList';
import { fetch } from '../redux/items';

const HomeScreen = ({ items }) => {
  useEffect(fetch);
  console.log(`items: ${items.length}`);
  return (
    <Header>
      <ProductList items={items} />
    </Header>
  );
};

export default HomeScreen;
