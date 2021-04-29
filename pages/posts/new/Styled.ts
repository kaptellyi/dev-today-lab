import styled from 'styled-components';
import { breakpoints } from '../../../styles/reusable';

export const Wrapper = styled.form`
  position: absolute;
  height: 80%;
  width: 96%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.md} {
    width: 60%;
  }

  @media ${breakpoints.lg} {
    width: 36%;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 2.5em;
  a + a {
    margin-left: 1.5em;
  }
`;

export const InvalidMessage = styled.p`
  color: crimson;
  margin-bottom: 0.4em;
`;
