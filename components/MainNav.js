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
export class MainNav extends React.PureComponent<MainNavProps> {
  render() {
    console.log(this.props.router.pathname);
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
        <Link href="/auth">
          <a>Auth</a>
        </Link>
      </nav>
    );
  }
}
export default withRouter(MainNav);
