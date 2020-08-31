import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EaselFill = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M8.473.337a.5.5 0 0 0-.946 0L6.954 2h2.092L8.473.337zM12.15 11h-1.058l1.435 4.163a.5.5 0 0 0 .946-.326L12.15 11zM8.5 11h-1v2.5a.5.5 0 0 0 1 0V11zm-3.592 0H3.85l-1.323 3.837a.5.5 0 1 0 .946.326L4.908 11zM1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3z" />
    </svg>
  );
});

EaselFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EaselFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default EaselFill;