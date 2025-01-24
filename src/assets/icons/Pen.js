import * as React from "react";

function Pen(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.25V18h3.75L14.81 6.94l-3.75-3.75L0 14.25zM17.71 4.04a.996.996 0 000-1.41L15.37.29a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        fill="#000"
      />
    </svg>
  );
}

const MemoPen = React.memo(Pen);
export default MemoPen;
