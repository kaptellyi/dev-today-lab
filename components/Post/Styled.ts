import styled from 'styled-components';
import { Button } from '../../styles/reusable';

export const PostWrapper = styled.div`
  height: 60vh;
  width: 100vw;
  display: grid;
  place-items: center;
  margin-top: 2em;
`;

export const PostInner = styled.div`
  width: 80%;
  height: 100%;
`;

export const Comments = styled.section`
  width: 100vw;
  background-color: white;
  margin-top: 2em;
  border-bottom: 2px solid ${({ theme }) => theme.palette.lightGray};
  box-shadow: 11px 26px 20px -14px rgba(0, 0, 0, 0.1);
`;

export const CommentsHeader = styled.section`
  width: 100%;
  padding: 1em 0em 0.4em 1em;
  border: 2px solid ${({ theme }) => theme.palette.lightGray};

  textarea:focus ~ a {
    visibility: visible;
  }
`;

export const CommentWrite = styled.textarea<{ showFull: boolean }>`
  width: 80%;
  min-height: ${({ showFull }) => (showFull ? '8em' : '5em')};
  margin-top: 1em;

  &::placeholder {
    color: ${({ theme }) => theme.palette.lightGray};
  }

  &:focus {
    min-height: 8em;
  }
`;

export const ConfirmButton = styled(Button)<{ disable: boolean }>`
  display: inline-block;
  visibility: ${({ disable }) => (disable ? 'hidden' : 'visible')};
  cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
`;

export const Comment = styled.p`
  color: ${({ theme }) => theme.palette.darkGray};
  font-weight: 200;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGray};
  padding: 0.5em 2em;
`;
