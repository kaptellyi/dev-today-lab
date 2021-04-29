import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostI } from './types';
import Post from './Post';
import { get24hTimestamp } from '../../helpers';
import instance from '../../api/axios';

export default (post: PostI) => (
  <Post
    {...post}
    comments={post.comments ? post.comments.filter((c) => c.body) : []}
  />
);

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await instance.get('/posts');
  const posts = (await response.data) as PostI[];

  // 8 is a middle value of loaded posts
  const paths = posts.slice(0, 8).map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await instance.get(`/posts/${params.id}?_embed=comments`);
  const post = await response.data;

  return {
    props: post,
    revalidate: get24hTimestamp(),
  };
};
