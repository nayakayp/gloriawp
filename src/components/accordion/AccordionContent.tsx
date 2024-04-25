import React from "react";

type Props = {
  children: React.ReactNode;
};

const AccordionContent = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default AccordionContent;
