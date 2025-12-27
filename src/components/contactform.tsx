"use client";

import React, {useState, useEffect} from "react";
import DynamicContent, {useDarkMode, DynamicIcon} from "@/components/cards"
import Link from 'next/link';

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
service: string[];
resume: File | null;
note: string;
consent: boolean;
};

const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile App Development",
  "Custom Software Solutions",
  "SEO & Content Marketing",
  "Cloud Solutions",
  "Product Design & Management",
  "Digital Transformation Consulting",
  "Website Maintenance & Support",
  "Not sure yet",
];


const formControl =
  "w-full bg-transparent outline-none text-sm " +
  "text-gray-900 placeholder:text-gray-400 " +
  "dark:text-gray-100 dark:placeholder:text-gray-500";

const formWrapper =
  "flex items-center gap-3 rounded-lg p-3 border transition " +
  "border-gray-300 focus-within:ring-2 focus-within:ring-[#543CDA]/40 " +
  "dark:border-[#515154] dark:bg-[#121212]";


export default function ContactForm() {
const {
register,
reset,
handleSubmit,
setValue,
watch,
formState: { errors, isSubmitting },
} = useForm<FormValues>();
const [selectedServices, setSelectedServices] = useState<string[]>([]);
const [isServiceOpen, setIsServiceOpen] = useState(false);


const [showModal, setShowModal] = useState(false);
const { isDark } = useDarkMode();
const resumeFile = watch("resume");


// keep RHF in sync
useEffect(() => {
  setValue("service", selectedServices);
}, [selectedServices, setValue]);


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

const toggleService = (service: string) => {
  setSelectedServices((prev) =>
    prev.includes(service)
      ? prev.filter((s) => s !== service)
      : [...prev, service]
  );
};

useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".service-dropdown")) {
      setIsServiceOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


const onSubmit = async (data: FormValues) => {
  try {
    const formData = new FormData();
    // REQUIRED by FormSubmit
    formData.append("_subject", "New Contact Form Submission");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } 
      else if (Array.isArray(value)){formData.append(key, value.join(", "));}
      else {
        formData.append(key, String(value));
      }
    });




    const res = await fetch("https://formsubmit.co/requests@nexoristech.com", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      
console.log('start sending failed')
      throw new Error("Form submission failed");
    }

      setShowModal(true);
    // React Hook Form
reset()
setSelectedServices([])
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};


// Reusable wrapper with icon
const InputWrapper = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className={`flex items-center border rounded-lg p-3 gap-3 focus-within:ring focus-within:border-gray-200 ${isDark ? " border-[#515154]  " : " border-gray-300 "}`}>
    <span className="text-gray-500 dark:text-gray-400">{icon}</span>
    <div className="flex-1">{children}</div>
  </div>
);


return (
<>
<div className="my-4">
  
<form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 rounded-2xl  ${isDark ? " darkModeBg " : " border border-gray-200 "}  p-5`}>
  
<DynamicContent type="h2" title='Send a message' />
<DynamicContent type="p" title='Tell us your project goal and what you need. We’ll reply with a clear plan and next steps.'  />


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
<label htmlFor="area" className="block mb-1 font-medium">What do you need?<span className='required'>*</span></label>
<InputWrapper icon={<Target size={20} />}>
<select id='area'
{...register("interest", { required: true })}
className={`w-full outline-none  ${isDark ? " darkModeBg " : " bg-transparent "}`}
>
<option value="">Select an option</option>
<option>Get a proposal / Request a quote</option>
<option>Request a technical audit</option>
<option>Support request</option>
<option>General question</option>
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

{/* Area of Interest */}
<div className="mb-6 relative service-dropdown">
  <label className="block mb-1 font-medium">
    Which Service? <span className="text-red-500">*</span>
  </label>

  {/* Dropdown Button */}
  <button
    type="button"
    onClick={() => setIsServiceOpen(!isServiceOpen)}
    className={`w-full flex justify-between items-center p-3 rounded-lg border 
      ${isDark ? "border-[#515154] bg-transparent" : "border-gray-300 bg-white"}`}
  >
    <span className="text-sm">
      {selectedServices.length > 0
        ? `${selectedServices.length} selected`
        : "Select services"}
    </span>

    <span className="text-gray-500">▾</span>
  </button>

  {/* Dropdown Panel */}
  {isServiceOpen && (
    <div
      className={`absolute z-20 mt-2 w-full rounded-lg border bg-white dark:bg-[#0f0f0f] shadow-lg max-h-60 overflow-y-auto ${isDark ? " darkModeBg " : " bg-white"}`}
    >
      {SERVICE_OPTIONS.map((service) => (
        <label
          key={service}
          className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <input
            type="checkbox"
            checked={selectedServices.includes(service)}
            onChange={() => toggleService(service)}
          />
          <span>{service}</span>
        </label>
      ))}
    </div>
  )}

  {errors.service && (
    <p className="text-red-500 text-sm mt-1">
      Please select at least one service
    </p>
  )}
