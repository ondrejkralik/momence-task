import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { blackA } from '@radix-ui/colors';

import type { ExchangeRate } from '@/types';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface CurrencySelectProps {
  rates: ExchangeRate[];
  value: string;
  onChange: (newValue: string) => void;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ rates, value, onChange }) => {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <SelectTrigger aria-label="Amount">
        <Select.Value />
        <Select.SelectIcon>
          <ChevronDownIcon />
        </Select.SelectIcon>
      </SelectTrigger>
      <Select.Portal>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            {rates.map(rate => (
              <SelectItem key={rate.code} value={rate.code}>
                <img
                  src={`https://img.kurzy.cz/items/flags/${rate.code}.gif`}
                  style={{ paddingRight: 8 }}
                />
                {rate.code} - {rate.currency.charAt(0).toUpperCase() + rate.currency.slice(1)}
              </SelectItem>
            ))}
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectTrigger = styled(Select.SelectTrigger)`
  all: unset;
  height: 35px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: right;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 20px;
  gap: 5px;
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

const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`;

const SelectItem = forwardRef(function SelectItem(
  { children, ...props }: any,
  forwardedRef: React.Ref<HTMLDivElement> | undefined,
) {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  );
});

const StyledItem = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-highlighted] {
    outline: none;
  }
`;

const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const scrollButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  cursor: default;
`;

const SelectScrollUpButton = styled(Select.ScrollUpButton)`
  ${scrollButtonStyles}
`;

const SelectScrollDownButton = styled(Select.ScrollDownButton)`
  ${scrollButtonStyles}
`;

export default CurrencySelect;
