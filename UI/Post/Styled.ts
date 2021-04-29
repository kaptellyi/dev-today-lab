import styled from 'styled-components';

export const Wrapper = styled.article`
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 1em;
  box-shadow: 11px 26px 14px -14px rgba(0, 0, 0, 0.1);
  position: relative;

  &:hover .post__corner {
    display: block;
  }
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const PostCorner = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 2em;
  height: 2em;
  background-color: #e6e7e8;
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  div {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 2em 2em 0;
    border-color: transparent #f1f2f2 transparent transparent;
  }
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
`;

export const TitleInput = styled.input.attrs({
  maxLength: 54,
})`
  text-align: center;
  width: 86%;

  &::placeholder {
    color: #ccc;
  }
`;

export const Divider = styled.hr`
  width: 86%;
  margin: 0.6em 0 0.6em 0;
  border-top: #666;
`;

export const Body = styled.p`
  color: #666;
  font-weight: 200;
`;

export const BodyTextArea = styled.textarea`
  height: 100%;
  width: 100%;

  &::placeholder {
    color: #ccc;
  }
`;
