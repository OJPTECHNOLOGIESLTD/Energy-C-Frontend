import * as React from "react";

function Circle_Unselected(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" {...props}>
      <circle cx={7.402} cy={7.49} r={7.353} fill="#fff" />
    </svg>
  );
}

const MemoCircle_Unselected = React.memo(Circle_Unselected);
export default MemoCircle_Unselected;
