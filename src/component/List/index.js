import React from 'react';
import {
  Row,
  StyledItemList,
  Title,
  TitleSecondary,
  Value,
  ItemIcon,
  PosterArea,
} from './style';
import {normalizeType} from '../../utils/format';

export const ListMovies = ({
  favorite,
  title,
  value,
  onRowPress,
  type,
  poster,
}) => {
  return (
    <StyledItemList favorite={favorite} onPress={onRowPress}>
      <Row onPress={onRowPress}>
        <Title>{title}</Title>
        {type && <TitleSecondary>{normalizeType(type)}</TitleSecondary>}
        {value && <Value>{value}</Value>}
      </Row>
      {poster && poster !== 'N/A' && (
        <PosterArea onPress={onRowPress}>
          <ItemIcon source={{uri: poster}} resizeMode="contain" />
        </PosterArea>
      )}
    </StyledItemList>
  );
};

export default ListMovies;
