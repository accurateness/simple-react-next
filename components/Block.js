// @flow
import * as React from 'react';
import { theme } from './theme';

type TextProps = {|
  bold?: boolean,
  children: any,
|};

class Block extends React.PureComponent<TextProps> {
  render() {
    return (
      <span>
        {this.props.children}
        <style jsx>
          {`
            span {
              color: #333;
              font-size: ${theme.fontSize}px;
              line-height: 24px;
            }
          `}
        </style>
        <style jsx>
          {`
            span {
              font-weight: ${this.props.bold ? 'bold' : 'normal'};
            }
          `}
        </style>
      </span>
    );
  }
}

export default Block;
