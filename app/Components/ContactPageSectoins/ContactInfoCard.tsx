"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-xs text-cream-200 mb-1">Name</label>
        <input
          ref={nameInputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full px-3 py-2 rounded-lg bg-brown-950 border border-gold-500/20 text-cream-100"
        />
      </div>

      <div>
        <label className="block text-xs text-cream-200 mb-1">Phone Number</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
          className="w-full px-3 py-2 rounded-lg bg-brown-950 border border-gold-500/20 text-cream-100"
        />
      </div>

      <div>
        <label className="block text-xs text-cream-200 mb-1">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full px-3 py-2 rounded-lg bg-brown-950 border border-gold-500/20 text-cream-100"
        />
      </div>
    </form>
  );
}
