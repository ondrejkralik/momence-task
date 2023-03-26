import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { violet, mauve, blackA } from '@radix-ui/colors';

import type { ExchangeRate } from '@/types';
import { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';

interface CurrencySelectProps {
  rates: ExchangeRate[];
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ rates }) => {
  const [value, setValue] = useState('USD');

  return (
    <Select.Root value={value} onValueChange={newValue => setValue(newValue)}>
      <SelectTrigger aria-label="Amount">
        <Select.Value />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  background-color: white;
  color: ${violet.violet11};
  box-shadow: ${`0 2px 10px ${blackA.blackA7}`};

  &:hover {
    background-color: ${mauve.mauve3};
  }

  &:focus {
    box-shadow: ${`0 0 0 2px black`};
  }

  &[data-placeholder] {
    color: ${violet.violet9};
  }
`;

const SelectIcon = styled(Select.SelectIcon)`
  color: ${violet.violet11};
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
  color: ${violet.violet11};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: ${mauve.mauve8};
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    background-color: ${violet.violet9};
    color: ${violet.violet1};
  }
`;

const SelectLabel = styled(Select.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: ${mauve.mauve11};
`;

const SelectSeparator = styled(Select.Separator)`
  height: 1px;
  background-color: ${violet.violet6};
  margin: 5px;
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
  background-color: white;
  color: ${violet.violet11};
  cursor: default;
`;

const SelectScrollUpButton = styled(Select.ScrollUpButton)`
  ${scrollButtonStyles}
`;

const SelectScrollDownButton = styled(Select.ScrollDownButton)`
  ${scrollButtonStyles}
`;

export default CurrencySelect;
