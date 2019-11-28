import React from 'react';
import PropTypes from 'prop-types';

const TrashFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M15 6H5v8.5c0 .634.164 1.23.456 1.685.288.448.747.815 1.33.815h6.428c.583 0 1.042-.367 1.33-.815.292-.454.456-1.051.456-1.685V6zM8 7.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm2-.5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 0110 7zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
        clipRule="evenodd"
      />
      <path d="M3.5 4a1 1 0 011-1h11a1 1 0 011 1v1a1 1 0 01-1 1h-11a1 1 0 01-1-1V4z" />
      <path d="M8 3a1 1 0 011-1h2a1 1 0 011 1v1H8V3z" />
    </svg>
  );
};

TrashFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TrashFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TrashFill;