import * as React from "react";

function Location(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 21" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0C3.13 0 0 3.27 0 7.313c0 5.485 7 13.582 7 13.582s7-8.097 7-13.582C14 3.27 10.87 0 7 0zm0 9.925c-1.38 0-2.5-1.17-2.5-2.612 0-1.442 1.12-2.612 2.5-2.612s2.5 1.17 2.5 2.612c0 1.442-1.12 2.612-2.5 2.612z"
        fill="#020202"
      />
    </svg>
  );
}

const MemoLocation = React.memo(Location);
export default MemoLocation;
