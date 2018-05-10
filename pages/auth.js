// @flow
import * as React from 'react';
import Block from '../components/Block';
import Text from '../components/Text';
import Page from '../components/Page';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

class Auth extends React.PureComponent<{}> {
  submitForm = () => {
    alert({this.state});
  };

  render() {
    return (
      <Page title="AboutTitle">
        <Block>
          <form>
            <TextInput name="email" type="text" label="Email" />
            <TextInput name="password" type="password" label="Password" />
            <Button onPress={this.submitForm}>Submit</Button>
          </form>
        </Block>
      </Page>
    );
  }
}

export default Auth;
