import { NextApiRequest, NextApiResponse } from 'next';

import { LenderResponse } from '.';

export const middleEarthBankData: LenderResponse = {
  name: 'Middle Earth Bank',
  fields: ['fullName', 'email', 'birthday', 'yearlyIncome'],
};

const handler = (_: NextApiRequest, res: NextApiResponse<LenderResponse>) => {
  res.status(200).json(middleEarthBankData);
};

export default handler;
