import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_KEY = 'c5e7257deda8e925ad1c7a29afc64b29';
const BASE_URL = 'https://api.scripture.api.bible/v1';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { bibleId = 'de4e12af7f28f599-01', passage = 'GEN.1.1-GEN.1.5' } = req.query;

  try {
    const response = await axios.get(`${BASE_URL}/bibles/${bibleId}/passages/${encodeURIComponent(passage as string)}`, {
      headers: {
        'api-key': API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Bible passage.' });
  }
}
