import { Header } from 'react-native-elements';
import OrderList from './OrderList';
import ProductList from './ProductList';

const HomeScreen = ({ items, products }) => (
  <Header>
    <OrderList items={items} />
    <ProductList products={products} />
  </Header>
)

export default HomeScreen;
