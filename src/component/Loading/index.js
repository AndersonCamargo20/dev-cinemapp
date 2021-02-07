import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Title, SubTitle} from './style';

const Loading = ({title, size, color, subTitle, dark, list}) => {
  return (
    <Container dark={dark} list={list}>
      <ActivityIndicator size={size} color={color} />
      <Title dark={dark} list={list}>
        {title}
      </Title>
      {!!subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
};

Loading.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  subTitle: PropTypes.string,
  dark: PropTypes.bool,
  list: PropTypes.bool,
};

Loading.defaultProps = {
  title: 'Carregando...',
  size: 50,
  color: '#7A30A9',
  subTitle: '',
  dark: false,
  list: false,
};

export default Loading;
