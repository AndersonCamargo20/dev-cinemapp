import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const InputContainer = styled.View`
  width: 100%;
  margin: 12px 0;
  border-width: 1;
  border-radius: 15px;
  border-color: ${({theme}) => theme.colors.border.main};
`;

const InputLabel = styled.Text`
  position: absolute;
  background: ${({theme}) => theme.colors.background.main};
  top: -12px;
  left: 10px;
  padding: 0 5px;
  color: ${(props) =>
    props.editable
      ? ({theme}) => theme.colors.primary.main
      : ({theme}) => theme.colors.light.dark};
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.semibold};
  ${(props) =>
    props.light &&
    css`
      background: ${({theme}) => theme.colors.primary.main};
      color: ${({theme}) => theme.colors.light.main};
      font-family: ${({theme}) => theme.fonts.semibold};
      font-size: 12px;
    `}
  ${(props) =>
    props.big &&
    css`
      color: ${({theme}) => theme.colors.primary.main};
    `}
`;

const inputStyle = `
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 4px 15px 0px 15px;
  font-size: 18px;
  line-height: 20px;
`;

const Input = styled.TextInput`
  ${inputStyle}
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.primary.dark};

  ${(props) =>
    props.editable === false &&
    css`
      color: ${({theme}) => theme.colors.light.dark};
    `}

  ${(props) =>
    props.valuestyle &&
    css`
      color: ${({theme}) => theme.colors.primary.main};
    `}

  ${(props) =>
    props.icon &&
    css`
      padding-right: 50px;
    `}
  ${(props) =>
    props.light &&
    css`
      color: ${({theme}) => theme.colors.light.main};
      border-color: ${({theme}) => theme.colors.light.main};
      font-family: ${({theme}) => theme.fonts.semibold};
      font-size: 14px;
    `}
  ${(props) =>
    props.big &&
    css`
      color: ${({theme}) => theme.colors.primary.dark};
      padding-top: 10px;
      font-size: 25px;
      font-family: ${({theme}) => theme.fonts.bold};
    `}
  ${(props) =>
    props.multiline &&
    css`
      height: auto;
      min-height: 120px;
      padding: 10px 15px;
    `}   
    ${(props) =>
    props.small &&
    css`
      font-size: 16px;
    `}
`;

const IconInput = styled(Icon)`
  color: ${({theme}) => theme.colors.light.dark};
  position: absolute;
  right: 0px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  top: 0px;
`;

const Helper = styled.Text`
  color: ${({theme}) => theme.colors.primary.main};
  font-family: ${({theme}) => theme.fonts.semibold};
  position: absolute;
  right: 15px;
  bottom: -12px;
  background: #fff;
  padding: 0 10px;
`;

export {Input, InputContainer, InputLabel, IconInput, Helper};
