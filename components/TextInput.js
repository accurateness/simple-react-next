// @flow
import * as React from 'react';
import Block from '../components/Block';
import Text from '../components/Text';
import Page from '../components/Page';
import { theme } from './theme';

type TextInputProps = {
  name?: string,
  type?: 'text' | 'password',
  label: string,
};

class TextInput extends React.PureComponent<TextInputProps> {
  render() {
    const { label, type = 'text', name } = this.props;
    return (
      <span>
        <label>
          <Text>{label}: </Text>
          <input name={name} type={type} />
        </label>
        <style jsx>
          {`
            label {
              display: block;
            }
            font-family: ${theme.fontFamily};
          `}
        </style>
      </span>
    );
  }
}

export default TextInput;
