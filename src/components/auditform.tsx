"use client";

import React, { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import DynamicContent, { DynamicIcon, useDarkMode } from "./cards";
import MultiSelectDropdown from "./multiSelectDropdown";
import {
  User,
  Mail,
  Globe,
  Phone as PhoneIcon,
  Target,
  Link2,
  FileUp,
  NotebookPen,
  Briefcase,
  Clock,
  ShieldCheck,
  Layers,
  Calendar,
  Wallet,
  ArrowUpRight,
  CircleUserRound,
  Phone,
  DoorClosedLocked,
} from "lucide-react";

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
  primaryProperty: string;
  auditType: string[]; // now multi-select
  environment: string[]; // now multi-select
  techStack: string[];
  symptoms: string[];
  briefDescription: string;
  accessPlan: string[];
  deliverablesPreference: string; // renamed & single select
  links: string;
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

const auditTypeOptions: Option[] = [
  { label: "Technical SEO", value: "Technical SEO" },
  { label: "Performance", value: "Performance" },
  { label: "Accessibility", value: "Accessibility" },
  { label: "Security", value: "Security" },
  { label: "Code Quality", value: "Code Quality" },
  { label: "Cloud / Infrastructure", value: "Cloud / Infrastructure" },
  { label: "Analytics", value: "Analytics" },
];

const environmentOptions: Option[] = [
  { label: "Production", value: "Production" },
  { label: "Staging", value: "Staging" },
  { label: "Development", value: "Development" },
  { label: "Local only", value: "Local only" },
];

const techStackOptions: Option[] = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Node.js", value: "nodejs" },
  { label: "Laravel", value: "laravel" },
  { label: "Django", value: "django" },
];

const symptomsOptions: Option[] = [
  { label: "Slow pages", value: "Slow pages" },
  { label: "Error spikes", value: "Error spikes" },
  { label: "Crawl/indexing issues", value: "Crawl/indexing issues" },
  { label: "Outages", value: "Outages" },
  { label: "Failed deployments", value: "Failed deployments" },
  { label: "Security alerts", value: "Security alerts" },
  { label: "Conversion drop", value: "Conversion drop" },
  { label: "Other", value: "Other" },
];

const accessPlanOptions: Option[] = [
  { label: "I can provide read-only access", value: "I can provide read-only access" },
  { label: "Let’s start without access", value: "Let’s start without access" },
  { label: "Not sure yet", value: "Not sure yet" },
];

