// @flow
import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { theme } from './theme';
import MainNav from './MainNav';

type PageProps = {
  children: React.Node,
  title: string,
};

const AppHead = {};

const Footer = () => {
  return <footer>{'I`m here to stay'}</footer>;
};

const Page = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainNav />
    {children}
  </div>
);

export default Page;
