import styled, {css} from 'styled-components/native';

const StyledItemList = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.border.main};
  padding: 10px;
  margin: 4px;
  align-items: center;
  ${(props) =>
    props.favorite &&
    css`
      background: #d7c8de;
      border: 1px solid #7c4993;
    `}
`;

const Row = styled.TouchableOpacity`
  flex: 1;
`;

const PosterArea = styled.TouchableOpacity``;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary.dark};
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.semibold};
`;

const TitleSecondary = styled.Text`
  color: ${({theme}) => theme.colors.light.dark};
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
  line-height: 14px;
  ${(props) =>
    props.canceled &&
    css`
      padding: 2px;
      border-radius: 6px;
      color: ${({theme}) => theme.colors.white.main};
      background-color: ${({theme}) => theme.colors.red.main};
      align-items: center;
    `}
`;

const Value = styled.Text`
  color: ${({theme}) => theme.colors.primary.main};
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.semibold};
`;

const ItemIcon = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 2px;
`;

export {
  StyledItemList,
  Row,
  Title,
  TitleSecondary,
  ItemIcon,
  Value,
  PosterArea,
};
