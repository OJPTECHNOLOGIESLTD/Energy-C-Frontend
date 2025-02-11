import * as React from "react";

function BinIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 18" fill="none" {...props}>
      <path
        d="M11 6v10H3V6h8zM9.5 0h-5l-1 1H0v2h14V1h-3.5l-1-1zM13 4H1v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4z"
        fill="#E7E3C6"
      />
    </svg>
  );
}

const MemoBinIcon = React.memo(BinIcon);
export default MemoBinIcon;
