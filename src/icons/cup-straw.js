import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CupStraw = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4.497 5.942l.959 8.155c.014.118.06.181.101.21C5.912 14.555 6.724 15 8 15s2.088-.445 2.443-.693c.04-.029.087-.092.101-.21l.96-8.155.993.116-.96 8.156a1.279 1.279 0 0 1-.52.912C10.53 15.466 9.522 16 8 16s-2.531-.534-3.016-.874a1.279 1.279 0 0 1-.521-.912l-.96-8.156.994-.116z"
      />
      <path
        fillRule="evenodd"
        d="M4.467 6.116l.005-.006a.024.024 0 0 1-.005.006zM4.645 6c.146-.073.362-.15.648-.222C5.967 5.61 6.924 5.5 8 5.5c1.076 0 2.033.11 2.707.278.286.072.502.149.648.222-.146.073-.362.15-.648.222C10.033 6.39 9.076 6.5 8 6.5c-1.076 0-2.033-.11-2.707-.278A3.284 3.284 0 0 1 4.645 6zm6.888.116s-.003-.002-.005-.006l.005.006zm-.005-.226a.026.026 0 0 1 .005-.006l-.005.006zm-7.056 0l-.005-.006s.003.002.005.006zm.578-1.082C5.824 4.614 6.867 4.5 8 4.5c1.133 0 2.176.114 2.95.308.383.096.728.218.99.372.228.135.56.396.56.82 0 .424-.332.685-.56.82-.262.154-.607.276-.99.372-.774.194-1.817.308-2.95.308-1.133 0-2.176-.114-2.95-.308-.383-.096-.728-.218-.99-.372-.228-.135-.56-.396-.56-.82 0-.424.332-.685.56-.82.262-.154.607-.276.99-.372z"
      />
      <path
        fillRule="evenodd"
        d="M12.964 1.314a.5.5 0 0 1-.278.65l-2.255.902-.943 4.242-.976-.216 1-4.5a.5.5 0 0 1 .302-.356l2.5-1a.5.5 0 0 1 .65.278z"
      />
    </svg>
  );
});

CupStraw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CupStraw.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default CupStraw;
