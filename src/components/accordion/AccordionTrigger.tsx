import React from "react";

type Props = {
  children: React.ReactNode;
};

const AccordionTrigger = ({ children }: Props) => {
  return <span>{children}</span>;
};

export default AccordionTrigger;
