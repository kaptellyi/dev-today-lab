import Link from 'next/link';
import styled from 'styled-components';
import { breakpoints, Button } from '../../styles/reusable';

export const Wrapper = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
`;

export const Posts = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;

  @media ${breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ViewPost = styled.div`
  display: inline-block;
  height: 25vh;
  text-align: center;
  cursor: pointer;
`;

export const CreateButton = styled(Button)`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;
