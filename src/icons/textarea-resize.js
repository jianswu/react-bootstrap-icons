import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TextareaResize = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M0 3.5A2.5 2.5 0 0 1 2.5 1h11A2.5 2.5 0 0 1 16 3.5v8.854a2.5 2.5 0 0 1-2.5 2.5h-11a2.5 2.5 0 0 1-2.5-2.5V3.5zM2.5 2A1.5 1.5 0 0 0 1 3.5v8.854a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V3.5A1.5 1.5 0 0 0 13.5 2h-11zm10.854 6.5a.5.5 0 0 1 0 .707l-3 3a.5.5 0 1 1-.708-.707l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .707l-.5.5a.5.5 0 0 1-.708-.707l.5-.5a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
});

TextareaResize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextareaResize.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TextareaResize;