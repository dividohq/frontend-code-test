import { NextApiRequest, NextApiResponse } from 'next';

import { LenderResponse } from '.';

export const nabooBankData: LenderResponse = {
  name: 'Naboo Bank',
  fields: ['firstName', 'lastName', 'gender', 'monthlyIncome', 'address'],
};

const handler = (_: NextApiRequest, res: NextApiResponse<LenderResponse>) => {
  res.status(200).json(nabooBankData);
};

export default handler;
