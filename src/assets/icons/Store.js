import * as React from "react";

function Store(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 16" fill="none" {...props}>
      <path
        d="M17.8.75H1.16v1.875H17.8V.75zm1.04 9.375V8.25L17.8 3.562H1.16L.12 8.25v1.875h1.04v5.625h10.4v-5.625h4.16v5.625h2.08v-5.625h1.04zm-9.36 3.75H3.24v-3.75h6.24v3.75z"
        fill="#000"
      />
    </svg>
  );
}

const MemoStore = React.memo(Store);
export default MemoStore;
