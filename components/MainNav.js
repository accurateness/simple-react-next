// @flow
import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Text from './Text';
import { withRouter } from 'next/router';

type MainNavProps = {|
  router: {
    pathname: string,
  },
|};

const MainNavLink = withRouter(({ href, children, current }) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
));

export class MainNav extends React.PureComponent<MainNavProps> {
  render() {
    console.log(this.props.router.pathname);
    return (
      <nav>
        <MainNavLink href="/">
          <a>Home</a>
        </MainNavLink>{' '}
        {'|'}
        <MainNavLink href="/about">
          <a>About</a>
        </MainNavLink>{' '}
        |
        <MainNavLink href="/auth">
          <a>Auth</a>
        </MainNavLink>
        <style jsx global>
          {`
            a {
              text-decoration: none;
            }
          `}
        </style>
      </nav>
    );
  }
}
export default withRouter(MainNav);
