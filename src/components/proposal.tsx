"use client";

import React, { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useDarkMode } from "@/components/cards";
import {
  User,
  Blocks,
  Mail,
  Globe,
  Phone as PhoneIcon,
  Target,
  Link2,
  NotebookPen,
  Briefcase,
  Clock,
  ShieldCheck,
  Layers,
  Calendar,
  Wallet,
  CheckSquare,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import DynamicContent, { DynamicIcon } from "@/components/cards";

interface Option {
  label: string;
  value: string;
}

type FormValues = {
  fullName: string;
  email: string;
  company: string;
  roleTitle: string;
  region: string;
  timeZone: string;
  projectObjective: string;
  whatAreYouBuilding: string;
  deliverablespreference: string; // Key integrations
  links: string;
  briefDescription: string;
  supportingFiles: File[];
  timelineUrgency: string;
  budgetRange: string;
  successDefinition: string;
  complianceNeeds: string;
  preferredNextStep: string;
  availabilityForCall: string;
  referralSource: string;
  consent: boolean;
};

const projectObjectiveOptions: Option[] = [
  { label: "New product / MVP", value: "New product / MVP" },
  { label: "Redesign or rebuild", value: "Redesign or rebuild" },
  { label: "Mobile app (iOS / Android)", value: "Mobile app (iOS / Android)" },
  { label: "Platform migration", value: "Platform migration" },
  { label: "Feature growth / iteration", value: "Feature growth / iteration" },
  { label: "Ecommerce build", value: "Ecommerce build" },
  { label: "SEO & Content Marketing", value: "SEO & Content Marketing" },
  { label: "Maintenance & Repair", value: "Maintenance & Repair" },
  { label: "Other (tell us below)", value: "Other (tell us below)" },
];

const timelineOptions: Option[] = [
  { label: "Immediate (24-48h)", value: "immediate" },
  { label: "This week", value: "This week" },
  { label: "Within 2 weeks", value: "Within 2 weeks" },
  { label: "Within a month", value: "Within a month" },
  { label: "Flexible", value: "flexible" },
];

const budgetOptions: Option[] = [
  { label: "Less than ₦1m | less than $1k", value: "<1k" },
  { label: "₦1–₦5m | $1k–$5k", value: "1k-5k" },
  { label: "₦6–₦10m | $6k–$10k", value: "6k-10k" },
  { label: "₦10m+ | 10k+", value: ">10k" },
  { label: "Exploring / not sure yet", value: "not sure yet" },
];

const successOptions: Option[] = [
  { label: "Performance targets met", value: "performance" },
  { label: "Security issues remediated", value: "security" },
  { label: "Compliance achieved", value: "compliance" },
  { label: "Migration completed", value: "migration" },
];

const nextStepOptions: Option[] = [
  { label: "Schedule a 15-minute triage call", value: "call" },
  { label: "Email me first", value: "proposal" },
];

const availabilityOptions: Option[] = [
  { label: "Weekdays (morning) WAT", value: "wk_morning" },
  { label: "Weekdays (afternoon) WAT", value: "wk_afternoon" },
  { label: "Weekdays (evening) WAT", value: "wk_evening" },
  { label: "Weekends WAT", value: "weekends" },
];

const referralOptions: Option[] = [
  { label: "Google", value: "google" },
  { label: "Referral", value: "referral" },
  { label: "LinkedIn", value: "LinkedIn" },
  { label: "Event / Conference", value: "event" },
  { label: "Case study", value: "Case-study" },
  { label: "Other", value: "other" },
];

const regionOptions: Option[] = [
  { label: "Africa", value: "africa" },
  { label: "Europe", value: "europe" },
  { label: "North America", value: "north_america" },
  { label: "South America", value: "south_america" },
  { label: "Asia", value: "asia" },
  { label: "Middle East", value: "middle_east" },
  { label: "Oceania", value: "oceania" },
];

const groupedTimeZones = {
  Africa: [
    { label: "Lagos (WAT, UTC+1)", value: "Africa/Lagos" },
    { label: "Accra (GMT, UTC+0)", value: "Africa/Accra" },
    { label: "Nairobi (EAT, UTC+3)", value: "Africa/Nairobi" },
    { label: "Johannesburg (SAST, UTC+2)", value: "Africa/Johannesburg" },
    { label: "Cairo (EET, UTC+2)", value: "Africa/Cairo" },
  ],
  Europe: [
    { label: "London (GMT/BST)", value: "Europe/London" },
    { label: "Berlin (CET)", value: "Europe/Berlin" },
    { label: "Paris (CET)", value: "Europe/Paris" },
  ],
  Americas: [
    { label: "New York (EST/EDT)", value: "America/New_York" },
    { label: "Chicago (CST/CDT)", value: "America/Chicago" },
    { label: "Los Angeles (PST/PDT)", value: "America/Los_Angeles" },
    { label: "São Paulo (BRT)", value: "America/Sao_Paulo" },
  ],
  Asia: [
    { label: "Dubai (GST)", value: "Asia/Dubai" },
    { label: "Mumbai (IST)", value: "Asia/Kolkata" },
    { label: "Singapore (SGT)", value: "Asia/Singapore" },
    { label: "Tokyo (JST)", value: "Asia/Tokyo" },
  ],
  Oceania: [
    { label: "Sydney (AEST/AEDT)", value: "Australia/Sydney" },
    { label: "Auckland (NZST/NZDT)", value: "Pacific/Auckland" },
  ],
};

export default function ProjectForm() {
  const { isDark } = useDarkMode();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      roleTitle: "",
      region: "",
      timeZone: "",
      projectObjective: "",
      whatAreYouBuilding: "",
      deliverablespreference: "",
      links: "",
      briefDescription: "",
      supportingFiles: [],
      timelineUrgency: "",
      budgetRange: "",
      successDefinition: "",
      complianceNeeds: "",
      preferredNextStep: "",
      availabilityForCall: "",
      referralSource: "",
      consent: false,
    },
  });

  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      setValue("timeZone", tz, { shouldDirty: false });
    }
  }, [setValue]);

  const supportingFiles = watch("supportingFiles") || [];

  // Supporting files dropzone
  const onDropSupporting = useCallback(
    (acceptedFiles: File[]) => {
      const prev = watch("supportingFiles") || [];
      const merged = [...prev, ...acceptedFiles].slice(0, 10);
      setValue("supportingFiles", merged, { shouldDirty: true });
    },
    [setValue, watch]
  );

  const {
    getRootProps: getSupportRoot,
    getInputProps: getSupportInput,
    isDragActive: isSupportActive,
  } = useDropzone({
    onDrop: onDropSupporting,
    multiple: true,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "application/zip": [".zip"],
      "image/*": [],
      "text/plain": [".txt"],
    },
    maxSize: 15 * 1024 * 1024, // 15 MB
  });

  const removeSupportingFile = (index: number) => {
    const files = watch("supportingFiles") || [];
    const updated = files.filter((_, i) => i !== index);
    setValue("supportingFiles", updated, { shouldDirty: true });
  };


  
  


  const onSubmit = async (data: FormValues) => {
  try {
    const formData = new FormData();

    formData.append("_subject", "Request Proposal Form Submission");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

  
    



    Object.entries(data).forEach(([key, value]) => {
  if (Array.isArray(value)) {
    value.forEach((item) => {
      if (item instanceof File) {
        formData.append(key, item);
      } else {
        formData.append(key, String(item));
      }
    });
  } else {
    formData.append(key, String(value));
  }
});





    const res = await fetch("https://formsubmit.co/requests@nexoristech.com", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Submission failed");

    setShowModal(true);
    reset();
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};


  const InputWrapper = ({
    icon,
    children,
  }: {
    icon: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <div
      className={`flex items-center border rounded-lg p-3 gap-3 focus-within:ring focus-within:border-gray-200 ${
        isDark ? "border-[#515154]" : "border-gray-300"
      }`}
    >
      <span className="text-gray-500">{icon}</span>
      <div className="flex-1">{children}</div>
    </div>
  );

  return (
    <div className="my-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-6 rounded-2xl p-5 ${
          isDark ? "darkModeBg" : "border border-gray-200"
        }`}
      >
        <div className="my-8">
          <DynamicContent type="h2" title="Tell Us About Your Project" />
        </div>
        <hr className={`mb-10 ${isDark ? "text-gray-800" : "text-gray-300"}`} />

        {/* Personal Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2">
          <div>
            <label className="block mb-1 font-medium">
              Full Name<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<User size={20} />}>
              <input
                {...register("fullName", { required: "Full name is required" })}
                className="w-full outline-none"
                placeholder="John Doe"
              />
            </InputWrapper>
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Email Address<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<Mail size={20} />}>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full outline-none"
                placeholder="example@mail.com"
              />
            </InputWrapper>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Company / Organisation<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<Briefcase size={20} />}>
              <input
                {...register("company", { required: "Company is required" })}
                className="w-full outline-none"
                placeholder="ExampleCo Ltd"
              />
            </InputWrapper>
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Role / Title</label>
            <InputWrapper icon={<Briefcase size={20} />}>
              <input
                {...register("roleTitle")}
                className="w-full outline-none"
                placeholder="CTO, Product Manager..."
              />
            </InputWrapper>
          </div>

          <div>
            <label className="block mb-1 font-medium">Region</label>
            <InputWrapper icon={<Globe size={20} />}>
              <select
                {...register("region")}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select region</option>
                {regionOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>

          <div>
            <label className="block mb-1 font-medium">Time zone</label>
            <InputWrapper icon={<Clock size={20} />}>
              <Controller
                name="timeZone"
                control={control}
                render={({ field }) => (
                  <TimeZoneSelect
                    value={field.value}
                    onChange={field.onChange}
                    options={groupedTimeZones}
                  />
                )}
              />
            </InputWrapper>
          </div>
        </div>

        {/* Project Details */}
        <div className="flex flex-col gap-10">
          <div>
            <label className="block mb-1 font-medium">
              Project objective<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<Target size={20} />}>
              <select
                {...register("projectObjective", { required: "Project objective is required" })}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select objective</option>
                {projectObjectiveOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
            {errors.projectObjective && (
              <p className="text-red-500 text-sm mt-1">{errors.projectObjective.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">
              What are you building<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<Layers size={20} />}>
              <select
                {...register("whatAreYouBuilding", { required: "This field is required" })}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select</option>
                {projectObjectiveOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
            {errors.whatAreYouBuilding && (
              <p className="text-red-500 text-sm mt-1">{errors.whatAreYouBuilding.message}</p>
            )}
          </div>
        </div>

        {/* Key Integrations & Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2">
          <div>
            <label className="block mb-1 font-medium">Key integrations</label>
            <InputWrapper icon={<Blocks size={20} />}>
              <input
                {...register("deliverablespreference")}
                className="w-full outline-none"
                placeholder="e.g Paystack, Stripe, Azure AD SSO, HubSpot, GA4"
              />
            </InputWrapper>
          </div>

          <div>
            <label className="block mb-1 font-medium">Links</label>
            <InputWrapper icon={<Link2 size={20} />}>
              <input
                {...register("links")}
                className="w-full outline-none"
                placeholder="https://"
              />
            </InputWrapper>
          </div>
        </div>

        {/* Brief Description & File Upload */}
        <div className="flex flex-col gap-10">
          <div>
            <label className="block mb-1 font-medium">Brief description</label>
            <InputWrapper icon={<NotebookPen size={20} />}>
              <textarea
                {...register("briefDescription")}
                rows={4}
                className="w-full outline-none resize-none"
                placeholder="Short summary of your project..."
              />
            </InputWrapper>
          </div>

         {/* Attach a brief / RFP - SINGLE FILE ONLY */}
<div>
  <label className="block mb-2 font-medium">Attach a brief / RFP (PDF only, max 15 MB)</label>
  <div
    {...getSupportRoot()}
    className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition flex flex-col items-center gap-3 ${
      isSupportActive ? "border-blue-500 bg-blue-50" : "border-gray-400"
    }`}
  >
    <DynamicIcon name="CloudUpload" size={48} />

    {/* Hidden input for file selection */}
    <input {...getSupportInput()} className="hidden" />

    <div className="text-center w-full">
      {supportingFiles.length > 0 ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-green-600 font-medium truncate max-w-md">
            {supportingFiles[0].name}
          </p>
          <button
            type="button"
            onClick={() => setValue("supportingFiles", [], { shouldDirty: true })}
            className="text-sm text-red-600 hover:underline"
          >
            Remove file
          </button>
        </div>
      ) : (
        <p>
          <span className="font-bold">Click to upload or drag & drop</span>
          <br />
          PDF only, up to 15 MB
          <br /><br />
          <span className="border font-semibold rounded-3xl border-[#D2D2D3] py-2 px-5">
            Browse File
          </span>
        </p>
      )}
    </div>
  </div>
</div>
        </div>

        {/* Constraints & Preferences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2">
          <div>
            <label className="block mb-1 font-medium">
              Target launch window<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<Calendar size={20} />}>
              <select
                {...register("timelineUrgency", { required: "Please select a timeline" })}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select timeline</option>
                {timelineOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
            {errors.timelineUrgency && (
              <p className="text-red-500 text-sm mt-1">{errors.timelineUrgency.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Budget range</label>
            <InputWrapper icon={<Wallet size={20} />}>
              <select
                {...register("budgetRange")}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select budget</option>
                {budgetOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>

          <div>
            <label className="block mb-1 font-medium">What does success look like</label>
            <InputWrapper icon={<CheckSquare size={20} />}>
              <select
                {...register("successDefinition")}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select</option>
                {successOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>

          <div>
            <label className="block mb-1 font-medium">Compliance / review needs</label>
            <InputWrapper icon={<ShieldCheck size={20} />}>
              <input
                {...register("complianceNeeds")}
                className="w-full outline-none"
                placeholder="e.g. GDPR, ISO27001..."
              />
            </InputWrapper>
          </div>

          <div>
            <label className="block mb-1 font-medium">Preferred next step</label>
            <InputWrapper icon={<ArrowUpRight size={20} />}>
              <select
                {...register("preferredNextStep")}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select</option>
                {nextStepOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>

          <div>
            <label className="block mb-1 font-medium">Availability for a call</label>
            <InputWrapper icon={<Phone size={20} />}>
              <select
                {...register("availabilityForCall")}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select</option>
                {availabilityOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>
        </div>

        {/* Final Section */}
        <div className="flex flex-col gap-10">
          <div>
            <label className="block mb-1 font-medium">How did you hear about us</label>
            <InputWrapper icon={<Globe size={20} />}>
              <select
                {...register("referralSource")}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select</option>
                {referralOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>

          <div className="p-6 border rounded-3xl border-[#543CDA]">
            <DynamicContent
              type="p"
              title="What you need to know:"
              css="font-semibold mb-4"
            />
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>We’ll use this information to respond to your request and prepare a tailored proposal.</li>
              <li>We’ll send occasional product updates and case studies.</li>
              <li>We reply quickly during business hours (WAT).</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                {...register("consent", { required: "You must agree to proceed" })}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="consent" className="ml-2 block text-sm">
                By submitting, you agree to our{" "}
                <DynamicContent
                  type="link"
                  title="Privacy Policy"
                  url="/privacy-policy"
                  css="text-blue-700 underline"
                />{" "}
                and{" "}
                <DynamicContent
                  type="link"
                  title="Cookie Policy"
                  url="/cookie-policy"
                  css="text-blue-700 underline"
                />
                . I consent to Nexoris processing my information for the purpose of handling this request.
              </label>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`group m-0 w-full sm:w-fit hover:opacity-90 font-medium rounded-full flex items-center justify-between transition pointer ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed text-gray-200"
                : "bg-[#543CDA] text-white"
            }`}
          >
            <span className="px-8 text-sm">Submit Form</span>
            <span className="bg-[#4D3BAD] p-4 rounded-full">
              <DynamicIcon size={20} name="ArrowRight" aria-hidden="true" />
            </span>
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white max-w-[350px] md:max-w-[600px] rounded-xl p-8 w-full text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl pointer"
            >
              ×
            </button>

            <div className="flex justify-center my-6">
              <DynamicContent
                type="img"
                src="/success_icon.webp"
                teaser="Success"
                css="w-24 h-24 object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thanks, your request is in!
            </h2>
            <p className="text-gray-700 mb-8">
              We have emailed a confirmation and will review your details.
              <br />
              If a discovery call makes sense, you'll receive a calendar invite shortly.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="group w-full sm:w-fit hover:opacity-90 font-medium rounded-full flex items-center justify-between transition bg-[#543CDA] text-white mx-auto pointer"
            >
              <span className="px-8 text-sm">Okay, Thank you</span>
              <span className="bg-[#4D3BAD] p-4 rounded-full">
                <DynamicIcon size={20} name="ArrowRight" />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function TimeZoneSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: Record<string, Option[]>;
}) {
  const { isDark } = useDarkMode();
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
    >
      <option value="">Select time zone</option>
      {Object.entries(options).map(([region, zones]) => (
        <optgroup key={region} label={region}>
          {zones.map((z) => (
            <option key={z.value} value={z.value}>
              {z.label}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}