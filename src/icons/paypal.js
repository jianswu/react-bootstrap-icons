import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Paypal = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061zM6.543 8.82l-.845 5.213v.001l-.208 1.32c-.01.066.04.123.105.123H8.14c.173 0 .32-.125.348-.296v-.005l.026-.129.48-3.043.03-.164a.873.873 0 0 1 .862-.734h.38c1.201 0 2.24-.244 3.043-.815.797-.567 1.39-1.477 1.663-2.874.229-1.175.096-2.087-.45-2.71a2.126 2.126 0 0 0-.548-.438l-.003.016c-.645 3.312-2.853 4.456-5.672 4.456H6.864a.695.695 0 0 0-.321.079z"
      />
    </svg>
  );
});

Paypal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Paypal.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Paypal;