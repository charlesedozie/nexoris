import {
  PenTool,
  Settings,
  Rocket,
  Wrench,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import type { ReactNode } from "react"

type Item = {
  bold: string
  text: string
}

type StepProps = {
  icon: ReactNode
  title: string
  items?: Item[]
  description?: string
}

/* ---------------- Main ---------------- */

export default function ProcessFlow() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative space-y-24">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <Step
            icon={<PenTool size={18} />}
            title="Plan & Design"
            items={[
              {
                bold: "Product Design & Management:",
                text:
                  "Clear goals, scope, roadmap, and success metrics. Alignment across teams and a plan for delivery.",
              },
              {
                bold: "UI/UX Design & Consulting:",
                text:
                  "User journeys, wireframes, and clean screens developers can build without guesswork.",
              },
            ]}
          />

          <Step
            icon={<Settings size={18} />}
            title="Build"
            items={[
              {
                bold: "Web Development:",
                text:
                  "Fast, secure sites that load quickly, rank well, and convert.",
              },
              {
                bold: "Mobile App Development:",
                text:
                  "Stable apps that perform on low data and older devices.",
              },
              {
                bold: "Custom Software:",
                text:
                  "Internal tools and APIs that replace manual steps and connect to your systems.",
              },
            ]}
          />
        </div>

        {/* ARROW DOWN RIGHT */}
        <Arrow className="mx-auto rotate-90 md:translate-x-[220px]" />

        {/* CENTER */}
        <div className="flex justify-center">
          <Step
            icon={<Rocket size={18} />}
            title="Launch"
            description="We ship in steady steps, manage releases, set up analytics, and share short guides so your team can run from day one."
          />
        </div>

        {/* ARROW DOWN LEFT */}
        <Arrow className="mx-auto rotate-90 md:-translate-x-[220px]" />

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <Step
            icon={<Wrench size={18} />}
            title="Maintenance & Support"
            items={[
              {
                bold: "Website Maintenance & Support:",
                text:
                  "Updates, monitoring, backups, and quick fixes to keep you online.",
              },
              {
                bold: "Nexoris Cloud Solutions:",
                text:
                  "Managed NVMe hosting and VPS so product and infrastructure stay under one trusted team.",
              },
            ]}
          />

          <Step
            icon={<TrendingUp size={18} />}
            title="Improve & Grow"
            items={[
              {
                bold: "SEO & Content Marketing:",
                text:
                  "Fix technical issues and publish useful content that builds steady search traffic.",
              },
              {
                bold: "Digital Transformation Consulting:",
                text:
                  "Remove bottlenecks, cut costs, and improve delivery speed.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Components ---------------- */

function Step({ icon, title, items, description }: StepProps) {
  return (
    <div className="mx-auto max-w-sm text-center md:text-left">
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white md:mx-0 dark:bg-indigo-500">
        {icon}
      </div>

      <h3 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}

      {items && (
        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
          {items.map((item, i) => (
            <li key={i}>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {item.bold}
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <ArrowRight className="text-gray-300 dark:text-gray-600" />
    </div>
  )
}
