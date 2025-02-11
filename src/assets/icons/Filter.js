import * as React from "react";

function Filter(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M3.005 2.403h10l-5.01 6.068-4.99-6.068zm-2.75-.375c2.02 2.494 5.75 7.117 5.75 7.117v5.778c0 .53.45.963 1 .963h2c.55 0 1-.433 1-.963V9.145s3.72-4.623 5.74-7.117c.51-.636.04-1.55-.79-1.55H1.045c-.83 0-1.3.914-.79 1.55z"
        fill="#1C1B1F"
      />
    </svg>
  );
}

const MemoFilter = React.memo(Filter);
export default MemoFilter;
