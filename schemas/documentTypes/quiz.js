import multichoiceQuestion from '../schemaTypes/multichoiceQuestion';

export default {
  name: 'multichoice',
  type: 'document',
  title: 'Multichoice quiz',
  fields: [
    {
      name: 'quizTitle',
      type: 'string',
    },
    {
      name: 'questions',
      type: 'array',
      of: [
        multichoiceQuestion,
      ]
    }
  ]
};