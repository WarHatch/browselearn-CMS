import button from '../schemaTypes/button';

export default {
  name: 'multichoice',
  type: 'document',
  title: 'Asteroidų žaidimas',
  fields: [
    {
      name: 'contentSlug',
      title: 'Turinio kodas (reikalingas sukurti pamokai)',
      type: 'slug',
      options: {
        source: 'quizTitle',
        maxLength: 30, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 15) +
          '/' + new Date().toISOString().slice(5, 19),
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'quizTitle',
      title: 'Testo Pavadinimas',
      type: 'string',
      validation: Rule => Rule.required()
    },
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