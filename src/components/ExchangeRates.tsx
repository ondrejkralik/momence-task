import type { ExchangeRate } from '@/types';
import styled from 'styled-components';
import ConvertForm from './ConvertForm';
import RatesTable from './RatesTable';

interface ExchangeRatesProps {
  rates: ExchangeRate[];
}

const ExchangeRates: React.FC<ExchangeRatesProps> = ({ rates }) => {
  return (
    <Wrapper>
      <Column>
        <ConvertForm rates={rates} />
      </Column>

      <Column>
        <RatesTable rates={rates} />
      </Column>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  margin: 64px auto;
  gap: 16px;
`;

const Column = styled.div`
  width: 100%;
`;

export default ExchangeRates;
