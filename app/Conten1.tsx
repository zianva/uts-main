"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Ikon panah untuk link "Learn more"

const Conten1: React.FC = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen px-8 lg:px-16">
        {/* Bagian Kiri: Teks */}
        <section className="flex-1 flex flex-col justify-center order-2 lg:order-1">
          <div className="pr-40 max-w-lg">
            <h1 className="text-4xl font-bold text-gray-900 leading-snug">
              Choose how you want to work
            </h1>
            <p className="mt-6 text-lg text-gray-600">
            In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
          </p>
          <div className="mt-8">
            <a href="#" className="flex items-center text-blue-600 font-semibold text-lg">
              Learn more <FiArrowRight className="ml-2" />
            </a>
          </div>
          </div>
        </section>
  
        {/* Bagian Kanan: Gambar */}
        <section className="flex-1 flex justify-center items-center mb-8 lg:mb-0 order-1 lg:order-2">
          <img
            src="img-group-1.png"
            alt="Chats UI"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />

        </section>
      </div>
    );
  };

  export default Conten1;