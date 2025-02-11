import * as React from "react";

function Weight(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M11 6.33c.85-.3 1.53-.98 1.83-1.83H16l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h2v-2h-6.17A2.99 2.99 0 0010 .5c-1.31 0-2.42.83-2.83 2H1v2h2l-3 7c0 1.66 1.57 3 3.5 3s3.5-1.34 3.5-3l-3-7h3.17c.3.85.98 1.53 1.83 1.83V17.5H0v2h20v-2h-9V6.33zm7.37 5.17h-3.74l1.87-4.36 1.87 4.36zm-13 0H1.63L3.5 7.14l1.87 4.36zm4.63-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
        fill="#E7E3C6"
      />
    </svg>
  );
}

const MemoWeight = React.memo(Weight);
export default MemoWeight;
