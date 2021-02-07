import styled, {css} from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  padding: 20px 20px 0 20px;
`;

const Message = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.light.dark};
  font-size: 13px;
  text-align: center;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 1px 4px 0 4px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary.main};
  font-family: ${({theme}) => theme.fonts.semibold};
  font-size: 18px;
  margin-bottom: 10px;
`;

const Bigtitle = styled(Title)`
  color: ${({theme}) => theme.colors.primary.dark};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
  margin-bottom: -20px;
  line-height: 24px;
  margin-bottom: 4px;
`;

const Divider = styled.View`
  border-top-width: 1px;
  border-color: ${({theme}) => theme.colors.border.main};
  padding-top: 4px;
`;

const TextRow = styled.Text`
  color: ${({theme}) => theme.colors.light.dark};
  font-family: ${({theme}) => theme.fonts.medium};
  ${(props) =>
    props.canceled &&
    `
      border-radius: 6px;
      color: ${({theme}) => theme.colors.white.main};
      background-color: ${({theme}) => theme.colors.red.main};
      align-items: center;
    `}
`;

const FooterButtonDouble = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;
const FooterButton = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 2px;
`;

const Footer = styled.View`
  padding: 2px;
  flex-direction: row;
`;

export {
  Container,
  Content,
  Message,
  Row,
  Bigtitle,
  Divider,
  TextRow,
  FooterButton,
  FooterButtonDouble,
  Footer,
};
