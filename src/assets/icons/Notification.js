import * as React from "react";

function Notification(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 17.886c1.192 0 2.167-.82 2.167-1.823H6.833c0 1.003.975 1.823 2.167 1.823zm6.5-5.468V7.86c0-2.798-1.766-5.14-4.875-5.76v-.62C10.625.725 9.899.114 9 .114c-.9 0-1.625.61-1.625 1.367v.62C4.277 2.72 2.5 5.054 2.5 7.86v4.557L.333 14.24v.912h17.334v-.912L15.5 12.418zm-2.167.911H4.667V7.861C4.667 5.6 6.303 3.76 9 3.76s4.333 1.84 4.333 4.1v5.469z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoNotification = React.memo(Notification);
export default MemoNotification;
