/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--border-radius": 4 + "px",
    "--padding": 0,
    "--border-radius-inside": 0,
  },
  medium: {
    "--height": 12 + "px",
    "--border-radius": 4 + "px",
    "--padding": 0,
    "--border-radius-inside": 0,
  },
  large: {
    "--height": 24 + "px",
    "--border-radius": 8 + "px",
    "--padding": 4 + "px",
    "--border-radius-inside": 4 + "px",
  }
}

const ProgressBar = ({ value, size }) => {
  let styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <ProgressWrapper style={styles}>
        <VisuallyHidden>Progress Bar</VisuallyHidden>
        <ProgressFill style={{"--fill-percentage": value + "%"}}></ProgressFill>
      </ProgressWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: inset 0px 2px 4px 0px ${COLORS.transparentGray35};
  padding: var(--padding); 
`;

const ProgressWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-inside);
  overflow: hidden;
`;

const ProgressFill = styled.progress`
  width: var(--fill-percentage);
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
