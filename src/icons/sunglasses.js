import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sunglasses = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M8 7a1 1 0 0 0-1 1H6a2 2 0 1 1 4 0H9a1 1 0 0 0-1-1zM0 8a.5.5 0 0 1 .5-.5h1v1h-1A.5.5 0 0 1 0 8zm15.5.5h-1v-1h1a.5.5 0 0 1 0 1z"
      />
      <path
        fillRule="evenodd"
        d="M3 5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2H3zm0 1a1 1 0 0 0-1 1v.941c0 .264.356.348.474.112l.228-.457a2 2 0 0 1 .894-.894l.457-.228C4.289 6.356 4.205 6 3.94 6H3z"
      />
      <path
        fillRule="evenodd"
        d="M2.023 6.784C2.008 6.854 2 6.926 2 7v.941c0 .264.356.348.474.112l.228-.457a2 2 0 0 1 .894-.894l.457-.228C4.289 6.356 4.205 6 3.94 6H3a1.001 1.001 0 0 0-.977.784zm3.146-.77A1.219 1.219 0 0 1 4.5 7.368l-.457.228a1 1 0 0 0-.447.447l-.228.457a1.22 1.22 0 0 1-1.354.669A1 1 0 0 0 3 10h1a2 2 0 0 0 2-2V7a1 1 0 0 0-.831-.986zM1 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3H3a2 2 0 0 1-2-2V7z"
      />
      <path d="M9 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1a3 3 0 0 1-3-3V7z" />
      <path
        fillRule="evenodd"
        d="M13 6h-2a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-2-1a2 2 0 0 0-2 2v1a3 3 0 0 0 3 3h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2z"
      />
    </svg>
  );
});

Sunglasses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sunglasses.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Sunglasses;
