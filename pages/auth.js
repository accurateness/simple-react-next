// @flow
import * as React from 'react';
import Block from '../components/Block';
import Text from '../components/Text';
import Page from '../components/Page';

class Auth extends React.Component<{}> {
  render() {
    return (
      <Page title="AboutTitle">
        <Block>
          <form>
            <input name="email" type="text" />
            <input name="password" type="password" />
          </form>
        </Block>
      </Page>
    );
  }
}

export default Auth;
