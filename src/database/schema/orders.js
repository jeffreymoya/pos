const orderSchema = {
  type: 'object',
  version: 0,
  properties: {
    code: {
      type: 'string',
      primary: true,
    },
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          quantity: {
            type: 'number',
          },
          price: {
            type: 'number',
          },
        },
      },
    },
    created: {
      type: 'string',
    },
    branchCode: {
      type: 'string',
    },
    employeeCode: {
      type: 'string',
    },
    paymentAmount: {
      type: 'number',
    },
    paymentChangeAmount: {
      type: 'number',
    },
    vatAmount: {
      type: 'number',
    },
    vatExempt: {
      type: 'number',
    },
    vatTotal: {
      type: 'number',
    },
    subTotalAmount: {
      type: 'number',
    },
    totalAmount: {
      type: 'number',
    },
    discount: {
      type: 'object',
    },
    status: {
      type: 'string',
    },
  },
};

export default orderSchema;
