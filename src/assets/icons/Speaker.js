import * as React from "react";

function Speaker(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 20" fill="none" {...props}>
      <path
        d="M14.313 4.963v10.062A5.592 5.592 0 0017.436 10a5.625 5.625 0 00-3.125-5.037zM.563 6.25v7.5h5l6.25 6.25V0l-6.25 6.25h-5zm8.75-.213v7.926L6.6 11.25H3.063v-2.5H6.6l2.713-2.713z"
        fill="#E7E3C6"
      />
    </svg>
  );
}

const MemoSpeaker = React.memo(Speaker);
export default MemoSpeaker;
