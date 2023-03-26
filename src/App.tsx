import { useQuery } from '@tanstack/react-query';
import { convertRates } from '@/utils/convert';
import ExchangeRates from '@/components/ExchangeRates';
import styled from 'styled-components';

const API_URL =
  'https://api.allorigins.win/raw?url=https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

const App: React.FC = () => {
  const { error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => {
      try {
        return fetch(API_URL)
          .then(res => res.text())
          .then(text => convertRates(text));
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });

  return (
    <Wrapper>
      <>
        <h1>Exchange rates</h1>
        {error && <p>Error: {error.toString()}</p>}
        {data && <ExchangeRates rates={data?.rates} date={data?.date} />}
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 16px;
`;

export default App;
