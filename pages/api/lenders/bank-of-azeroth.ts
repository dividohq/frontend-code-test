import { NextApiRequest, NextApiResponse } from 'next';

import { LenderResponse } from '.';

export const bankOfAzerothData: LenderResponse = {
  name: 'Bank of Azeroth',
  fields: ['firstName', 'lastName', 'email', 'gender', 'monthlyIncome'],
};

const handler = (_: NextApiRequest, res: NextApiResponse<LenderResponse>) => {
  res.status(200).json(bankOfAzerothData);
};

export default handler;
