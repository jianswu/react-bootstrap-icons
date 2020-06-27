import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Server = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path d="M3 4h10v8H3V4z" />
      <ellipse cx="8" cy="12" rx="5" ry="2" />
      <path d="M13 4c0 1.105-2.239 2-5 2s-5-.895-5-2 2.239-2 5-2 5 .895 5 2z" />
      <path d="M11.907 7.343C10.857 7.763 9.475 8 8 8s-2.857-.237-3.907-.657A4.881 4.881 0 0 1 3 6.75V5c0 1.105 2.239 2 5 2s5-.895 5-2v1.75c-.322.24-.698.435-1.093.593zm0 4C10.857 11.763 9.475 12 8 12s-2.857-.237-3.907-.657A4.883 4.883 0 0 1 3 10.75V9c0 1.105 2.239 2 5 2s5-.895 5-2v1.75c-.322.24-.698.435-1.093.593z" />
    </svg>
  );
});

Server.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Server.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Server;
