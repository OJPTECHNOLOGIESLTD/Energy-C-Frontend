import * as React from "react";

function ExitIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 18" fill="none" {...props}>
      <path
        d="M9 4L7.6 5.4 10.2 8H0v2h10.2l-2.6 2.6L9 14l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2h-8v2h8v14z"
        fill="#E7E3C6"
      />
    </svg>
  );
}

const MemoExitIcon = React.memo(ExitIcon);
export default MemoExitIcon;
