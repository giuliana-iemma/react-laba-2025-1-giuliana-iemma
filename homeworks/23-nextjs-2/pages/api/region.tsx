import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { region } = req.query;

  //Check if there is a region parameter
  if (!region || typeof region !== 'string') {
    return res.status(400).json({ error: 'Region parameter is required' });
  }

  //There is a region paramenter so try to make the request
  try {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to fetch countries' });
  }
}
