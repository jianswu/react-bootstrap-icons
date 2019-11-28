import React from 'react';
import PropTypes from 'prop-types';

const VolumeUp = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M8.717 5.55A.5.5 0 019 6v8a.5.5 0 01-.812.39L5.825 12.5H3.5A.5.5 0 013 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM8 7.04L6.312 8.39A.5.5 0 016 8.5H4v3h2a.5.5 0 01.312.11L8 12.96V7.04zm5.642-1.69L14 5l.358-.35.001.002.002.002.006.007.021.022a6.623 6.623 0 01.317.374c.2.254.465.623.73 1.089.527.93 1.065 2.265 1.065 3.854 0 1.59-.538 2.925-1.065 3.854a8.77 8.77 0 01-.73 1.09 6.69 6.69 0 01-.317.373l-.02.022-.007.007-.002.002S14.357 15.35 14 15l-.358-.35.002-.001.013-.014.055-.06c.049-.055.12-.14.208-.25.175-.222.41-.55.645-.965.473-.832.935-1.996.935-3.36 0-1.363-.462-2.528-.935-3.36a7.773 7.773 0 00-.645-.965 5.653 5.653 0 00-.263-.31l-.013-.014-.002-.002zm-2.03.965L12 6l.388-.315.002.003.005.005.016.02.053.07a8.772 8.772 0 01.73 1.18C13.59 7.73 14 8.812 14 10s-.411 2.27-.805 3.037a8.764 8.764 0 01-.73 1.18l-.054.07-.016.02-.005.005-.001.002v.001L12 14l-.388-.315.002-.002.01-.012a4.002 4.002 0 00.197-.274 7.79 7.79 0 00.484-.817c.356-.693.695-1.612.695-2.58s-.339-1.887-.695-2.58a7.794 7.794 0 00-.64-1.036 3.419 3.419 0 00-.042-.055l-.01-.012-.001-.002zm-2.028.962L10 7l.416-.277.002.002.003.005.01.016a4.871 4.871 0 01.16.264c.1.175.233.425.366.724.262.59.543 1.415.543 2.266 0 .85-.28 1.675-.543 2.266a8.158 8.158 0 01-.526.988l-.01.016-.003.005-.001.001s-.001.001-.417-.276l-.416-.277v-.002l.007-.01.027-.043a7.133 7.133 0 00.425-.81c.238-.533.457-1.209.457-1.858 0-.65-.22-1.325-.457-1.86a7.134 7.134 0 00-.452-.852l-.006-.01h-.001z"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VolumeUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default VolumeUp;