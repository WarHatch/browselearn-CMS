export default {
  title: 'paveikslėlis-žodis',
  name: 'wordPicture',
  type: 'object',
  fields: [
    {
      name: 'word',
      title: 'Žodis',
      type: 'string',
    },
    {
      name: 'picture',
      type: 'image',
      validation: Rule => Rule.required()
    }
  ]
}