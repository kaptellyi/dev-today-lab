import Head from 'next/head';
import React, { FC } from 'react';

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
  return (
    <>
      <Head>
        {keywords && <meta name="keywords" content={keywords} />}
        {description && <meta name="description" content={description} />}
        <title>{`DevToday - ${title}`}</title>
      </Head>
      {children}
    </>
  );
};

export default index;
