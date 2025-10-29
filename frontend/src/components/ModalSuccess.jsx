
import React from "react";

export default function ModalSuccess({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
        <h3 className="text-2xl font-semibold mb-4">Thanks for subscribing</h3>
        <p className="mb-6">Please check your email for confirmation.</p>
        <button onClick={onClose} className="px-6 py-2 bg-[#01101D] text-white rounded-full">
          Close
        </button>
      </div>
    </div>
  );
}
