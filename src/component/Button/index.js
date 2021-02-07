import React from 'react';
import PropTypes from 'prop-types';
import {Keyboard} from 'react-native';
import {
  StyledButton,
  Text,
  ButtonContainer as BtContainer,
  Load,
  LoadIcon,
} from './style';

const ButtonContainer = ({children}) => {
  return <BtContainer>{children}</BtContainer>;
};

const Button = ({
  secondary,
  onPress,
  title,
  children,
  light,
  disabled,
  loading,
  renderChild,
  marginLeft,
}) => {
  return (
    <StyledButton
      light={light}
      marginLeft={marginLeft}
      disabled={disabled || loading}
      onPress={() => {
        Keyboard.dismiss();
        onPress();
      }}
      secondary={secondary}>
      {loading || (
        <Text secondary={secondary} light={light}>
          {title || children}
        </Text>
      )}
      {renderChild}
      {loading && (
        <Load>
          <LoadIcon size={30} color={light ? '#FFF' : '#7A30A9'} />
        </Load>
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  secondary: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  light: PropTypes.bool,
  disabled: PropTypes.bool,
  renderChild: PropTypes.node,
};

Button.defaultProps = {
  secondary: false,
  onPress: null,
  title: null,
  children: null,
  light: false,
  disabled: false,
  renderChild: null,
};

export default Button;
export {ButtonContainer};
