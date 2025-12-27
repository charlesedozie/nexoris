"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import DynamicContent, {Counter, DynamicIcon} from "@/components/cards"

const blogs = [
{
title: "Top 10 Mistakes Students Make While Revising",
teaser: "Avoid these common pitfalls to save time and improve your results.",
body: "Students often waste time on passive reading instead of active recall. Others cram the night before or avoid past questions. Here are the top 10 mistakes and how you can avoid them Students often waste time on passive reading instead of active recall. Others cram the night before or avoid past questions. Here are the top 10 mistakes and how you can avoid them...",
image: "/blog7.webp",
author: "Rose Eze",
publishDate: "2025-08-14",
},
{
title: "Migrating to Linear 101",
teaser: "Lorem ipsum tincidunt amet massa viverra varius odio eget nullam mi non netus nunc facilisis lacus arcu elit fringilla mattis dolor habitant",
body: "It’s easy to burn out when you only focus on academics. Balancing your studies with a healthy social life is key to long-term success. By managing your time with a planner, setting priorities, and learning to say no, you can create a lifestyle that keeps you both motivated and connected...",
image: "/blog1.webp",
author: "James Park",
publishDate: "4 Aug 2025",
},
{
title: "Migrating to Linear 101",
teaser: "Learn how to stay productive while still enjoying time with friends and family.",
body: "It’s easy to burn out when you only focus on academics. Balancing your studies with a healthy social life is key to long-term success. By managing your time with a planner, setting priorities, and learning to say no, you can create a lifestyle that keeps you both motivated and connected...",
image: "/blog.webp",
author: "James Park ",
publishDate: "4 Aug 2025",
},
{
title: "Why Mock Exams Matter",
teaser: "Don’t skip your mocks! Here’s why they’re essential for success.",
body: "Mock exams are more than just a practice run—they help you identify weaknesses early, build confidence, and reduce anxiety before the real thing. Taking them seriously exam...",
image: "/blog.webp",
author: "Roseline Brown",
publishDate: "2025-08-12",
},



{
title: "5 Study Hacks to Ace Your Exams",
teaser: "Discover proven strategies to boost your focus and retain more in less time.",
body: "Preparing for exams like WAEC, NECO, or JAMB can feel overwhelming. But with the right study hacks—like active recall, spaced repetition, and group quizzes—you can maximize your learning and minimize stress...",
image: "/blog4.webp",
author: "Bruce Wills",
publishDate: "2025-08-01",
},
{
title: "Balancing School and Social Life",
teaser: "Learn how to stay productive while still enjoying time with friends and family.",
body: "It’s easy to burn out when you only focus on academics. Balancing your studies with a healthy social life is key to long-term success...",
image: "/blog5.webp",
author: "Adaeze Nwosu",
publishDate: "2025-08-05",
},
{
title: "Why Mock Exams Matter",
teaser: "Don’t skip your mocks! Here’s why they’re essential for success.",
body: "Mock exams are more than just a practice run—they help you identify weaknesses early, build confidence, and reduce anxiety before the real thing...",
image: "/blog6.webp",
author: "Tunde Akinyemi",
publishDate: "2025-08-12",
},

{
title: "Creating the Perfect Study Environment",
teaser: "Your environment affects your learning more than you think.",
body: "Noise, clutter, and distractions can kill productivity. Learn how to set up a distraction-free, motivating study environment that helps you stay focused...",
image: "/blog8.webp",
author: "Ibrahim Musa",
publishDate: "2025-08-16",
},
{
title: "Using Technology to Boost Your Learning",
teaser: "Turn your phone into a learning tool instead of a distraction.",
body: "Educational apps, flashcard tools, and online platforms can make studying more effective. This article highlights the best tools for Nigerian students preparing for exams...",
image: "/blog1.webp",
author: "Maryam Bello",
publishDate: "2025-08-18",
},
{
title: "The Science of Memory: How to Remember More",
teaser: "Memory is a skill. Train it and retain more knowledge.",
body: "From chunking information to the memory palace technique, science-backed strategies can help you retain more information for your exams...",
image: "/blog2.webp",
author: "Chinedu Okafor",
publishDate: "2025-08-20",
},
{
title: "Morning vs Night Study: Which Works Best?",
teaser: "Find out if you’re an early bird or a night owl learner.",
body: "Some students perform best in the morning, others at night. We’ll explore the pros and cons of each and how to find your personal peak performance time...",
image: "/blog3.webp",
author: "Aisha Mohammed",
publishDate: "2025-08-22",
},
{
title: "How to Stay Motivated During Exam Prep",
teaser: "Motivation dips are normal. Here’s how to bounce back.",
body: "Whether it’s setting small goals, rewarding yourself, or joining a study group, there are strategies to keep your motivation levels high throughout your exam journey...",
image: "/blog4.webp",
author: "Samuel Adeyemi",
publishDate: "2025-08-23",
},
{
title: "Why Group Study Works (and When It Doesn’t)",
teaser: "Study crews can be powerful—but only if done right.",
body: "Group study helps with accountability and explaining difficult topics. But without focus, it can waste time. Learn how to get the best out of study groups...",
image: "/blog5.webp",
author: "Esther Umeh",
publishDate: "2025-08-24",
},
{
title: "Healthy Eating for Sharp Brains",
teaser: "Fuel your brain with the right foods before exams.",
body: "What you eat directly impacts your focus and energy. Foods like nuts, fish, and fruits can help memory retention. Avoid heavy, sugary meals before study sessions...",
image: "/blog6.webp",
author: "Bola Johnson",
publishDate: "2025-08-25",
},
{
title: "Managing Exam Anxiety",
teaser: "Don’t let nerves ruin your hard work.",
body: "Exam stress is real. Breathing exercises, positive self-talk, and practice exams are proven ways to reduce anxiety and perform at your best...",
image: "/blog7.webp",
author: "Grace Danladi",
publishDate: "2025-08-26",
},
{
title: "How Parents Can Support Their Kids During Exams",
teaser: "Parents play a huge role in students’ success.",
body: "Parents can encourage healthy routines, provide quiet study spaces, and give emotional support during exam preparation. Here’s a guide for parents...",
image: "/blog8.webp",
author: "David Oladipo",
publishDate: "2025-08-27",
},
{
title: "Balancing Multiple Subjects",
teaser: "Here’s how to avoid neglecting one subject while focusing on another.",
body: "It’s easy to over-focus on your favorite subject and ignore the others. Learn timeboxing and rotation methods to balance multiple exam subjects...",
image: "/blog1.webp",
author: "Kemi Aluko",
publishDate: "2025-08-28",
},
{
title: "How Music Affects Your Studying",
teaser: "Should you listen to music while studying? The science is in.",
body: "Some music improves concentration, while others distract. Classical and lo-fi beats are great for focus. Lyrics-heavy songs might do the opposite...",
image: "/blog2.webp",
author: "Emeka Obi",
publishDate: "2025-08-29",
},
{
title: "The Power of Flashcards",
teaser: "Simple, effective, and time-tested.",
body: "Flashcards make active recall easy. They’re perfect for memorizing formulas, vocabulary, and key points. Here’s how to create and use them effectively...",
image: "/blog3.webp",
author: "Zainab Ali",
publishDate: "2025-08-30",
},
{
title: "Why Sleep is the Best Study Tool",
teaser: "All-nighters are overrated. Sleep boosts memory.",
body: "Deep sleep helps your brain consolidate knowledge. Learn why sleeping 7–8 hours during exam season improves recall better than cramming...",
image: "/blog4.webp",
author: "Joseph Etim",
publishDate: "2025-08-31",
},
{
title: "How to Use Past Questions Effectively",
teaser: "They’re more than practice—they’re a blueprint.",
body: "Past questions show you the patterns examiners use. But simply memorizing isn’t enough—learn how to analyze and adapt them...",
image: "/blog5.webp",
author: "Chika Nnamdi",
publishDate: "2025-09-01",
},
{
title: "Digital vs Paper Notes",
teaser: "Which note-taking style helps you learn better?",
body: "Typing is fast, but handwritten notes improve memory retention. We’ll explore when to use digital tools and when paper works best...",
image: "/blog6.webp",
author: "Fatima Sule",
publishDate: "2025-09-02",
},
{
title: "Top Apps for Nigerian Students",
teaser: "From quiz apps to planners—boost your productivity.",
body: "We’ve reviewed the best study apps Nigerian students love, from offline dictionaries to flashcard apps and time trackers...",
image: "/blog7.webp",
author: "Oluwaseun Adebanjo",
publishDate: "2025-09-03",
},
{
title: "How to Stay Consistent with Study Routines",
teaser: "Consistency beats intensity every time.",
body: "Instead of long weekend cramming, daily 1-hour focused sessions work better. Learn how to build consistent study habits that stick...",
image: "/blog8.webp",
author: "Mariam Hassan",
publishDate: "2025-09-04",
},
{
title: "Making the Most of Short Study Breaks",
teaser: "5-minute breaks can refresh your brain.",
body: "The Pomodoro technique and micro-breaks help keep focus sharp. Find out how to use breaks to recharge without losing momentum...",
image: "/blog1.webp",
author: "Kelvin Uzo",
publishDate: "2025-09-05",
},
{
title: "The Role of Exercise in Academic Success",
teaser: "Move your body, sharpen your mind.",
body: "Exercise boosts blood flow to the brain, reduces stress, and improves focus. Even a 20-minute walk before study sessions can help...",
image: "/blog2.webp",
author: "Sophia Chukwu",
publishDate: "2025-09-06",
},
];



