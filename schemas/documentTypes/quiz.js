import multichoiceQuestion from '../schemaTypes/multichoiceQuestion';
import button from '../schemaTypes/button';

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
      name: 'correctAnswers',
      type: 'array',
      of: [
        button,
      ]
    },
    {
      name: 'incorrectAnswers',
      type: 'array',
      of: [
        button,
      ]
    }
  ]
};