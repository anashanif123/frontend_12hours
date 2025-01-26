// CategoryCard.js
import React, { useState } from "react";
import Modal from "./modal";

export default function ({ title, image, description }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSeeMoreClick = () => {
    setModalOpen(true); // Open the modal when "See More" is clicked
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-fill object-center"
          src={image}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {title}
          </h2>

          <p className="leading-relaxed mb-3">{description}</p>
          <div className="mx-auto">
            <button
              className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
              onClick={handleSeeMoreClick} // Open modal on click
            >
              See More
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} /> {/* Modal */}
    </div>
  );
}
