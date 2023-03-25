import type { ExchangeRate } from '@/types';
import styled from 'styled-components';
import RatesTable from './RatesTable';

interface ExchangeRatesProps {
  rates: ExchangeRate[];
}

const ExchangeRates: React.FC<ExchangeRatesProps> = ({ rates }) => {
  return (
    <Wrapper>
      <Column>
        <RatesTable rates={rates} />
      </Column>

      <Column>todo</Column>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;

const Column = styled.div`
  width: 100%;
`;

export default ExchangeRates;
