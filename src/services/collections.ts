import orderSchema from '../database/schema/orders'
import item from '../database/schema/item'

export default [
  {
    name: 'orders',
    schema: orderSchema,
  },
  {
    name: 'items',
    ...item,
  },
]
