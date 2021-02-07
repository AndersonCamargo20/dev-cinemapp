import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledHeader = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.light.main};
  height: 70px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 15px 15px 20px;
`;

const Title = styled.Text`
  font-size: 22px;
  color: ${({theme}) => theme.colors.primary.dark};
  margin-left: ${(props) => (props.center && props.back ? -20 : 0)}px;
  font-family: ${({theme}) => theme.fonts.semibold};
  ${(props) =>
    props.center &&
    css`
      text-align: center;
      width: 100%;
    `}
`;

const Subtitle = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.light.dark};
  font-family: ${({theme}) => theme.fonts.medium};
  position: absolute;
  left: 20px;
  bottom: 0px;
  ${(props) =>
    props.center &&
    css`
      text-align: center;
      left: 0;
      right: 0;
    `}
  ${(props) =>
    props.back &&
    css`
      left: 45px;
      margin-left: -15px;
    `}
`;

export {StyledHeader, Title, Subtitle};