</div>


</div>
</div>



{/* Short Note */}
<div>
<label htmlFor="notes" className="block mb-1 font-medium">Message<span className='required'>*</span></label>
<div className={`${isDark ? "darkModeBg border-[#515154]  " : " "} flex items-start border rounded-lg p-3 gap-3 focus-within:ring focus-within:border-blue-500`}>
<NotebookPen size={20} className="mt-1" />

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

{/* Resume Upload */}
<div className="mb-6">
<label className="block mb-2 font-medium">Attach file to project</label>
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
      <p className="text-center">
       <span className="font-bold">Choose a file or drag & drop it here. </span>
        <br />
Only PDF format, up to 15 MB.
<br /><br /><span className="border font-semibold rounded-3xl border-[#D2D2D3] py-2 px-5">Browse File</span>

      </p>
    )}
  </div>
</div>
</div>


{/* Consent Agreement */}
<div className="flex items-start">
<input
type="checkbox"
id="consent"
{...register("consent", { required: true })}
className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
/>
<label htmlFor="consent" className="ml-2 block text-sm">
I agree to the <DynamicContent type="link" title='Terms of Service' url='/terms-of-service' css="text-sm text-blue-600"  /> and <DynamicContent type="link" title='Privacy Policy' url='/privacy-policy' css="text-sm text-blue-600"  /> of Nexoris Technologies.
</label>
</div>
{errors.consent && (
<p className="text-red-500 text-sm">I agree to the fair use of my data for recruitment purposes.</p>
)}


<div className={`${isDark ? "darkModeBg " : " bg-gray-100 "} my-12 flex items-center p-4 rounded-2xl  gap-5 hidden sm:block"`}>
<div className="flex-none p-2">
<DynamicIcon name='Info' size={28} />
</div>
<div className="flex-1 px-2.5 py-2.5">
<p>Note: We review submissions and will reach out when there’s a match. For questions, please use our Contact page. New to Nexoris? Read our About Us page to learn more.</p>
</div>
</div>


<button 
type={"submit"}
role="button"
aria-label={"Sunit Button"}
className={`group m-0 w-full sm:w-fit hover:opacity-90 items-center justify-between gap-2 pointer font-medium rounded-full flex items-center justify-between transition  ${isSubmitting ? "bg-gray-400 cursor-not-allowed text-gray-200" : " bg-[#543CDA] text-white "}`}>
<span className="px-8 text-sm">{'  Submit Form'}</span>
<span className={` bg-[#4D3BAD]  p-4 rounded-full`}>
<DynamicIcon size={20} name={`ArrowRight`} aria-hidden="true" /></span>
</button>
</form>
</div>








<div className={`my-18 p-5 rounded-2xl ${isDark ? " darkModeBg " : " border border-[#E9EAEB]  "}`}>
<DynamicContent type="h2" title='Get in Touch' />
<DynamicContent type="p" title='Got a question or idea? Call us, drop an email, or stop by, we are happy to chat, however you prefer.'  />

<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
<div className='my-5'>
<DynamicContent type="p4" title='Email' css='font-semibold'  />
<ul className="list-disc pl-6 space-y-2 my-3 p-base-res">
<li><b>Business & partnerships:</b><a href="mailto:business@nexoristech.com" className='underline text-blue-700 cursor-pointer hover:text-blue-500'> business@nexoristech.com</a> </li>
<li><b>General inquiries: </b><a href="mailto:hello@nexoristech.com" className='underline text-blue-700 cursor-pointer hover:text-blue-500'> hello@nexoristech.com</a></li>
<li><b>Client support: </b> 
<a href="mailto:support@nexoristech.com" className='underline text-blue-700 cursor-pointer hover:text-blue-500'> support@nexoristech.com</a>
</li>
</ul>

