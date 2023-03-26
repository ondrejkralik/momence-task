import { useQuery } from '@tanstack/react-query';
import { convertRatesToJson } from '@/utils/convert';
import ExchangeRates from '@/components/ExchangeRates';
import styled from 'styled-components';

const API_URL =
  'https://api.allorigins.win/raw?url=https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

const App: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch(API_URL).then(res => res.text()),
  });

  const rates = convertRatesToJson(data);

  return (
    <Wrapper>
      <h1>Czech national bank exchange rates</h1>

      {isLoading ? (
        <span>Loading...</span>
      ) : error ? (
        <span>Error: {error.toString()}</span>
      ) : (
        <ExchangeRates rates={rates} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 16px;
`;

export default App;
