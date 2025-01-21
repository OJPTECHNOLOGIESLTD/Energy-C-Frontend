import * as React from "react";

function ArrowRight(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 14" fill="none" {...props}>
      <path
        d="M13 0l-1.41 1.41L16.17 6H0v2h16.17l-4.59 4.59L13 14l7-7-7-7z"
        fill="#1C1B1F"
      />
    </svg>
  );
}

const MemoArrowRight = React.memo(ArrowRight);
export default MemoArrowRight;
