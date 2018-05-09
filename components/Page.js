import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type PageProps = {
  children: React.Node,
  title: string,
};

const AppHead = {};

const MainNav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      |
      <Link href="/about">
        <a>About</a>
      </Link>{' '}
      |
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

const footer = () => {
  <footer>{'I`m here to stay'}</footer>;
};

const Page = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainNav />
    <header />

    {children}
  </div>
);

export default Page;
