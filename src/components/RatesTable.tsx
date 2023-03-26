import type { ExchangeRate } from '@/types';
import styled from 'styled-components';

interface RatesTableProps {
  rates: ExchangeRate[];
}

const RatesTable: React.FC<RatesTableProps> = ({ rates }) => {
  return (
    <Wrapper>
      <RatesRow isEven={false}>
        <Flex>
          <Rate>
            <strong>Currency</strong>
          </Rate>
          <div>
            <strong>Country</strong>
          </div>
        </Flex>

        <div>
          <strong>in CZK</strong>
        </div>
      </RatesRow>

      {rates.map((rate, index) => (
        <RatesRow key={rate.code} isEven={index % 2 === 0}>
          <Flex>
            <Rate>
              <FlagImg src={`https://img.kurzy.cz/items/flags/${rate.code}.gif`} />
              {rate.amount} {rate.code}
            </Rate>
            <div>{rate.country}</div>
          </Flex>

          <div>{rate.rate}</div>
        </RatesRow>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  -webkit-box-shadow: 0px 0px 28px -12px #000000;
  box-shadow: 0px 0px 28px -12px #000000;

  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Rate = styled.div`
  width: 100px;
`;

const RatesRow = styled.div<{ isEven: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.isEven ? '#f2f2f2' : '#ffffff')};
  padding: 8px 4px;
`;

const FlagImg = styled.img`
  padding-right: 8px;
`;

export default RatesTable;
