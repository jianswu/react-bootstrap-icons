import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SuitDiamondFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M2.45 7.4L7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
    </svg>
  );
});

SuitDiamondFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SuitDiamondFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default SuitDiamondFill;
