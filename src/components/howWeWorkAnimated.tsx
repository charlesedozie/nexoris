import React, { useEffect, useRef } from 'react';
import { Check, CalendarDays } from 'lucide-react';
import DynamicContent, {useDarkMode} from "@/components/cards"

const HowWeWork: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const vlineRef = useRef<HTMLDivElement>(null);
  const { isDark } = useDarkMode();

  useEffect(() => {
    if (!timelineRef.current || !vlineRef.current) return;

    const timeline = timelineRef.current;
    const vline = vlineRef.current;

    function updateVerticalLine() {
      const circles = Array.from(timeline.querySelectorAll('.step-circle')) as HTMLElement[];
      if (!circles.length) return;

      const containerRect = timeline.getBoundingClientRect();
      const first = circles[0].getBoundingClientRect();
      const last = circles[circles.length - 1].getBoundingClientRect();

      const firstCenterY = (first.top + first.bottom) / 2 - containerRect.top;
      const lastCenterY = (last.top + last.bottom) / 2 - containerRect.top;

      const circleRadius = first.height / 2;

      const lineTop = firstCenterY + (circleRadius * 0.5);
      const lineBottom = lastCenterY - (circleRadius * 0.5);
      const height = Math.max(0, lineBottom - lineTop);

      vline.style.top = Math.round(lineTop) + 'px';
      vline.style.height = Math.round(height) + 'px';

      if (window.innerWidth <= 900) {
        vline.style.left = '30px';
        vline.style.transform = 'none';
      } else {
        vline.style.left = '50%';
        vline.style.transform = 'translateX(-50%)';
      }
    }

    let rafId: number | null = null;
    function scheduledUpdate() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateVerticalLine();
        rafId = null;
      });
    }

    scheduledUpdate();

    if (document.readyState === 'complete') {
      scheduledUpdate();
    }

    window.addEventListener('resize', scheduledUpdate);

    const obs = new MutationObserver(scheduledUpdate);
    obs.observe(timeline, { childList: true, subtree: true, attributes: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', scheduledUpdate);
      obs.disconnect();
    };
  }, []);

  const steps = [
    {
      number: 1,
      side: 'left' as const,
      title: 'Discover',
      description: 'We map goals, constraints, users, and success criteria.',
      deliverables: ['Project brief', 'IA sketch', 'Initial plan'],
      icon: '/search-icon.webp',
    },
    {
      number: 2,
      side: 'right' as const,
      title: 'Design',
      description: 'We shape user flows, content outlines, and system structures with accessibility in mind.',
      deliverables: ['Prototype', 'Editorial outline', 'Acceptance criteria'],
      icon: '/wand.webp',
    },
    {
      number: 3,
      side: 'left' as const,
      title: 'Build',
      description: 'We develop in structured sprints, releasing in versions and running quality checks.',
      deliverables: ['Tested features', 'Documented releases', 'Change logs'],
      icon: '/rack.webp',
    },
    {
      number: 4,
      side: 'right' as const,
      title: 'Run & Grow',
      description: 'We host, monitor, and improve — from NVMe hosting & security to content updates & optimization.',
      deliverables: ['Monthly report', 'Live monitoring', 'Backlog', 'Growth plan'],
      icon: '/grow.webp',
    },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-5 py-10 box-border z-3">
      <div
        ref={timelineRef}
        className="relative flex flex-col gap-[60px] mt-[20px] py-[20px] max-[900px]:gap-[60px]"
        id="timeline"
      >
        <div
          ref={vlineRef}
          className="absolute left-1/2 w-[2px] bg-gray-400 translate-x-[-50%] z-0 max-[900px]:hidden"
          id="verticalLine"
        />

        {steps.map((step) => (
          <div
            key={step.number}
            className={`timeline-item ${step.side} relative flex items-center min-h-[140px] max-[900px]:flex-col max-[900px]:items-center max-[900px]:min-h-0 max-[900px]:justify-start ${
              step.side === 'left' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className="step-circle absolute left-1/2 top-1/2 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white text-black font-bold text-[18px] z-[3] shadow-[0_6px_18px_rgba(0,0,0,0.25)] translate-x-[-50%] translate-y-[-50%] max-[900px]:!relative max-[900px]:!left-0 max-[900px]:!top-0 max-[900px]:!translate-x-0 max-[900px]:!translate-y-0 max-[900px]:mx-auto max-[900px]:mt-0 max-[900px]:mb-[24px] bg-gray-200"
            >
              {step.number}
            </div>

            <div
              className="line-connector absolute top-1/2 h-[2px] bg-gray-400 max-[900px]:hidden"
              style={
                step.side === 'left'
                  ? { left: '8%', right: 'calc(50% + 30px)' }
                  : { left: 'calc(50% + 30px)', right: '8%' }
              }
            />

            <div className={`card relative w-[46%] rounded-[14px] px-[22px] py-5 pb-[28px] ${isDark ? "darkModeBg darkModeText" : "bg-gray-100"}  max-[900px]:w-full max-[900px]:mt-0 z-4`}>
              <div className="absolute top-[14px] right-[16px] bg-[#DDD8F8] text-[#402bff] px-[12px] py-[6px] rounded-full text-[13px] inline-flex items-center gap-[8px]">
                <i className="fa fa-calendar" aria-hidden="true" />
               <span className="flex items-center gap-3 whitespace-nowrap text-[#101116] text-[13px]">
  <CalendarDays className="w-4 h-4" />
  <span>Duration</span>
</span>

              </div>
              <DynamicContent type="p3" title={step.title} css="m-0 mb-[8px] text-[20px] font-bold" />
              <p className="m-0 mb-[10px] leading-[1.5] text-[14px]">{step.description}</p>
              <div className="deliverables mt-[10px]">
                <h4 className="m-[8px_0] text-[15px] font-semibold">Deliverables:</h4>
                <ul className="list-none m-0 p-0 space-y-1.5">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-[8px] m-[6px_0] text-[14px]">
                      <Check className="w-4 h-4 text-gray-600 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
<div className="pointer-events-none absolute bottom-4 right-4 w-[90px] max-w-[30%]">
  <DynamicContent
    type="img"
    src={step.icon}
    teaser={step.title}
    css="w-full h-auto object-contain"
  />
</div> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;