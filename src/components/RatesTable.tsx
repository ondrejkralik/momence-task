import type { ExchangeRate } from '@/types';
import styled from 'styled-components';

interface RatesTableProps {
  rates: ExchangeRate[];
}

const RatesTable: React.FC<RatesTableProps> = ({ rates }) => {
  return (
    <Wrapper>
      {rates.map((rate, index) => (
        <RatesRow key={rate.code} isEven={index % 2 === 0}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: 100 }}>
              <img
                src={`https://img.kurzy.cz/items/flags/${rate.code}.gif`}
                style={{ paddingRight: 8 }}
              />
              {rate.amount} {rate.code}
            </div>
            <div>{rate.country}</div>
          </div>

          <div>{rate.rate}</div>
        </RatesRow>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  -webkit-box-shadow: 0px 0px 28px -12px #000000;
  box-shadow: 0px 0px 28px -12px #000000;
`;

const RatesRow = styled.div<{ isEven: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.isEven ? '#f2f2f2' : '#ffffff')};
  padding: 8px 4px;

  &:hover {
    background-color: #e2e2e2;
  }
`;

export default RatesTable;
