// pages/api/BibleBooks.ts
import type { NextApiRequest, NextApiResponse } from 'next'

const GITHUB_API_URL = 'https://api.github.com/repos/wldeh/bible-api/contents/bibles/en-web/books';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch the list of books from the GitHub repository
    const response = await fetch(GITHUB_API_URL);
    const data = await response.json();

    // Extract the book names from the response
    const books = data.map((book: { name: string }) => book.name);

    // Return the list of book names
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books from GitHub.' });
  }
}
