import React, { FC, useState } from 'react';
import * as Styled from './Styled';

interface Props {
  title: string;
  body: string;
  showCorner: boolean;
  handleTitle?: (text: string) => void;
  handleBody?: (text: string) => void;
}

const Post: FC<Props> = ({
  title,
  body,
  showCorner,
  handleTitle,
  handleBody,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Inner>
        <Styled.PostCorner className="post__corner" visible={showCorner}>
          <div className="triangle" />
        </Styled.PostCorner>
        {handleTitle ? (
          <Styled.TitleInput
            placeholder="title"
            onChange={(e) => handleTitle(e.target.value)}
          />
        ) : (
          <header>
            <Styled.Title>{title}</Styled.Title>
          </header>
        )}
        <Styled.Divider />
        {handleBody ? (
          <Styled.BodyTextArea
            placeholder="what do you want to tell us?"
            onChange={(e) => handleBody(e.target.value)}
          />
        ) : (
          <Styled.Body>{body}</Styled.Body>
        )}
      </Styled.Inner>
    </Styled.Wrapper>
  );
};

export default Post;
