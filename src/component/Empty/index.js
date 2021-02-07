import React from 'react';
import PropTypes from 'prop-types';
import {Container, Title, Message, Thumb} from './style';

const Empty = ({title, message}) => {
  return (
    <Container>
      <Thumb source={require('../../assets/img/empty.png')} />
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Container>
  );
};

Empty.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

Empty.defaultProps = {
  title: 'Lista Vazia!',
  message: 'Não foi encontrado nenhum registro!',
};

export default Empty;
