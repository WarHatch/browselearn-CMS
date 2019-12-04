export default {
  name: 'button',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'trackable',
      description: 'Tracks the time of click',
      type: 'boolean'
    },
    {
      name: 'dissappears',
      description: 'Is removed on click',
      type: 'boolean'
    },
    {
      name: 'backgroundColor',
      type: 'string',
      options: {
        list: ['white', 'black'],
      }
    }
  ]
}