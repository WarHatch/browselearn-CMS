export default [
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
        '@' + new Date().toISOString().slice(5, 19),
    },
    validation: Rule => Rule.required()
  },
  {
    name: 'quizTitle',
    title: 'Testo Pavadinimas',
    type: 'string',
    validation: Rule => Rule.required()
  }
]