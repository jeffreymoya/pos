import orderSchema from '../database/schema/orders';
import itemSchema from '../database/schema/item';

export default [
  {
    name: 'orders',
    schema: orderSchema,
  },
  {
    name: 'items',
    schema: itemSchema,
  },
];
