import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { definePaginateIndex, debounce } from '../../helpers';
import { useTypedSelector } from '../../hooks';
import Error from '../UI/Error';
import Post from '../UI/Post';
import { paginateAction, setPosts } from './action-creators';
import * as Styled from './Styled';
import { PostI } from './types';
import Layout from '../Layout';

interface Props {
  serverPosts: PostI[];
}

const Posts: FC<Props> = ({ serverPosts }) => {
  const { push } = useRouter();
  const scrollRef = useRef<HTMLDivElement>();
  const { posts, error } = useTypedSelector((store) => store.posts);
  const dispatch = useDispatch();

  const setPaginatedPosts = () =>
    dispatch(setPosts(serverPosts.slice(0, definePaginateIndex())));

  const paginate = () => {
    // add _x_ number of posts depending on user's device screen
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      dispatch(paginateAction(serverPosts));
    }
  };

  const onPostRedirect = (id: number) => push(`${process.env.POST}/${id}`);

  useEffect(() => {
    // go with redux management if set
    if (!posts.length) setPaginatedPosts();

    window.onscroll = debounce(paginate, 250);

    return () => {
      window.onscroll = null;
    };
  }, []);

  if (error) return <Error />;
  return (
    <Layout
      keywords="dev, it, programming, react, frontend, backend, java, python"
      description="dev-today posts about modern life "
    >
      <Styled.Wrapper ref={scrollRef}>
        <Styled.Posts>
          {posts.map(({ title, body, id }) => (
            <Styled.ViewPost key={id} onClick={() => onPostRedirect(id)}>
              <Post title={title} body={body} showCorner={false} />
            </Styled.ViewPost>
          ))}
        </Styled.Posts>
      </Styled.Wrapper>
      <Link href={process.env.POSTS_NEW}>
        <Styled.CreateButton>create post</Styled.CreateButton>
      </Link>
    </Layout>
  );
};

export default Posts;
