const item = {
  schema: {
    version: 0,
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
        type: 'string',
      },
      attachments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            path: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  methods: {
    thumbnailImage: () =>
      this.attachments.filter(a => a.type === 'thumb')[0].path,
  },
};

export default item;
