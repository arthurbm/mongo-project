import { client } from '../db/index.js';

export async function findAtorByBirthYearRange() {
  const atorCollection = client.db().collection('Ator');

  const result = await atorCollection.find({
    $and: [
      { data_de_nascimento: { $gte: new Date('1980-01-01') } },
      { data_de_nascimento: { $lte: new Date('2000-01-01') } },
    ],
  }).toArray();

  console.log('Find actors by birth year range result:', result);
}
