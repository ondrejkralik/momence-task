import type { ExchangeRate } from '@/types';
import styled from 'styled-components';
import ConvertForm from './ConvertForm';
import RatesTable from './RatesTable';

interface ExchangeRatesProps {
  rates: ExchangeRate[];
  date: Date;
}

const ExchangeRates: React.FC<ExchangeRatesProps> = ({ rates, date }) => {
  return (
    <Wrapper>
      <Column>
        <ConvertForm rates={rates} />
        <Note>
          The exchange rates are from the Czech national bank dated {date.toLocaleDateString()}.
        </Note>
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
  max-width: 70%;
  margin: 64px auto;
  gap: 16px;

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const Column = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Note = styled.p`
  font-size: 14px;
  color: #666;
  max-width: 350px;
  padding: 8px;
`;

export default ExchangeRates;
