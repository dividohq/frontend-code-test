import { NextApiResponse, NextApiRequest } from 'next';

import { bankOfAzerothData } from './bank-of-azeroth';
import { middleEarthBankData } from './middle-earth-bank';
import { nabooBankData } from './naboo-bank';

export interface LenderResponse {
  name: string;
  fields: Array<
    | 'fullName'
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'birthday'
    | 'yearlyIncome'
    | 'monthlyIncome'
    | 'gender'
    | 'address'
  >;
}

const handler = (_: NextApiRequest, res: NextApiResponse<LenderResponse[]>) => {
  res.status(200).json([nabooBankData, middleEarthBankData, bankOfAzerothData]);
};
