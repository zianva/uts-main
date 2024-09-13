"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Ikon panah untuk link "Learn more"

const Conten: React.FC = () => {
  return (
    <div className="flex bg-white flex-col lg:flex-row items-center justify-center h-screen px-8 lg:px-16">
      {/* Bagian Kiri: Gambar */}
      <section className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
        <img
          src="img-group.png"
          alt="Chats UI"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </section>

      {/* Bagian Kanan: Teks */}
      <section className="flex-1 flex flex-col justify-center">
        <div className="pl-40 max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
            Chats for your distributed teams
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Team combines the immediacy of real-time chat with an email
            threading model. With Team, you can catch up on important
            conversations while ignoring irrelevant ones.
          </p>
          <div className="mt-8">
            <a href="#" className="flex items-center text-blue-600 font-semibold text-lg">
              Learn more <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conten;
