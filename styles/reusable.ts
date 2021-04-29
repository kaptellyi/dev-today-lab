import styled from 'styled-components';
import { BREAKPOINTS_VALUES } from '../constants';

export const breakpoints = {
  md: `(min-width: ${BREAKPOINTS_VALUES.md}px)`,
  lg: `(min-width: ${BREAKPOINTS_VALUES.lg}px)`,
  xl: `(min-width: ${BREAKPOINTS_VALUES.xl}px)`,
};

export const Button = styled.a`
  padding: 0.8em 1.5em;
  border: 1.5px solid black;
  border-radius: 0.2em;
  background-color: #f1f2f2;
  color: #666;
  text-transform: uppercase;
`;
