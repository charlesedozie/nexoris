"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import DynamicContent, {DynamicIcon, useDarkMode} from "./cards"

type FormData = {
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

const SKILL_OPTIONS = [
  { label: "Frontend Development", icon: "Code2" },
  { label: "Backend Development", icon: "Server" },
  { label: "Full Stack Development", icon: "Layers" },
  { label: "Mobile App Development", icon: "Smartphone" },
  { label: "UI / UX Design", icon: "Palette" },
  { label: "DevOps / Cloud Engineering", icon: "Cloud" },
  { label: "Cybersecurity", icon: "ShieldCheck" },
  { label: "Data Analysis / BI", icon: "BarChart3" },
  { label: "AI / Machine Learning", icon: "Brain" },
  { label: "Product / Project Management", icon: "ClipboardList" },
];

const LOCATION_OPTIONS = ["Nigeria", "Ghana"];

export default function JoinTalentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

const { isDark } = useDarkMode();
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);


    const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  // Multi-select for Area of Interest
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

const onSubmit = async (data: FormData) => {
  try {
    const formData = new FormData();
    // REQUIRED by FormSubmit
    formData.append("_subject", "Job Application Form Submission");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    });
if (resumeFile) {
  formData.append("resume", resumeFile);
}

if (!resumeFile) {
  alert("Please upload your resume.");
  return;
}


    // ✅ ADD SKILLS
    formData.append("skills", skills.join(", "));

    const res = await fetch("https://formsubmit.co/careers@nexoristech.com", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Form submission failed");
    }

   // alert("Message sent successfully!");
    setShowModal(true);
    // React Hook Form
reset()

// Local state
setSkills([])
setSelectedInterests([])
setResumeFile(null)

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
          className={`space-y-6 rounded-2xl p-5 aria-label="Join our talent network form" ${isDark ? " darkModeBg " : " border border-gray-300 "}`}>

<DynamicContent type="p3" css='font-bold' title='Job Application'  />
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2">
<div className="p-2">

          {/* Full Name */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">
              Full Name<span className="required">*</span>
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className={`flex items-center border rounded-2xl p-3 gap-3 focus-within:ring focus-within:border-gray-200 ${isDark ? " border-[#515154] darkModeBg " : " bg-white border-gray-300 "}`}
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
              className={`flex items-center border rounded-2xl p-3 gap-3 focus-within:ring focus-within:border-gray-200 ${isDark ? " border-[#515154] darkModeBg " : " bg-white border-gray-300 "}`}
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

 {/* Skills */}
        <div>
          <label className="label">Skills *</label>
          <details className={`relative border" border rounded-lg p-3 gap-3 focus-within:ring focus-within:border-gray-200 ${isDark ? " darkModeBg border-[#515154]  " : " border-gray-300 "}`}>
            <summary className="input cursor-pointer flex items-center gap-2">
              <span>
                {skills.length
                  ? `${skills.length} skill(s) selected`
                  : "Select your skills"}
              </span>
            </summary>

            <div className={`absolute z-10 mt-2 w-full border rounded-xl max-h-64 overflow-auto ${isDark ? " darkModeBg  " : " bg-white "}`}>
              {SKILL_OPTIONS.map(({ label, icon }) => (
                <label
                  key={label}
                  className="flex items-center gap-3 px-4 py-2
                             hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={skills.includes(label)}
                    onChange={() => toggleSkill(label)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </details>
        </div>

</div>
<div className="p-2">
  {/* Email */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className={`flex items-center border rounded-2xl p-3 gap-3 focus-within:ring focus-within:border-gray-200 ${isDark ? " border-[#515154] darkModeBg " : " bg-white border-gray-300 "}`}
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
              className={`flex items-center border rounded-2xl p-3 gap-3 focus-within:ring focus-within:border-gray-200 ${isDark ? " border-[#515154] darkModeBg " : " bg-white border-gray-300 "}`}
              placeholder="+234 812 345 6789"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">Phone number is required</p>
            )}
          </div>

            {/* Links */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">
              Links <span className="required">*</span>
            </label>
            <input
              type="text"
              {...register("links", { required: true })}
              className={`flex items-center border rounded-2xl p-3 gap-3 focus-within:ring focus-within:border-gray-200 ${isDark ? " border-[#515154] darkModeBg " : " bg-white border-gray-300 "}`}
              placeholder="https://"
            />
            {errors.links && (
              <p className="text-red-500 text-sm">Links is required</p>
            )}
          </div>
</div>
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
                    Only PDF format, up to 15 MB.
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
            <label className="ml-2 text-sm">
              I agree to the fair use of my data for recruitment purposes.
            </label>
          </div>
{errors.consent && (
  <p className="text-red-500 text-sm mt-1">
    You must agree before submitting.
  </p>
)}

          {/* Submit */}
          <button 
          type={"submit"}
          role="button"          
          onClick={() => setShowModal(false)}
          aria-label={"Submit Application"}
          className={`group m-0 w-full sm:w-fit hover:opacity-90 items-center justify-between gap-2 pointer font-medium rounded-full flex items-center justify-between transition  ${loading ? "bg-gray-400 cursor-not-allowed text-gray-200" : " bg-[#543CDA] text-white "}`}>
          <span className="px-8 text-sm">{'Submit Application'}</span>
          <span className={` bg-[#4D3BAD]  p-4 rounded-full`}>
          <DynamicIcon size={20} name={`ArrowRight`} aria-hidden="true" /></span>
          </button>
        </form>
      )}

      {/* Success Modal */}
       {showModal && (
        <div className="fixed inset-0 flex items-center z-100 justify-center bg-gray-600/40 z-50">
          {/* Close Button */}
  

          <div className="bg-white rounded-xl p-8 w-full max-w-md text-center transform transition-transform duration-500 scale-100">
<div className="mb-6">
  <button
  onClick={() => setShowModal(false)}
  aria-label="Close modal"
  className="absolute top-4 right-4 flex items-center justify-center 
             w-8 h-8 rounded-full bg-gray-100 text-gray-700 
             hover:bg-gray-200 hover:text-gray-900 pointer font-bold 
             transition"
>
  ✕
</button>
</div>

    <div className="flex justify-center items-center">
      <DynamicContent
        type="img"
        src="/success_icon.webp"
        teaser="Form Submitted"
        css="w-[100px] h-[100px] max-w-full object-contain"
      />
    </div>
            <h2 className="mt-10 text-2xl my-8 text-gray-900 font-bold mb-4">Application Submitted</h2>
            <p className="mt-2 text-gray-700 mb-5">
             Thank you for applying! Our team will review your submission and get back to you soon
            </p>
            <div className="flex justify-center mb-3 mt-6"><button 
            type={"submit"}
            role="button"
            
  onClick={() => setShowModal(false)}
            aria-label={"Sunit Button"}
            className={`group m-0 w-full sm:w-fit hover:opacity-90 items-center justify-between gap-2 pointer font-medium rounded-full flex items-center justify-between transition  $" bg-[#543CDA] text-white`}>
            <span className="px-8 text-sm">Okay, Thank you</span>
            <span className={` bg-[#4D3BAD]  p-4 rounded-full`}>
            <DynamicIcon size={20} name={`ArrowRight`} aria-hidden="true" /></span>
            </button></div>
          </div>
        </div>
      )}


    </div>
  );
}
