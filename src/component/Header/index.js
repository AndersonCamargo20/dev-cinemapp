import React from 'react';
import PropTypes from 'prop-types';
import {StyledHeader, Title, Subtitle} from './style';

const Header = ({subtitle, title, center}) => {
  return (
    <StyledHeader>
      {subtitle && <Subtitle center={center}>{subtitle}</Subtitle>}
      <Title center={center} subtitle={subtitle}>
        {title}
      </Title>
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  title: 'Header',
  subtitle: null,
};

export default Header;
