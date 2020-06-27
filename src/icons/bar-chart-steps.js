import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BarChartSteps = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0z"
      />
      <rect width="5" height="2" x="2" y="1" rx=".5" />
      <rect width="8" height="2" x="4" y="5" rx=".5" />
      <path d="M6 9.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z" />
    </svg>
  );
});

BarChartSteps.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarChartSteps.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BarChartSteps;
