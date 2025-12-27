"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectDropdownProps {
  label: string;
  name: string;
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  required?: boolean;
}

export default function MultiSelectDropdown({
  label,
  name,
  options,
  value = [],
  onChange,
  required = false,
}: MultiSelectDropdownProps) {
  const { theme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCount = value.length;

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleValue = (v: string) => {
    if (required && value.includes(v) && value.length === 1) {
      setError("At least one option must be selected.");
      return;
    }

    setError(null);

    if (value.includes(v)) {
      onChange(value.filter((x) => x !== v));
    } else {
      onChange([...value, v]);
    }
  };

  return (
    <div className="w-full relative" ref={dropdownRef}>
      {/* Label */}
      <label
        htmlFor={name}
        className={`block mb-1 font-medium ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`
          w-full flex justify-between items-center
          rounded-lg border px-4 py-2
          transition focus:outline-none
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-500/40"
              : isDark
              ? "border-gray-600 bg-[#121212] text-gray-200 focus:ring-2 focus:ring-[#543CDA]/40"
              : "border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-[#543CDA]/40"
          }
        `}
      >
        <span className="text-sm">
          {selectedCount === 0
            ? "Select..."
            : `${selectedCount} selected`}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Error */}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}

      {/* Dropdown */}
      {open && (
        <div
          className={`
            absolute mt-2 w-full z-30
            rounded-lg border shadow-lg p-2
            max-h-60 overflow-auto
            ${
              isDark
                ? "bg-[#0F0F0F] border-gray-700"
                : "bg-white border-gray-200"
            }
          `}
        >
          {options.map((opt) => {
            const isChecked = value.includes(opt.value);
            const disableLast =
              required && isChecked && value.length === 1;

            return (
              <label
                key={opt.value}
                className={`
                  flex items-center gap-3 px-2 py-2 rounded cursor-pointer
                  transition
                  ${
                    isDark
                      ? "hover:bg-gray-800 text-gray-200"
                      : "hover:bg-gray-100 text-gray-700"
                  }
                `}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  disabled={disableLast}
                  onChange={() => toggleValue(opt.value)}
                  className={`
                    w-4 h-4 rounded
                    text-[#543CDA]
                    focus:ring-[#543CDA]
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${
                      isDark
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-100 border-gray-300"
                    }
                  `}
                />
                <span className="text-sm">{opt.label}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}
