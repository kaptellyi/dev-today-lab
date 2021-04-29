import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import * as Styled from './Styled';
import Post from '../../../UI/Post';
import { PostI } from '../types';
import Loading from '../../../UI/Loading';
import { useTypedSelector } from '../../../hooks';
import { setComments, createComment } from './action-creators';
import Error from '../../../UI/Error';
import Layout from '../../../components/Layout';

const ViewPost: FC<PostI> = (post) => {
  const { isFallback } = useRouter();
  const { comments, loading, error } = useTypedSelector(
    (state) => state.comments
  );
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setComments(post.comments));
  }, []);

  const onPostComment = () => {
    const newComment = { postId: post.id, body: comment };
    dispatch(createComment(newComment));
    setComment('');
  };

  if (isFallback) return <Loading />;
  return (
    <Layout title={post.title}>
      <Styled.PostWrapper>
        <Styled.PostInner>
          <Post title={post.title} body={post.body} showCorner />
        </Styled.PostInner>
      </Styled.PostWrapper>
      <Styled.Comments>
        <Styled.CommentsHeader>
          <h2>Comments: {comments.length}</h2>
          {loading && <Loading />}
          {error && <Error />}
          <Styled.CommentWrite
            placeholder="Write your thoughts..."
            value={comment}
            showFull={!!comment.length}
            onChange={(e) => setComment(e.target.value)}
          />
          <Styled.ConfirmButton
            disable={!comment.length || loading}
            onClick={onPostComment}
          >
            Post
          </Styled.ConfirmButton>
        </Styled.CommentsHeader>
        {comments.map(({ body, id }) => (
          <Styled.Comment key={id}>{body}</Styled.Comment>
        ))}
      </Styled.Comments>
    </Layout>
  );
};

export default ViewPost;
