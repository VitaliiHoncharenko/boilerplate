import React from 'react';
import PropTypes from 'prop-types';

import { header } from './header.scss';

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export function Header({ title }) {
  return (
    <div className={header}>
      <h1>
        {title}
      </h1>
    </div>
  );
}
