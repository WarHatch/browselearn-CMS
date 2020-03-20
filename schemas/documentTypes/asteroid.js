import baseDocument from "./_baseDocument";
import button from '../schemaTypes/button';

export default {
  name: 'asteroid',
  type: 'document',
  title: 'Asteroidų žaidimas',
  fields: [
    ...baseDocument,
    {
      name: 'explanation',
      title: 'Klausimo paaiškinimas',
      type: 'text',
    },
    {
      name: 'correctAnswers',
      title: 'Teisingi atsakymai',
      type: 'array',
      of: [
        button,
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'incorrectAnswers',
      title: 'Neteisingi atsakymai',
      type: 'array',
      of: [
        button,
      ],
      validation: Rule => Rule.required().min(1)
    }
  ]
};