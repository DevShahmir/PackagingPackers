import React, { RefObject } from "react";
import WhatsappButton from "../ui/WhatsappButton";

interface ContactFormFieldsProps {
  name: string;
  setName: (val: string) => void;
  number: string;
  setNumber: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  quantity: string;
  setQuantity: (val: string) => void;
  message: string;
  setMessage: (val: string) => void;
  nameInputRef: RefObject<HTMLInputElement | null>;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactFormFields({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  quantity,
  setQuantity,
  message,
  setMessage,
  nameInputRef,
  onSubmit,
}: ContactFormFieldsProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5 pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name-input" className="text-xs font-medium text-cream-200 uppercase tracking-wider block">
            Your Name <span className="text-gold-400">*</span>
          </label>
          <input
            id="name-input"
            ref={nameInputRef}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ayesha Khan"
            className="w-full px-4 py-3 rounded-xl border border-gold-500/20 bg-brown-950/80 text-cream-100 text-sm placeholder-cream-400/40 focus:outline-none focus:border-gold-400 transition"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="number-input" className="text-xs font-medium text-cream-200 uppercase tracking-wider block">
            Phone / WhatsApp <span className="text-gold-400">*</span>
          </label>
          <input
            id="number-input"
            type="tel"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="e.g. +92 300 1234567"
            className="w-full px-4 py-3 rounded-xl border border-gold-500/20 bg-brown-950/80 text-cream-100 text-sm placeholder-cream-400/40 focus:outline-none focus:border-gold-400 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="email-input" className="text-xs font-medium text-cream-200 uppercase tracking-wider block">
            Business Email <span className="text-gold-400">*</span>
          </label>
          <input
            id="email-input"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. hello@yourbusiness.com"
            className="w-full px-4 py-3 rounded-xl border border-gold-500/20 bg-brown-950/80 text-cream-100 text-sm placeholder-cream-400/40 focus:outline-none focus:border-gold-400 transition"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="qty-input" className="text-xs font-medium text-cream-200 uppercase tracking-wider block">
            Expected Order Volume (pcs)
          </label>
          <input
            id="qty-input"
            type="number"
            min="100"
            step="50"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 500"
            className="w-full px-4 py-3 rounded-xl border border-gold-500/20 bg-brown-950/80 text-cream-100 text-sm placeholder-cream-400/40 focus:outline-none focus:border-gold-400 transition"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message-input" className="text-xs font-medium text-cream-200 uppercase tracking-wider block">
          Product Size and Delivery Area
        </label>
        <textarea
          id="message-input"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share width x length x depth, box style, order volume, and delivery area..."
          className="w-full px-4 py-3 rounded-xl border border-gold-500/20 bg-brown-950/80 text-cream-100 text-sm placeholder-cream-400/40 focus:outline-none focus:border-gold-400 transition"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="w-full sm:flex-1 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brown-950 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:brightness-105 active:scale-[0.99] cursor-pointer"
        >
          Get My Box Pricing
        </button>
        <WhatsappButton
          variant="inline"
          label="WhatsApp"
          className="w-full sm:w-auto"
          message={
            name
              ? `Hi ${name}! I would like a quote for custom boxes.`
              : "Hi! I would like a quote for custom boxes."
          }
        />
      </div>
    </form>
  );
}
