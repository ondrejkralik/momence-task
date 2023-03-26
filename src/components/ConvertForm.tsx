import * as Form from '@radix-ui/react-form';
import { blackA, indigoDark } from '@radix-ui/colors';
import styled from 'styled-components';

import type { ExchangeRate } from '@/types';
import CurrencySelect from './CurrencySelect';

interface ConvertFormProps {
  rates: ExchangeRate[];
}

const ConvertForm: React.FC<ConvertFormProps> = ({ rates }) => {
  return (
    <Wrapper>
      <FormRoot>
        <FormField name="amount">
          <Flex>
            <FormLabel>Amount in CZK</FormLabel>
            <FormMessage match="typeMismatch">Please provide a valid amount</FormMessage>
          </Flex>
          <Form.Control asChild>
            <Input required name="amount" id="amount" />
          </Form.Control>
        </FormField>

        <FormField name="amount">
          <Flex>
            <FormLabel>Currency</FormLabel>
          </Flex>
          <Form.Control asChild>
            <CurrencySelect rates={rates} />
          </Form.Control>
        </FormField>

        <Form.Submit asChild>
          <Button>Convert</Button>
        </Form.Submit>
      </FormRoot>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  -webkit-box-shadow: 0px 0px 28px -12px #000000;
  box-shadow: 0px 0px 28px -12px #000000;
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

const FormMessage = styled(Form.Message)`
  font-size: 13px;
  opacity: 0.8;
`;

const Flex = styled('div')`
  display: flex;
`;

const Input = styled('input')`
  all: unset;
  height: 35px;
  line-height: 1;
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 15px;
  color: black;
  text-align: right;
  box-shadow: 0 0 0 1px ${blackA.blackA9};

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

const Button = styled('button')`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  /* width: 100; */
  box-shadow: 0 2px 10px ${blackA.blackA7};
  background-color: ${indigoDark.indigo9};
  color: white;

  &:hover {
    background-color: ${indigoDark.indigo8};
    box-shadow: 0px 2px 10px ${blackA.blackA9};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${blackA.blackA3};
  }
`;

export default ConvertForm;
