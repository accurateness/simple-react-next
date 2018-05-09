// @flow
import * as React from 'react';
import Page from '../components/Page';

type IndexProps = {|
  now: number,
|};

type options = 1 | 2 | 3;

const a: 1 = 1;

class Index extends React.Component<IndexProps> {
  static getInitialProps() {
    return { now: Date.now() };
  }

  render() {
    return (
      <Page>
        <div>Welcome {this.props.now}</div>
      </Page>
    );
  }
}

export default Index;
