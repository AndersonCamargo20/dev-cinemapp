import styled, {css} from 'styled-components/native';

const Title = styled.Text`
  font-size: ${props => (props.dark ? 30 : 20)}px;
  color: ${props =>
    props.dark
      ? ({theme}) => theme.colors.light.main
      : ({theme}) => theme.colors.primary.dark};
  font-family: ${({theme}) => theme.fonts.medium};
  text-align: center;
  margin-top: 25px;
  ${props =>
    props.list &&
    css`
      margin-top: 0px;
      margin-left: 15px;
    `}
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.light.main};
  font-family: ${({theme}) => theme.fonts.regular};
  text-align: center;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.dark
      ? ({theme}) => theme.colors.primary.main
      : ({theme}) => theme.colors.background.main};
  ${props =>
    props.list &&
    css`
      flex-direction: row;
    `}
`;

export {Container, Title, SubTitle};
