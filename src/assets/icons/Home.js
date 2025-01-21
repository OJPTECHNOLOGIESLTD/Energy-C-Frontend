import * as React from "react";

function HomeIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 19" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.54 5.459C0 6.349 0 7.42 0 9.566v1.426c0 3.657 0 5.486 1.218 6.622 1.219 1.136 3.18 1.136 7.102 1.136h4.16c3.922 0 5.883 0 7.102-1.136 1.218-1.136 1.218-2.965 1.218-6.622V9.566c0-2.145 0-3.218-.54-4.107-.54-.89-1.526-1.441-3.5-2.545L14.68 1.75C12.596.583 11.553 0 10.4 0 9.248 0 8.205.583 6.12 1.75L4.04 2.914C2.065 4.018 1.08 4.57.54 5.459zm6.74 8.838c-.43 0-.78.315-.78.703 0 .388.35.703.78.703h6.24c.43 0 .78-.315.78-.703 0-.388-.35-.703-.78-.703H7.28z"
        fill="#000"
      />
    </svg>
  );
}

const MemoHome = React.memo(HomeIcon);
export default MemoHome;
