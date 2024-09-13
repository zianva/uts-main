"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Ikon panah kanan untuk link "Learn more"

const Mockup: React.FC = () => {
  return (
    <div className="flex h-screen bg-white"> {/* Ubah background menjadi putih di sini */}
      {/* Bagian Kiri: Konten Teks */}
      <section className="flex-1 bg-white flex items-center justify-center px-8">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
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

      {/* Bagian Kanan: Mockup Aplikasi */}
      <section className="flex-1 bg-white flex items-center justify-center px-8">
        <div className="max-w-md">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            {/* Tampilan mockup aplikasi */}
            <img src="mockup.png" alt="Chats UI" className="w-full rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mockup;
