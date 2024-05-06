import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PlayIcon from "@/components/icons/PlayIcon";

type Props = {
  id: string;
  name: string;
  title: string;
  content: string;
  videoUrl: string;
  imgOverlay: string;
};

const TestimonialCard = ({
  id,
  name,
  title,
  content,
  imgOverlay,
  videoUrl,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Fragment>
      <div className="bg-white flex gap-4 rounded-lg overflow-hidden p-4 md:p-6">
        <div className="relative w-1/2">
          <div className="relative overflow-hidden rounded-lg">
            <div className="bg-black/60 w-full h-full absolute top-0"></div>
            <img
              src="https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              className="h-full"
            />
            <button
              onClick={openModal}
              className="absolute flex items-center gap-2 w-max text-white text-xs px-3 py-1 md:font-medium md:px-10 md:py-4 md:text-base rounded-full bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#9624E4] from-0% to-[#E92970] to-100%"
            >
              <PlayIcon />
              <span>Play Now</span>
            </button>
          </div>
        </div>
        <div className="w-1/2 text-[#0A191C]">
          <p className="text-2xl md:text-4xl font-semibold leading-none">
            {name}
          </p>
          <p className="text-base md:text-xl opacity-50">{title}</p>
          <p className="text-sm mt-2 md:text-base md:mt-4">{content}</p>
        </div>
      </div>
      <ModalVideo isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">This is a Modal</h2>
        <p>{name}</p>
      </ModalVideo>
    </Fragment>
  );
};

type PropsModalVideo = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalVideo = ({ isOpen, onClose, children }: PropsModalVideo) => {
  // if (!isOpen) return null;
  const modalClassName = isOpen
    ? "inset-0 opacity-100 flex items-center justify-center"
    : "opacity-0";

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${modalClassName} z-50 fixed transition ease-in-out duration-500`}
    >
      <div className={modalClassName}>
        <div
          onClick={onClose}
          className="absolute inset-0 bg-gray-900 opacity-90"
        ></div>
        <div className="bg-white relative rounded-lg p-8 z-50">{children}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
