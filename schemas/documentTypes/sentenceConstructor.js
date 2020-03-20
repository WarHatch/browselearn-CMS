import baseDocument from "./_baseDocument";
import wordPicture from '../schemaTypes/wordPicture';

export default {
  name: 'sentenceConstructor',
  type: 'document',
  title: 'Sakinių konstruktorius',
  fields: [
    ...baseDocument,
    {
      name: 'storyChunks',
      title: 'Istorijos atkarpos',
      description: 'Tekstas tarp „spragų“',
      type: 'array',
      of: [
        {
          name: 'storyChunk',
          type: 'text',
          rows: 2
        }
      ]
    },
    {
      name: 'answers',
      title: 'Atsakymai',
      description: 'Eilės tvarka, atsakymai į teksto spragas. ⚠ SVARBU: turi būti vienu atsakymu mažiau nei \'Istorijos atkarpų\'',
      type: 'array',
      of: [
        wordPicture,
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'badAnswers',
      title: 'Neteisingi atsakymai',
      description: 'Neprivalomi papildomi atsakymų variantai',
      type: 'array',
      of: [
        wordPicture,
      ]
    }

  ]
};