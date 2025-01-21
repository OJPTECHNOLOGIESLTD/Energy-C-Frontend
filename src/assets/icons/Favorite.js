import * as React from "react";

function Favorite(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 25 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.687 20.9l-1.45-1.292c-5.15-4.572-8.55-7.587-8.55-11.287 0-3.015 2.42-5.384 5.5-5.384 1.74 0 3.41.793 4.5 2.046a6.042 6.042 0 014.5-2.046c3.08 0 5.5 2.369 5.5 5.384 0 3.7-3.4 6.715-8.55 11.297l-1.45 1.282z"
        fill="#217C70"
      />
    </svg>
  );
}

const MemoFavorite = React.memo(Favorite);
export default MemoFavorite;
