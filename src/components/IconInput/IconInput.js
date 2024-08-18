import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--font-size": 14 + "px",
    "--wrapper-padding": 4 + "px" + " " + 0 + "px",
    "--input-padding": 8 + "px",
    "--border-bottom": 1 + "px",
    "--outline-offset": 2 + "px"
  },
  large: {
    "--font-size": 18 + "px",
    "--wrapper-padding": 8 + "px" + " " + 0 + "px",
    "--input-padding": 12 + "px",
    "--border-bottom": 2 + "px",
    "--outline-offset": 4 + "px"
  }
}

const ICON_SIZES = {
  small: 16,
  large: 24,
}

const ICON_STROKEWIDTH = {
  small: 1,
  large: 2,
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let styles = SIZES[size];

  return (
    <Wrapper style={{"--wrapper-width": width + "px", ...styles}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <label htmlFor='input'>
        <CustomIcon id={icon} size={ICON_SIZES[size]} strokeWidth={ICON_STROKEWIDTH[size]} />
      </label>
      <Input id='input' placeholder={placeholder} style={styles} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--wrapper-width);
  border-bottom: var(--border-bottom) solid ${COLORS.black};
  background-color: ${COLORS.transparentGray15};
  position: relative;
  padding: var(--wrapper-padding);

  &:hover {
    color: ${COLORS.black};
  }
`;

const CustomIcon = styled(Icon)`
  display: inline-block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${COLORS.gray700};
  font-size: var(--font-size);
  font-weight: 700;
  position: absolute;
  top: 0;
  bottom: 0;
  padding-left: var(--input-padding);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: var(--outline-offset);
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