export default function BlogList() {
const [visibleCount, setVisibleCount] = useState(5); // initial items
const [loading, setLoading] = useState(false);
const [filters, setFilters] = useState<string[]>([]);

const loadMore = () => {
setLoading(true);

setTimeout(() => {
setVisibleCount((prev) => Math.min(prev + 5, blogs.length));
setLoading(false);
}, 3000); // 3-second spinner
};

const FILTER_BUTTONS = [
"Remote",
"Full-time",
"Part-time",
"Internship",
"Contract",
"On-site",
"Design",
"Engineering",
"Marketing",
];

const clearFilters = () => {
setFilters([]); // remove all
};
const toggleFilter = (filter: string) => {
setFilters((prev) =>
prev.includes(filter)
? prev.filter((f) => f !== filter) // remove it
: [...prev, filter] // add it
);};

return (
<>

{/* Scrollable Filter Items */}
<div className="flex gap-3 overflow-x-auto scrollbar-hide py-2 mb-6">
{/* VIEW ALL / CLEAR FILTERS */}
<button
onClick={clearFilters}
aria-label="CLEAR FILTERS" 
className={`px-4 py-2 rounded-full text-sm font-medium transition pointer border border-gray-300
`}
>
All
</button>

{/* FILTER BUTTONS */}
{FILTER_BUTTONS.map((label) => {
const isActive = filters.includes(label);

return (
<div
key={label}
onClick={() => toggleFilter(label)}
className={`
px-4 py-2 flex items-center justify-center
rounded-full text-sm font-medium cursor-pointer shrink-0 whitespace-nowrap
transition hover:bg-gray-300
${
isActive
? "bg-[#543CDA] text-white"
: "border border-gray-300"
}
`}
>
{label}
</div>
);
})}
</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{blogs.slice(0, visibleCount).map((blog, index) => (
<div key={index} className="p-4 border border-gray-200 rounded-lg">
<div className="relative w-full max-w-xl rounded-2xl overflow-hidden">
{/* Floating tag */}
<span className="absolute top-4 left-4 z-10 bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">Marketing</span>

{/* Image */}
<DynamicContent type="img" src='/seo.webp' css="h-auto w-auto" teaser={`Cloud Solutions`} />
</div>
<div className="mt-3"><DynamicContent css='font-semibold' type="p4" title={blog.title} /></div>    


<p className="text-gray-700 text-sm my-2">{blog.teaser}</p>
<hr className="border-t border-gray-200 mt-4" />
<div className="flex justify-between items-center">
<div>
<div className="flex items-center gap-3 my-6">
<img
src={`https://i.pravatar.cc/150?img=67`}
alt="temp name"
className="w-10 h-10 rounded-full object-cover flex-shrink-0"
/>
<span className="truncate text-sm">{blog.author} <br />27 Aug, 2025 * 4 min read</span>
</div>
</div>
<div>
<DynamicIcon name='ArrowUpRight' className="w-10 h-10 text-white bg-gray-900 rounded-full p-2 flex-shrink-0" />
</div>
</div>
</div>
))}
</div>

{visibleCount < blogs.length && (
<div className="flex justify-center my-12">
<button
onClick={loadMore}
disabled={loading}
aria-label="Load more" 
className="px-6 py-2 rounded-full transition flex items-center gap-2 border cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-[#543CDA]"
>
{loading && (
<div className="flex items-center justify-center">
<div className="w-6 h-6 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
</div>
)}
{loading ? "Loading..." : "Load More"}
</button>
</div>
)}
</>
);
}