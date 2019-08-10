const itemSchema = {
  type: 'object',
  properties: {
    code: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    categoryCode: {
      type: 'string',
    },
    variations: {
      type: 'object',
    },
    price: {
      type: 'number',
    },
    branchCode: {
      type: 'string',
    },
    createdBy: {
      type: 'string',
    },
    createdDate: {
      type: 'date',
    },
    attachmentNames: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    attachments: {},
  },
};

export default itemSchema;
