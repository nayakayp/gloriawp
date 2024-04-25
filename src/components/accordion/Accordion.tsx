import React from "react";

type Props = {
  children: React.ReactNode;
};

const Accordion = ({ children }: Props) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

export default Accordion;
