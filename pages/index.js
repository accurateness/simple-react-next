// @flow
import * as React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';

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
        <Text>{this.props.now}</Text>
        <Text bold>222</Text>
      </Page>
    );
  }
}

export default Index;
