import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Posts from '../components/Posts';
import { get24hTimestamp } from '../helpers';
import { PostI } from '../components/Posts/types';
import instance from '../api/axios';

export default ({ posts }) => {
  return (
    <>
      <Head>
        <title>Dev-Today</title>
      </Head>

      <Posts serverPosts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await instance.get('/posts');
  const posts = (await response.data) as PostI[];

  return {
    props: {
      posts: posts.filter(({ body }) => body),
    },
    // revalidate once in 24 hours
    revalidate: get24hTimestamp(),
  };
};
