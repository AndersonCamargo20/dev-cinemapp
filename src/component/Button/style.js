import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary.main};
  height: 60px;
  border-radius: 15px;
  margin: 5px 0;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.margin &&
    css`
      width: auto;
      margin-left: 20px;
      margin-right: 20px;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: transparent;
      border: solid 1px ${({theme}) => theme.colors.primary.main};
    `}
  ${(props) =>
    props.light &&
    css`
      background-color: ${({theme}) => theme.colors.light.main};
      border: solid 1px ${({theme}) => theme.colors.light.main};
    `}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

const Text = styled.Text`
  color: ${({theme}) => theme.colors.light.main};
  line-height: 20px;
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.semibold};
  ${(props) =>
    props.secondary &&
    css`
      color: ${({theme}) => theme.colors.primary.main};
    `}
  ${(props) =>
    props.wizard &&
    css`
      color: white;
    `}
  ${(props) =>
    props.light &&
    css`
      color: ${({theme}) => theme.colors.primary.main};
    `}
`;

const ButtonContainer = styled.View`
  padding: 20px;
  align-items: center;
  background: #fff;
`;

const Load = styled.View`
  position: absolute;
`;

const LoadIcon = styled.ActivityIndicator``;

export {StyledButton, Text, ButtonContainer, Load, LoadIcon};
