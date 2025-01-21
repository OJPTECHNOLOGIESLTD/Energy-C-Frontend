import * as React from "react";

function Store(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 25 23" fill="none" {...props}>
      <path
        d="M20.8 3.75H4.16v1.875H20.8V3.75zm1.04 9.375V11.25L20.8 6.562H4.16L3.12 11.25v1.875h1.04v5.625h10.4v-5.625h4.16v5.625h2.08v-5.625h1.04zm-9.36 3.75H6.24v-3.75h6.24v3.75z"
        fill="#000"
      />
    </svg>
  );
}

const MemoStore = React.memo(Store);
export default MemoStore;
