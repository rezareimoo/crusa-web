"use client";

import { useEffect } from "react";
import PickupForm from "@/components/PickupForm";

type PickupFormModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function PickupFormModal({ open, onClose }: PickupFormModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a pickup"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-surface-deep/70 cursor-default"
      />
      <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-line bg-surface-raised shadow-pop">
        <PickupForm onClose={onClose} />
      </div>
    </div>
  );
}
