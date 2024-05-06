import React from "react";

type Props = {};

const Announcement = (props: Props) => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 w-full bg-yellow-500 text-white font-noto-sans-display text-sm text-center font-medium py-1">
      <p>This page is a special offer for BHW member</p>
    </div>
  );
};

export default Announcement;
