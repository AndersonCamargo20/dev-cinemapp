import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.light.main};
  padding: 0 40px;
`;

const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semibold};
  color: ${({theme}) => theme.colors.primary.dark};
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

const Message = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.light.dark};
  font-size: 13px;
  text-align: center;
`;

const Thumb = styled.Image`
  width: 70px;
  height: 70px;
  margin-bottom: 40px;
`;

export {Container, Title, Message, Thumb};
