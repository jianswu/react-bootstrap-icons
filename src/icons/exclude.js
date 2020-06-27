import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Exclude = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm12 2v7a1 1 0 0 1-1 1H4V5a1 1 0 0 1 1-1h7z"
      />
    </svg>
  );
});

Exclude.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Exclude.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Exclude;
