import orderSchema from '../models/orders'
import item from '../models/item'

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
