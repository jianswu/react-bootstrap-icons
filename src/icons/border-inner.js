import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BorderInner = forwardRef(({
  color, size, title, ...rest
}, ref) => {
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
      {title ? <title>{title}</title> : null}

      <path d="M.969 0H0v.969h.5V1h.469V.969H1V.5H.969V0zm.937 1h.938V0h-.938v1zm1.875 0h.938V0H3.78v1zm1.875 0h.938V0h-.938v1z" />
      <path d="M8.5 7.5H16v1H8.5V16h-1V8.5H0v-1h7.5V0h1v7.5z" />
      <path d="M9.406 1h.938V0h-.938v1zm1.875 0h.938V0h-.938v1zm1.875 0h.938V0h-.938v1zm1.875 0h.469V.969h.5V0h-.969v.5H15v.469h.031V1zM1 2.844v-.938H0v.938h1zm14-.938v.938h1v-.938h-1zM1 4.719V3.78H0v.938h1zm14-.938v.938h1V3.78h-1zM1 6.594v-.938H0v.938h1zm14-.938v.938h1v-.938h-1zM0 9.406v.938h1v-.938H0zm16 .938v-.938h-1v.938h1zm-16 .937v.938h1v-.938H0zm16 .938v-.938h-1v.938h1zm-16 .937v.938h1v-.938H0zm16 .938v-.938h-1v.938h1zM0 16h.969v-.5H1v-.469H.969V15H.5v.031H0V16zm1.906 0h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm3.75 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875-.5v.5H16v-.969h-.5V15h-.469v.031H15v.469h.031z" />
    </svg>
  );
});

BorderInner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

BorderInner.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default BorderInner;
