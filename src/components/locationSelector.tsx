"use client";

import { useState } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function LocationSelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const locations = ["Any Location", "Nigeria"];

  return (
    <div className="relative">
      {/* Button */}
      <button
        type="button"
        className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 text-sm text-black cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* Location Icon */}
        <svg
          className="w-4 h-4 text-gray-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>

        {value}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-1 w-40 bg-white border shadow-lg rounded-lg overflow-hidden z-20">
          {locations.map((loc) => (
            <div
              key={loc}
              onClick={() => {
                onChange(loc);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              {loc}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
