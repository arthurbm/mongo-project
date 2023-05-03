import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/your-database-name';

export const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