<DynamicContent type="p4" css='mb-3 mt-10 font-semibold' title='Phone Number'  />
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li className="text-blue-700 underline">+234 913 813 3224</li>
</ul>
</div>
<div>
<DynamicContent type="p4" title='Office Address' css='font-semibold'  />
<p>We’re a remote-first team with our headquarters in Lagos.<br />
Lekki, Lagos, Nigeria <br />We work across time zones and schedule calls to fit your team</p>
<DynamicContent type="p4" css='mb-3 mt-10 font-semibold' title='Office Hours'  />
<ul className="list-disc pl-6 space-y-2 p-base-res">
<li>Monday - Friday (09:00AM - 05:00PM, GMT + 1)</li>
</ul>
</div>
</div>
</div>









<div>
<div className='my-8'><DynamicContent type="h2" title='For Our Clients' />
<DynamicContent type="p" title='Need help with something live?'  /></div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-2 mb-4">
<div className={`${isDark ? "darkModeBg" : " border border-[#E9EAEB]  "} p-5 p-2 rounded-lg`}>
<div><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7269 7.85344C22.7707 6.79594 21.1732 6.26719 18.8557 6.26719H18.5857V6.22219C18.5857 4.33219 18.5857 1.99219 14.3557 1.99219H12.6457C8.41565 1.99219 8.41565 4.34344 8.41565 6.22219V6.27844H8.14565C5.8169 6.27844 4.23065 6.80719 3.2744 7.86469C2.16065 9.10219 2.1944 10.7672 2.3069 11.9034L2.31815 11.9822L2.43065 13.1634C2.4419 13.1747 2.4644 13.1972 2.4869 13.2084C2.85815 13.4559 3.24065 13.7034 3.64565 13.9284C3.80315 14.0297 3.9719 14.1197 4.14065 14.2097C6.0644 15.2672 8.1794 15.9759 10.3282 16.3247C10.4294 17.3822 10.8907 18.6197 13.3544 18.6197C15.8182 18.6197 16.3019 17.3934 16.3807 16.3022C18.6757 15.9309 20.8919 15.1322 22.8944 13.9622C22.9619 13.9284 23.0069 13.8947 23.0632 13.8609C23.5807 13.5684 24.0644 13.2534 24.5369 12.9047C24.5594 12.8934 24.5819 12.8709 24.5932 12.8484L24.6382 12.4434L24.6944 11.9147C24.7057 11.8472 24.7057 11.7909 24.7169 11.7122C24.8069 10.5759 24.7844 9.02344 23.7269 7.85344ZM14.7269 15.5597C14.7269 16.7522 14.7269 16.9322 13.3432 16.9322C11.9594 16.9322 11.9594 16.7184 11.9594 15.5709V14.1534H14.7269V15.5597ZM10.0244 6.26719V6.22219C10.0244 4.30969 10.0244 3.60094 12.6457 3.60094H14.3557C16.9769 3.60094 16.9769 4.32094 16.9769 6.22219V6.27844H10.0244V6.26719Z" fill="#543CDA"/>
<path opacity="0.4" d="M23.0622 13.8367C23.0059 13.8705 22.9497 13.9042 22.8934 13.938C20.8909 15.108 18.6747 15.8955 16.3797 16.278C16.2897 17.358 15.8172 18.5955 13.3534 18.5955C10.8897 18.5955 10.4172 17.3692 10.3272 16.3005C8.17844 15.963 6.06344 15.2542 4.13969 14.1855C3.97094 14.0955 3.80219 14.0055 3.64469 13.9042C3.23969 13.6792 2.85719 13.4317 2.48594 13.1842C2.46344 13.173 2.44094 13.1505 2.42969 13.1392L3.11594 20.463C3.35219 22.7017 4.27469 25.008 9.22469 25.008H17.7972C22.7472 25.008 23.6697 22.7017 23.9059 20.4517L24.6147 12.8242C24.6034 12.8467 24.5809 12.8692 24.5584 12.8805C24.0747 13.2292 23.5797 13.5555 23.0622 13.8367Z" fill="#543CDA"/>
</svg></div>


<div className='mt-2'>
<DynamicContent css='font-semibold' type="p3" url='/contact' title='Technical issues & small fixes' teaser='Technical issues & small fixes' /></div>

