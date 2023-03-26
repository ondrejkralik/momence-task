import * as Form from '@radix-ui/react-form';
import { blackA, indigoDark } from '@radix-ui/colors';
import styled from 'styled-components';

import type { ExchangeRate } from '@/types';
import CurrencySelect from './CurrencySelect';
import { useEffect, useState } from 'react';

interface ConvertFormProps {
  rates: ExchangeRate[];
}

const ConvertForm: React.FC<ConvertFormProps> = ({ rates }) => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState('0');

  useEffect(() => {
    const selectedRate = rates.find(rate => rate.code === currency);
    if (selectedRate) {
      setConvertedAmount(
        Number((Number(amount) / selectedRate.rate) * selectedRate.amount).toFixed(3),
      );
    }
  }, [amount, currency, rates]);

  return (
    <Wrapper>
      <FormRoot>
        <FormField name="amount">
          <Flex>
            <FormLabel>Amount in CZK</FormLabel>
          </Flex>
          <Form.Control asChild>
            <Input
              placeholder="Enter amount in CZK"
              name="amount"
              id="amount"
              value={amount}
              onChange={event => {
                if (/^(\d*\.)?\d*$/.test(event.target.value)) {
                  setAmount(event.target.value);
                }
              }}
              onFocus={event => event.target.select()}
            />
          </Form.Control>
        </FormField>

        <FormField name="amount">
          <Flex>
            <FormLabel>Currency</FormLabel>
          </Flex>
          <CurrencySelect
            rates={rates}
            value={currency}
            onChange={newValue => setCurrency(newValue)}
          />
        </FormField>

        <ConvertedAmount>
          {amount || 0} CZK
          <br /> = {convertedAmount} {currency}
        </ConvertedAmount>
      </FormRoot>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 350px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  -webkit-box-shadow: 0px 0px 28px -12px #000000;
  box-shadow: 0px 0px 28px -12px #000000;
`;

const ConvertedAmount = styled.div`
  font-size: 35px;
  font-weight: bold;
  line-height: 1;
  color: ${indigoDark.indigo8};
  margin: 32px 0;
  padding: 16px;
  border: 1px solid ${blackA.blackA7};
  border-radius: 4px;
`;

const FormRoot = styled(Form.Root)`
  padding: 0 16px;
  text-align: right;
`;

const FormField = styled(Form.Field)`
  display: grid;
  margin-bottom: 10px;
`;

const FormLabel = styled(Form.Label)`
  font-size: 15px;
  font-weight: bold;
  line-height: 35px;
`;

const Flex = styled('div')`
  display: flex;
`;

const Input = styled('input')`
  all: unset;
  padding: 8px 16px;
  box-sizing: border-box;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 20px;
  color: black;
  text-align: right;
  box-shadow: 0 0 0 1px ${blackA.blackA7};

  &:hover {
    box-shadow: 0 0 0 1px black;
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
  &::selection {
    background-color: ${blackA.blackA9};
    color: white;
  }
`;

export default ConvertForm;
