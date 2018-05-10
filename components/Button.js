// @flow
import * as React from 'react';

type ButtonProps = {
  onPress: () => void,
  children: string,
};

class Button extends React.PureComponent<ButtonProps> {
  handleClick = () => {
    alert('hofo');
  };

  handleKeyPress = () => {
    alert('dsfsd');
  };

  render() {
    return (
      <div
        role="button"
        tabindex="0"
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Button;