<Link
href={'/website-maintenance'}
aria-label={'Technical issues & small fixes'}       
className={`def-link-style`}>
    <div className="flex w-full my-2">
  {/* Element 1: only as wide as its content */}
  <div className="shrink-0 pr-3">
   <DynamicIcon name={'ArrowDownRight'} size={28} color="#aea1f7ff" />
  </div>

  {/* Element 2: takes the remaining space */}
  <div className="flex-1">
Website Maintenance & Support
  </div>
</div>
</Link>
</div>






<div className={`${isDark ? "darkModeBg" : " border border-[#E9EAEB]  "} p-5 p-2 rounded-lg`}>
<div><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7269 7.85344C22.7707 6.79594 21.1732 6.26719 18.8557 6.26719H18.5857V6.22219C18.5857 4.33219 18.5857 1.99219 14.3557 1.99219H12.6457C8.41565 1.99219 8.41565 4.34344 8.41565 6.22219V6.27844H8.14565C5.8169 6.27844 4.23065 6.80719 3.2744 7.86469C2.16065 9.10219 2.1944 10.7672 2.3069 11.9034L2.31815 11.9822L2.43065 13.1634C2.4419 13.1747 2.4644 13.1972 2.4869 13.2084C2.85815 13.4559 3.24065 13.7034 3.64565 13.9284C3.80315 14.0297 3.9719 14.1197 4.14065 14.2097C6.0644 15.2672 8.1794 15.9759 10.3282 16.3247C10.4294 17.3822 10.8907 18.6197 13.3544 18.6197C15.8182 18.6197 16.3019 17.3934 16.3807 16.3022C18.6757 15.9309 20.8919 15.1322 22.8944 13.9622C22.9619 13.9284 23.0069 13.8947 23.0632 13.8609C23.5807 13.5684 24.0644 13.2534 24.5369 12.9047C24.5594 12.8934 24.5819 12.8709 24.5932 12.8484L24.6382 12.4434L24.6944 11.9147C24.7057 11.8472 24.7057 11.7909 24.7169 11.7122C24.8069 10.5759 24.7844 9.02344 23.7269 7.85344ZM14.7269 15.5597C14.7269 16.7522 14.7269 16.9322 13.3432 16.9322C11.9594 16.9322 11.9594 16.7184 11.9594 15.5709V14.1534H14.7269V15.5597ZM10.0244 6.26719V6.22219C10.0244 4.30969 10.0244 3.60094 12.6457 3.60094H14.3557C16.9769 3.60094 16.9769 4.32094 16.9769 6.22219V6.27844H10.0244V6.26719Z" fill="#543CDA"/>
<path opacity="0.4" d="M23.0622 13.8367C23.0059 13.8705 22.9497 13.9042 22.8934 13.938C20.8909 15.108 18.6747 15.8955 16.3797 16.278C16.2897 17.358 15.8172 18.5955 13.3534 18.5955C10.8897 18.5955 10.4172 17.3692 10.3272 16.3005C8.17844 15.963 6.06344 15.2542 4.13969 14.1855C3.97094 14.0955 3.80219 14.0055 3.64469 13.9042C3.23969 13.6792 2.85719 13.4317 2.48594 13.1842C2.46344 13.173 2.44094 13.1505 2.42969 13.1392L3.11594 20.463C3.35219 22.7017 4.27469 25.008 9.22469 25.008H17.7972C22.7472 25.008 23.6697 22.7017 23.9059 20.4517L24.6147 12.8242C24.6034 12.8467 24.5809 12.8692 24.5584 12.8805C24.0747 13.2292 23.5797 13.5555 23.0622 13.8367Z" fill="#543CDA"/>
</svg></div>
<div className='mt-2'>
<DynamicContent css='font-semibold' type="p3" url='/contact' title='Hosting or VPS requests' teaser='Hosting or VPS requests' /></div>
<Link
href={'/cloud-solutions'}
aria-label={'Technical issues & small fixes'}       
className={`def-link-style`}>

<div>
    <div className="flex w-full my-2">
  {/* Element 1: only as wide as its content */}
  <div className="shrink-0 pr-3">
   <DynamicIcon name={'ArrowDownRight'} size={28} color="#aea1f7ff" />
  </div>

  {/* Element 2: takes the remaining space */}
  <div className="flex-1">Cloud Solutions
  </div>
