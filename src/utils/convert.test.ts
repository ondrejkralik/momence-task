import { describe, expect, it } from 'vitest';
import { convertRates } from './convert';

const input = `24 Mar 2023 #60
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|14.622
Brazil|real|1|BRL|4.134
Bulgaria|lev|1|BGN|12.109
`;

describe('Convert', () => {
  it('converts input into json', () => {
    const output = convertRates(input);

    expect(output).toEqual({
      date: new Date('24 Mar 2023'),
      rates: [
        {
          country: 'Australia',
          currency: 'dollar',
          amount: 1,
          code: 'AUD',
          rate: 14.622,
        },
        {
          country: 'Brazil',
          currency: 'real',
          amount: 1,
          code: 'BRL',
          rate: 4.134,
        },
        {
          country: 'Bulgaria',
          currency: 'lev',
          amount: 1,
          code: 'BGN',
          rate: 12.109,
        },
      ],
    });
  });
});
