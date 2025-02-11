import * as React from "react";

function Notification2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 35 40" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.356 39.583a4.179 4.179 0 005.118-2.92l-8.038-2.198a4.165 4.165 0 002.92 5.118zm15.355-8.758l2.749-10.048c1.688-6.169-.195-12.235-5.568-15.174l.373-1.366a3.12 3.12 0 00-2.19-3.839 3.12 3.12 0 00-3.838 2.19l-.374 1.366C15.723 3.743 11.04 7.991 9.346 14.18L6.597 24.228l-5.118 2.92-.55 2.009 32.152 8.796.55-2.01-2.92-5.118z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoNotification2 = React.memo(Notification2);
export default MemoNotification2;