</div>
</div>
</Link>


</div>


<div className={`${isDark ? "darkModeBg" : " border border-[#E9EAEB]  "} p-5 p-2 rounded-lg`}>
<div><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7269 7.85344C22.7707 6.79594 21.1732 6.26719 18.8557 6.26719H18.5857V6.22219C18.5857 4.33219 18.5857 1.99219 14.3557 1.99219H12.6457C8.41565 1.99219 8.41565 4.34344 8.41565 6.22219V6.27844H8.14565C5.8169 6.27844 4.23065 6.80719 3.2744 7.86469C2.16065 9.10219 2.1944 10.7672 2.3069 11.9034L2.31815 11.9822L2.43065 13.1634C2.4419 13.1747 2.4644 13.1972 2.4869 13.2084C2.85815 13.4559 3.24065 13.7034 3.64565 13.9284C3.80315 14.0297 3.9719 14.1197 4.14065 14.2097C6.0644 15.2672 8.1794 15.9759 10.3282 16.3247C10.4294 17.3822 10.8907 18.6197 13.3544 18.6197C15.8182 18.6197 16.3019 17.3934 16.3807 16.3022C18.6757 15.9309 20.8919 15.1322 22.8944 13.9622C22.9619 13.9284 23.0069 13.8947 23.0632 13.8609C23.5807 13.5684 24.0644 13.2534 24.5369 12.9047C24.5594 12.8934 24.5819 12.8709 24.5932 12.8484L24.6382 12.4434L24.6944 11.9147C24.7057 11.8472 24.7057 11.7909 24.7169 11.7122C24.8069 10.5759 24.7844 9.02344 23.7269 7.85344ZM14.7269 15.5597C14.7269 16.7522 14.7269 16.9322 13.3432 16.9322C11.9594 16.9322 11.9594 16.7184 11.9594 15.5709V14.1534H14.7269V15.5597ZM10.0244 6.26719V6.22219C10.0244 4.30969 10.0244 3.60094 12.6457 3.60094H14.3557C16.9769 3.60094 16.9769 4.32094 16.9769 6.22219V6.27844H10.0244V6.26719Z" fill="#543CDA"/>
<path opacity="0.4" d="M23.0622 13.8367C23.0059 13.8705 22.9497 13.9042 22.8934 13.938C20.8909 15.108 18.6747 15.8955 16.3797 16.278C16.2897 17.358 15.8172 18.5955 13.3534 18.5955C10.8897 18.5955 10.4172 17.3692 10.3272 16.3005C8.17844 15.963 6.06344 15.2542 4.13969 14.1855C3.97094 14.0955 3.80219 14.0055 3.64469 13.9042C3.23969 13.6792 2.85719 13.4317 2.48594 13.1842C2.46344 13.173 2.44094 13.1505 2.42969 13.1392L3.11594 20.463C3.35219 22.7017 4.27469 25.008 9.22469 25.008H17.7972C22.7472 25.008 23.6697 22.7017 23.9059 20.4517L24.6147 12.8242C24.6034 12.8467 24.5809 12.8692 24.5584 12.8805C24.0747 13.2292 23.5797 13.5555 23.0622 13.8367Z" fill="#543CDA"/>
</svg></div>
<div className='mt-2'>
<DynamicContent css='font-semibold' type="p3" url='/contact' title='Search visibility or content updates' teaser='Search visibility or content updates' /></div>
<Link
href={'/seo-content-marketing'}
aria-label={'Technical issues & small fixes'}       
className={`def-link-style`}>


<div>
    <div className="flex w-full my-2">
  {/* Element 1: only as wide as its content */}
  <div className="shrink-0 pr-3">
   <DynamicIcon name={'ArrowDownRight'} size={28} color="#aea1f7ff" />
  </div>

  {/* Element 2: takes the remaining space */}
  <div className="flex-1">SEO & Content Marketing  </div>
</div>
</div>
</Link>

</div>
</div>





</div>




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

            <h2 className="mt-10 text-2xl my-8 text-gray-900 font-bold mb-4">Thanks for Getting in Touch.</h2>
            <p className="mt-2 text-gray-700 mb-5">
          Thanks for reaching out, our team will review your message and get back to you shortly </p>
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
</>
);
}