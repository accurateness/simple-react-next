// @flow
import * as React from 'react';
import Page from '../components/Page';
import Block from '../components/Block';
type options = 1 | 2 | 3;

const a: 1 = 1;

const title = 'About';

class About extends React.Component<{}> {
  static getInitialProps() {
    return { now: Date.now() };
  }

  render() {
    return (
      <Page title="About us">
        <Block>
          <div> About </div>
        </Block>
      </Page>
    );
  }
}

export default About;
