import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Button } from '../../styles/reusable';
import * as Styled from './Styled';

interface Props {
  title?: string;
  keywords?: string;
  description?: string;
}

const index: FC<Props> = ({
  title = 'Posts',
  keywords,
  description,
  children,
}) => {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        {keywords && <meta name="keywords" content={keywords} />}
        {description && <meta name="description" content={description} />}
        <title>{`DevToday - ${title}`}</title>
      </Head>
      <Styled.Navigation>
        <Styled.NavLogo>DevToday</Styled.NavLogo>
        <Styled.NavLinks>
          <Link href={process.env.POSTS}>
            <Styled.NavLink active={pathname === process.env.POSTS}>
              Home
            </Styled.NavLink>
          </Link>
          <Link href={process.env.POSTS_NEW}>
            <Styled.NavLink active={pathname === process.env.POSTS_NEW}>
              New Post
            </Styled.NavLink>
          </Link>
        </Styled.NavLinks>
      </Styled.Navigation>
      {children}
    </>
  );
};

export default index;
