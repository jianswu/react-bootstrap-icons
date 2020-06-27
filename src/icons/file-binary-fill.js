import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileBinaryFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm-4.95 9.885c0 1.415-.548 2.206-1.524 2.206C4.548 13.09 4 12.3 4 10.885c0-1.412.548-2.203 1.526-2.203.976 0 1.524.79 1.524 2.203zM5.526 9.273c-.542 0-.832.563-.832 1.612 0 .088.003.173.006.252l1.56-1.143c-.126-.474-.375-.72-.733-.72zm-.732 2.508c.126.472.372.718.732.718.54 0 .83-.563.83-1.614 0-.085-.003-.17-.006-.25l-1.556 1.146zm6.061.624V13h-3v-.595h1.181V9.5h-.05l-1.136.747v-.688l1.19-.786h.69v3.633h1.125z"
      />
    </svg>
  );
});

FileBinaryFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileBinaryFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileBinaryFill;
