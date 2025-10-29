
import React, { useState } from "react";
import ModalSuccess from "./ModalSuccess";

export default function SubscribeForm({ theme }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!email) {
      setError("Please enter email");
      return;
    }
    setLoading(true);
    try {
   const res = await fetch("http://localhost/backend/send_email.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email })
});

if (!res.ok) {
  throw new Error("Server error");
}

const json = await res.json();

if (json.status === "success") {
  setShowSuccess(true);
  setEmail("");
} else {
  setError(json.message || "Server error");
}

    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
          className={`flex-1 px-3 py-3 rounded-l-full outline-none ${theme === "dark" ? "bg-[#05131F] text-white" : "bg-white text-black"}`}
          required
        />
        <button type="submit" disabled={loading} className="px-5 py-3 rounded-r-full bg-[#EAB308] font-semibold">
          {loading ? "Sending..." : "Subscribe"}
        </button>
      </form>

      {error && <div className="text-red-500 text-sm mt-2 text-center">{error}</div>}

      {showSuccess && <ModalSuccess onClose={() => setShowSuccess(false)} />}
    </>
  );
}