const deliverablesOptions: Option[] = [
  { label: "Written report only", value: "report_only" },
  { label: "Report + live walkthrough", value: "report_walkthrough" },
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
    reset,
    control,
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
      primaryProperty: "",
      auditType: [],
      environment: [],
      techStack: [],
      symptoms: [],
      briefDescription: "",
      accessPlan: [],
      deliverablesPreference: "",
      links: "",
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
    const [skills, setSkills] = useState<string[]>([]);
  

  React.useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      setValue("timeZone", tz, { shouldDirty: false });
    }
  }, [setValue]);

  const supportingFiles = watch("supportingFiles") || [];

  // Supporting files dropzone (multiple)
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
      "application/pdf": [],
      "image/*": [],
      "text/plain": [],
      "application/zip": [],
      "application/octet-stream": [],
    },
    maxSize: 50 * 1024 * 1024,
  });

  const removeSupportingFile = (index: number) => {
    const files = watch("supportingFiles") || [];
    files.splice(index, 1);
    setValue("supportingFiles", [...files], { shouldDirty: true });
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();
      formData.append("_subject", "Request Audit Form Submission");
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          // For arrays (multi-selects, files)
          if (value.length === 0) {
            formData.append(key, "");
          } else {
            value.forEach((item) => {
              if (item instanceof File) {
                formData.append(key, item);
              } else {
                formData.append(`${key}[]`, String(item));
              }
            });
          }
        } else {
          formData.append(key, String(value));
        }
      });

      const res = await fetch("https://formsubmit.co/requests@nexoristech.com", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

  setShowModal(true);
// React Hook Form
reset()
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
    <div className="my-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${
          isDark ? "darkModeBg" : "border border-gray-200"
        } space-y-6 rounded-2xl p-6 my-16`}
      >
        <div className="my-8">
          <DynamicContent type="h2" title="Tell Us About Project" />
          <DynamicContent type="h2" css="sm:hidden" title="Section A - About you" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2">
          {/* Full Name */}
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

          {/* Email */}
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
                    message: "Enter a valid email",
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

          {/* Company */}
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

          {/* Role / Title */}
          <div>
            <label className="block mb-1 font-medium">
              Role / Title<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<Briefcase size={20} />}>
              <input
                {...register("roleTitle", { required: "Role is required" })}
                className="w-full outline-none"
                placeholder="CTO, Product Manager..."
              />
            </InputWrapper>
            {errors.roleTitle && (
              <p className="text-red-500 text-sm mt-1">{errors.roleTitle.message}</p>
            )}
          </div>

          {/* Region */}
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

          {/* Time zone */}
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

        <DynamicContent type="h2" css="sm:hidden" title="Section B - Project overview" />

        <div className="flex flex-col gap-10">
          {/* Project objective */}
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

          {/* What are you building */}
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

          <DynamicContent type="h2" css="sm:hidden" title="Section C - What to audit" />

          {/* Primary property */}
          <div>
            <label className="block mb-1 font-medium">
              Primary property to audit<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<Link2 size={20} />}>
              <input
                {...register("primaryProperty", {
                  required: "Primary property is required",
                })}
                className="w-full outline-none"
                placeholder="https://example.com or github.com/org/repo"
              />
            </InputWrapper>
            {errors.primaryProperty && (
              <p className="text-red-500 text-sm mt-1">{errors.primaryProperty.message}</p>
            )}
          </div>

          {/* Audit Type - now multi-select */}
          <div>
            <Controller
              name="auditType"
              control={control}
              rules={{ required: "At least one audit type is required" }}
              render={({ field }) => (
                <MultiSelectDropdown
                  label="Audit type"
                  name="auditType"
                  required
                  value={field.value || []}
                  onChange={field.onChange}
                  options={auditTypeOptions}
                />
              )}
            />
            {errors.auditType && (
              <p className="text-red-500 text-sm mt-1">{errors.auditType.message}</p>
            )}
          </div>

          {/* Environment - now multi-select */}
          <div>
            <Controller
              name="environment"
              control={control}
              render={({ field }) => (
                <MultiSelectDropdown
                  label="Environment"
                  name="environment"
                  value={field.value || []}
                  onChange={field.onChange}
                  options={environmentOptions}
                />
              )}
            />
          </div>

          {/* Tech stack */}
          <div>
            <Controller
              name="techStack"
              control={control}
              render={({ field }) => (
                <MultiSelectDropdown
                  label="Tech Stack"
                  name="techStack"
                  value={field.value || []}
                  onChange={field.onChange}
                  options={techStackOptions}
                />
              )}
            />
          </div>

          {/* Symptoms */}
          <div>
            <Controller
              name="symptoms"
              control={control}
              rules={{ required: "At least one symptom is required" }}
              render={({ field }) => (
                <MultiSelectDropdown
                  label="Symptoms / Issues observed"
                  name="symptoms"
                  required
                  value={field.value || []}
                  onChange={field.onChange}
                  options={symptomsOptions}
                />
              )}
            />
            {errors.symptoms && (
              <p className="text-red-500 text-sm mt-1">{errors.symptoms.message}</p>
            )}
          </div>

          {/* Brief description */}
          <div>
            <label className="block mb-1 font-medium">
              Brief description<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<NotebookPen size={20} />}>
              <input
                {...register("briefDescription", { required: "Brief description is required" })}
                className="w-full outline-none"
                placeholder="Short summary of project..."
              />
            </InputWrapper>
            {errors.briefDescription && (
              <p className="text-red-500 text-sm mt-1">{errors.briefDescription.message}</p>
            )}
          </div>

          {/* Access Plan */}
           <div>
            <label className="block mb-1 font-medium">Access plan</label>
            <InputWrapper icon={<DoorClosedLocked size={20} />}>
              <select
                {...register("accessPlan")}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select</option>
                {accessPlanOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2">
          {/* Deliverables preference - now single select */}
          <div>
            <label className="block mb-1 font-medium">Deliverables preference</label>
            <InputWrapper icon={<FileUp size={20} />}>
              <select
                {...register("deliverablesPreference")}
                className={`w-full outline-none ${isDark ? "darkModeBg" : "bg-transparent"}`}
              >
                <option value="">Select preference</option>
                {deliverablesOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </InputWrapper>
          </div>

          {/* Links */}
          <div>
            <label className="block mb-1 font-medium">Links</label>
            <InputWrapper icon={<Link2 size={20} />}>
              <input
                {...register("links")}
                className="w-full outline-none"
                placeholder="https://…"
              />
            </InputWrapper>
          </div>
        </div>

        {/* Supporting Files */}
       <div className="mb-6">
        <label className="block mb-2 font-medium">Attach file to project</label>
        <div
          {...getSupportRoot()}
          className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition flex flex-col items-center gap-3 ${
            isSupportActive ? "border-blue-500 bg-blue-50" : "border-gray-400"
          }`}
        >
        <DynamicIcon name='CloudUpload' size={48} />
          <div>
            <input {...getSupportRoot()} />
        
            {supportingFiles && supportingFiles.length > 0 ? (
              <p className="text-green-600 font-medium">{supportingFiles[0].name} <button
                        type="button"
                        onClick={() => removeSupportingFile(0)}
                        className="text-sm pointer text-red-600 hover:underline ml-3"
                      >
                        Remove
                      </button></p>
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



        <div className="flex flex-col gap-10 hidden">
          <div>
            <label className="block mb-2 font-medium">Attach supporting docs</label>
            <div
              {...getSupportRoot()}
              className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition flex flex-col items-center gap-3 ${
                isSupportActive ? "border-blue-500 bg-blue-50" : "border-gray-400"
              }`}
            >
              <DynamicIcon name="CloudUpload" size={48} />
              <input {...getSupportInput()} />
              <p className="text-center">
                Drag & drop supporting files (images, logs, pdf, zip). Max 50 MB each. Up to 10 files.<br /><br />
                <span className="px-5 py-2 border rounded-full">Browse File</span>
              </p>

              {supportingFiles.length > 0 && (
                <div className="w-full mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {supportingFiles.map((f: File, i: number) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-white shadow-sm rounded p-2"
                    >
                      <div className="truncate text-sm">{f.name}</div>
                      <button
                        type="button"
                        onClick={() => removeSupportingFile(i)}
                        className="text-sm text-red-600 hover:underline ml-3"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <DynamicContent css="sm:hidden" type="h2" title="Section D - Constraints & success" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2">
          {/* Timeline urgency */}
          <div>
            <label className="block mb-1 font-medium">
              Timeline urgency<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<Calendar size={20} />}>
              <select
                {...register("timelineUrgency", { required: "Timeline is required" })}
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

          {/* Budget range */}
          <div>
            <label className="block mb-1 font-medium">
              Budget range<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<Wallet size={20} />}>
              <select
                {...register("budgetRange", { required: "Budget range is required" })}
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
            {errors.budgetRange && (
              <p className="text-red-500 text-sm mt-1">{errors.budgetRange.message}</p>
            )}
          </div>

          {/* Success definition */}
          <div>
            <label className="block mb-1 font-medium">What does success look like</label>
            <InputWrapper icon={<Target size={20} />}>
              <input
                {...register("successDefinition")}
                className="w-full outline-none"
                placeholder="Examples: sub-2s LCP, pass WCAG 2.2 AA, fix auth errors..."
              />
            </InputWrapper>
          </div>

          {/* Compliance needs */}
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

          <DynamicContent css="sm:hidden" type="h2" title="Section E – Collaboration" />

          {/* Preferred next step */}
          <div>
            <label className="block mb-1 font-medium">
              Preferred next step<span className="text-red-500">*</span>
            </label>
            <InputWrapper icon={<ArrowUpRight size={20} />}>
              <select
                {...register("preferredNextStep", { required: "Next step is required" })}
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
            {errors.preferredNextStep && (
              <p className="text-red-500 text-sm mt-1">{errors.preferredNextStep.message}</p>
            )}
          </div>

          {/* Availability for call */}
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

        <div className="flex flex-col gap-10">
          {/* Referral source */}
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
            <DynamicContent type="p" title="What you need to know:" css="font-semibold mb-4" />
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>We’ll use this information to respond to your request and prepare your technical audit.</li>
              <li>We’ll send occasional product updates and case studies.</li>
              <li>We reply quickly during business hours (WAT).</li>
            </ul>
          </div>

          {/* Consent */}
          <div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                {...register("consent", { required: "You must agree to the terms" })}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="consent" className="ml-2 block text-sm">
                I consent to Nexoris processing my information for the purpose of handling this audit request, in line with the{" "}
                <DynamicContent type="link" title="Privacy Policy" url="/privacy" css="underline" />.
              </label>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group m-0 w-full sm:w-fit hover:opacity-90 items-center justify-between gap-2 pointer font-medium rounded-full flex transition ${
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
              <div className="fixed inset-0 flex items-center z-100 justify-center bg-gray-600/40">
                {/* Close Button */}
        
      
                <div className="bg-white max-w-[350px] md:max-w-[600px] rounded-xl p-8 w-full text-center transform transition-transform duration-500 scale-100">
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
                  <h2 className="mt-10 text-2xl my-8 text-gray-900 font-bold mb-4">Thanks, your audit request is in</h2>
                  <p className="mt-2 text-gray-700 mb-5">
                 We have emailed a confirmation and we will review your details.<br />
If a quick discovery call makes sense you will receive a calendar invite shortly

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

export function TimeZoneSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: Record<string, Option[]>;
}) 

{
  const { isDark } = useDarkMode();
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full outline-none ${isDark ? " darkModeBg" : " bg-white"}`}
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