"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import DynamicContent, {Counter, DynamicIcon} from "@/components/cards"

import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
User,
Mail,
MapPin,
Phone as PhoneIcon,
Target,
Link2,
FileUp,
NotebookPen
} from "lucide-react";


type FormValues = {
fullName: string;
email: string;
location: string;
phone: string;
interest: string;
links: string;
resume: File | null;
note: string;
consent: boolean;
};


export default function ContactForm() {
const {
register,
handleSubmit,
setValue,
watch,
formState: { errors, isSubmitting },
} = useForm<FormValues>();

const resumeFile = watch("resume");

const onDrop = useCallback(
(acceptedFiles: File[]) => {
setValue("resume", acceptedFiles[0]);
},
[setValue]
);

const { getRootProps, getInputProps, isDragActive } = useDropzone({
onDrop,
maxFiles: 1,
accept: { "application/pdf": [], "application/msword": [] },
});

const onSubmit = (data: FormValues) => {
console.log("Form Data:", data);
};

// Reusable wrapper with icon
const InputWrapper = ({
icon,
children,
}: {
icon: React.ReactNode;
children: React.ReactNode;
}) => (
<div className="flex items-center border-gray-300 border rounded-lg p-3 gap-3 focus-within:ring focus-within:border-gray-200">
<span className="text-gray-500">{icon}</span>
<div className="flex-1">{children}</div>
</div>
);

return (
<>
<div className="my-4">
<form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-2xl border p-5 border-gray-200">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
<div>
{/* Full Name */}
<div className="mb-6">
<label htmlFor="fullname" className="block mb-1 font-medium">Full Name <span className='required'>*</span></label>
<InputWrapper icon={<User size={20} />}>
<input
type="text"
id='fullname'
{...register("fullName", { required: true })}
className="w-full outline-none"
placeholder="John Doe"
/>
</InputWrapper>
{errors.fullName && (
<p className="text-red-500 text-sm">Full name is required</p>
)}
</div>


{/* Location */}
<div className="mb-6">
<label htmlFor="location" className="block mb-1 font-medium">Location <span className='required'>*</span></label>
<InputWrapper icon={<MapPin size={20} />}>
<input
type="text"
id='location'
{...register("location", { required: true })}
className="w-full outline-none"
placeholder="Lagos, Nigeria"
/>
</InputWrapper>
{errors.location && (
<p className="text-red-500 text-sm">Location is required</p>
)}
</div>


{/* Area of Interest */}
<div className="mb-6">
<label htmlFor="area" className="block mb-1 font-medium">Area of Interest <span className='required'>*</span></label>
<InputWrapper icon={<Target size={20} />}>
<select id='area'
{...register("interest", { required: true })}
className="w-full outline-none bg-transparent"
>
<option value="">Select an area</option>
<option>Frontend Development</option>
<option>Backend Development</option>
<option>UI/UX Design</option>
<option>Project Management</option>
<option>Marketing</option>
</select>
</InputWrapper>
{errors.interest && (
<p className="text-red-500 text-sm">This field is required</p>
)}
</div>
</div>
<div>
{/* Email */}
<div className="mb-6">
<label htmlFor="email" className="block mb-1 font-medium">Email Address <span className='required'>*</span></label>
<InputWrapper icon={<Mail size={20} />}>
<input
type="email"
id='email'
{...register("email", { required: true })}
className="w-full outline-none"
placeholder="example@mail.com"
/>
</InputWrapper>
{errors.email && (
<p className="text-red-500 text-sm">Valid email is required</p>
)}
</div>

{/* Phone */}
<div className="mb-6">
<label htmlFor="phone" className="block mb-1 font-medium">Phone Number <span className='required'>*</span></label>
<InputWrapper icon={<PhoneIcon size={20} />}>
<input
type="tel"
id='phone'
{...register("phone", { required: true })}
className="w-full outline-none"
placeholder="+234 812 345 6789"
/>
</InputWrapper>
{errors.phone && (
<p className="text-red-500 text-sm">Phone number is required</p>
)}
</div>

{/* Links */}
<div className="mb-6">
<label htmlFor="links" className="block mb-1 font-medium">Links (Portfolio / GitHub / LinkedIn) <span className='required'>*</span></label>
<InputWrapper icon={<Link2 size={20} />}>
<input
type="text"
id='links'
{...register("links")}
className="w-full outline-none"
placeholder="https://your-portfolio.com"
/>
</InputWrapper>
</div>
</div>
</div>




{/* Resume Upload */}
<div className="mb-6">
<label className="block mb-2 font-medium">Upload Resume <span className='required'>*</span></label>
<div
  {...getRootProps()}
  className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition flex flex-col items-center gap-3 ${
    isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-400"
  }`}
>
<DynamicIcon name='CloudUpload' size={48} />
  <div>
    <input {...getInputProps()} />

    {resumeFile ? (
      <p className="text-green-600 font-medium">{resumeFile.name}</p>
    ) : (
      <p className="text-gray-600 text-center">
       <span className="font-bold">Choose a file or drag & drop it here. </span>
        <br />
Only PDF format, up to 50 MB.<br /><br />
<span className="px-5 py-2 border rounded-full">Browse File</span>

      </p>
    )}
  </div>
</div>
</div>

{/* Short Note */}
<div>
<label htmlFor="notes" className="block mb-1 font-medium">Short Note <span className='required'>*</span></label>
<div className="flex items-start border rounded-lg p-3 gap-3 focus-within:ring focus-within:border-blue-500">
<NotebookPen size={20} className="text-gray-500 mt-1" />

<textarea
{...register("note", { required: true })}
rows={4}
id="note"
className="w-full outline-none resize-none"
placeholder="Tell us something about yourself..."
></textarea>
</div>
{errors.note && (
<p className="text-red-500 text-sm">Short note is required</p>
)}
</div>

{/* Consent Agreement */}
<div className="flex items-start">
<input
type="checkbox"
id="consent"
{...register("consent", { required: true })}
className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
/>
<label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
I agree to the <a href="/terms" className="text-blue-600 hover:underline">terms and conditions</a> and <a href="/privacy" className="text-blue-600 hover:underline">privacy policy</a>.
</label>
</div>
{errors.consent && (
<p className="text-red-500 text-sm">I agree to the fair use of my data for recruitment purposes.</p>
)}


<div className="my-12 flex items-center p-4 rounded-2xl bg-gray-100 gap-5">
<div className="flex-none p-2">
<DynamicIcon name='Info' size={28} />
</div>
<div className="flex-1 px-2.5 py-2.5">
<p>Note: We review submissions and will reach out when there’s a match. For questions, please use our Contact page. New to Nexoris? Read our About Us page to learn more.</p>
</div>
</div>

{/* Submit */}
<button
type="submit"
disabled={isSubmitting}
className={`w-full py-3 font-semibold rounded-lg transition ${
isSubmitting
? "bg-gray-400 cursor-not-allowed text-gray-200"
: "bg-blue-600 text-white hover:bg-blue-700"
}`}
>
{isSubmitting ? "Submitting..." : "Submit Application"}
</button>
</form>



</div>
</>
);
}