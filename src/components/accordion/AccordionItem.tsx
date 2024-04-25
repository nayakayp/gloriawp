import React, { useState } from "react";

type Props = {
  children: React.ReactNode[];
};

const AccordionItem = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#0A191C] text-white rounded-[10px]">
      <button
        className="w-full text-xl font-medium p-4 text-left cursor-pointer transition-all"
        onClick={toggleAccordion}
      >
        {children[0]}
      </button>
      <div
        className={`${isOpen ? "p-4 text-white font-light text-base visible min-h-4 max-h-96" : "invisible h-0"} transition-all duration-100 px-4`}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default AccordionItem;
