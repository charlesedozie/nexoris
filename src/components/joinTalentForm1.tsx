"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { useDropzone } from "react-dropzone";
import { DynamicIcon } from "@/components/cards";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  interest: string[];
  links?: string;
  note: string;
  consent: boolean;
};


const INTEREST_OPTIONS = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Project Management",
  "Marketing",
];

const LOCATION_OPTIONS = ["Nigeria", "Ghana"];

export default function JoinTalentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => setResumeFile(acceptedFiles[0]),
  });

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };


  
  

const onSubmit = async (data: FormValues) => {
  try {
    const formData = new FormData();
    console.log('start join')
    // REQUIRED by FormSubmit
    formData.append("_subject", "Request Proposal Form Submission");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    });

    const res = await fetch("https://formsubmit.co/charlesedozie@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      
console.log('start sending failed')
      throw new Error("Form submission failed");
    }
setSuccess(true);
    alert("Message sent successfully!");
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};




  return (
    <div className="relative">
      {!success && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-2xl border p-5 border-gray-200"
          aria-label="Join our talent network form"
        >
          {/* Full Name */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="w-full border rounded px-3 py-2 outline-none"
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">Full name is required</p>
            )}
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">
              Location <span className="required">*</span>
            </label>
            <select
              {...register("location", { required: true })}
              className="w-full border rounded px-3 py-2 outline-none bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select Location
              </option>
              {LOCATION_OPTIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            {errors.location && (
              <p className="text-red-500 text-sm">Location is required</p>
            )}
          </div>

          {/* Area of Interest Multi-select */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">
              Area of Interest <span className="required">*</span>
            </label>
            <div className="flex flex-wrap gap-2 border rounded p-2 min-h-[50px] cursor-pointer">
              {INTEREST_OPTIONS.map((interest) => (
                <div
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-3 py-1 rounded-full border ${
                    selectedInterests.includes(interest)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300"
                  } flex items-center gap-1`}
                >
                  <span>{interest}</span>
                  {selectedInterests.includes(interest) && (
                    <span
                      className="cursor-pointer font-bold"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleInterest(interest);
                      }}
                    >
                      ×
                    </span>
                  )}
                </div>
              ))}
            </div>
            {selectedInterests.length === 0 && (
              <p className="text-red-500 text-sm mt-1">
                Select at least one area of interest
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border rounded px-3 py-2 outline-none"
              placeholder="example@mail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Valid email is required</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              {...register("phone", { required: true })}
              className="w-full border rounded px-3 py-2 outline-none"
              placeholder="+234 812 345 6789"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">Phone number is required</p>
            )}
          </div>

          {/* Resume Upload */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Upload Resume <span className="required">*</span>
            </label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition flex flex-col items-center gap-3 ${
                isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-400"
              }`}
            >
              <DynamicIcon name="CloudUpload" size={48} />
              <div className="text-center">
                <input {...getInputProps()} />
                {resumeFile ? (
                  <p className="text-green-600 font-medium">{resumeFile.name}</p>
                ) : (
                  <p className="text-gray-600">
                    <span className="font-bold">
                      Choose a file or drag & drop it here.
                    </span>
                    <br />
                    Only PDF format, up to 50 MB.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Short Note */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">
              Short Note <span className="required">*</span>
            </label>
            <textarea
              {...register("note", { required: true })}
              rows={4}
              className="w-full border rounded px-3 py-2 outline-none resize-none"
              placeholder="Tell us something about yourself..."
            />
            {errors.note && (
              <p className="text-red-500 text-sm">Short note is required</p>
            )}
          </div>

          {/* Consent */}
          <div className="mb-6 flex items-start">
            <input
              type="checkbox"
              {...register("consent", { required: true })}
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-700">
              I agree to the fair use of my data for recruitment purposes.
            </label>
          </div>

          {/* Submit with Loader */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-5 bg-[#543CDA] text-white font-semibold rounded-lg hover:bg-[#4b39b1] flex items-center justify-center gap-3"
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            )}
            {loading ? "Submitting..." : "Join the Talent Network"}
          </button>

          
        </form>
      )}

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500">
          <div className="bg-white rounded-xl p-8 w-full max-w-md text-center transform transition-transform duration-500 scale-100">
            <DynamicIcon
              name="CheckCircle"
              size={48}
              className="mx-auto text-green-600"
            />
            <h2 className="mt-4 text-2xl font-bold">Congratulations!</h2>
            <p className="mt-2 text-gray-700">
              Your form has been successfully submitted. We will review your submission and contact you if there’s a match.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
