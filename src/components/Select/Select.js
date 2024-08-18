import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <label>
      {label}
      <CustomSelect style={{"--width": displayedValue.length * 15 + "px"}} value={value} onChange={onChange}>
        {children}
      </CustomSelect>
    </label>
  );
};

const CustomSelect = styled.select`
  width: var(--width);
  max-width: fit-content;
  border: unset;
  border-radius: 8px;
  background-color: ${COLORS.gray50};
  padding: 12px 16px;
  margin-left: 12px;
  font-size: 1rem;
  color: ${COLORS.gray700};

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
