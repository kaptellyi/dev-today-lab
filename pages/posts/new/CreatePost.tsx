import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { createPost } from '../action-creators';
import Post from '../../../UI/Post';
import * as Styled from './Styled';
import { Button } from '../../../styles/reusable';

const New: FC = () => {
  const { push } = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const validate = () => title.length !== 0 && body.length !== 0;

  const onTitleInput = (text: string) => setTitle(text.trim());
  const onBodyInput = (text: string) => setBody(text);

  const onSubmitPost = (e) => {
    e.preventDefault();
    onCreatePost();
  };
  const onCreatePost = () => {
    if (!validate()) {
      return setIsValid(false);
    }
    dispatch(
      createPost({
        title,
        body,
      })
    );
    return push(process.env.POSTS);
  };

  return (
    <Styled.Wrapper onSubmit={onSubmitPost}>
      {!isValid && (
        <Styled.InvalidMessage>
          fields should not be empty
        </Styled.InvalidMessage>
      )}
      <Post
        title=""
        body=""
        showCorner
        handleTitle={onTitleInput}
        handleBody={onBodyInput}
      />
      <Styled.ButtonGroup>
        <Link href={`${process.env.POSTS}`}>
          <Button>Cancel</Button>
        </Link>
        <Button onClick={onCreatePost}>Create</Button>
      </Styled.ButtonGroup>
    </Styled.Wrapper>
  );
};

export default New;
