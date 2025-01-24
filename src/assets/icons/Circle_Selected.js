import * as React from "react";

function Circle_Selected(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M9 .667A8.336 8.336 0 00.667 9c0 4.6 3.733 8.333 8.333 8.333S17.333 13.6 17.333 9 13.6.667 9 .667zm0 15A6.665 6.665 0 012.333 9 6.665 6.665 0 019 2.333 6.665 6.665 0 0115.667 9 6.665 6.665 0 019 15.667z"
        fill="#fff"
      />
      <path
        d="M9 13.167a4.167 4.167 0 100-8.334 4.167 4.167 0 000 8.334z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoCircle_Selected = React.memo(Circle_Selected);
export default MemoCircle_Selected;
