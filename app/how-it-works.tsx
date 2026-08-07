"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { CalendarCheck, Cat, Dog, PawPrint, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover Local Heroes",
    text: "Browse top-rated caregivers in your neighbourhood, with profiles and real reviews from pet owners.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Book with Confidence",
    text: "Choose your dates, chat with your caregiver and book securely through A About Pets.",
  },
  {
    number: "03",
    icon: PawPrint,
    title: "Relax & Receive Updates",
    text: "Enjoy peace of mind with messages, photos and videos shared through the app.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(rect.height + window.innerHeight * 0.2, 1);
      const next = Math.min(1, Math.max(0, (window.innerHeight * 0.78 - rect.top) / travel));
      setProgress(next);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeStep = progress < 0.33 ? 0 : progress < 0.67 ? 1 : 2;
  const style = { "--pet-progress": progress } as CSSProperties;

  return (
    <section className="how-section" id="how" ref={sectionRef} style={style}>
      <h2>A Simpler Way to Care</h2>
      <p className="how-intro">Three simple steps to professional pet care that feels like family.</p>

      <div className="steps-wrap">
        <div className="pet-track" aria-hidden="true">
          <span className="pet-runner pet-runner-dog"><Dog /></span>
          <span className="pet-runner pet-runner-cat"><Cat /></span>
        </div>
        <div className="steps">
          {steps.map(({ number, icon: Icon, title, text }, index) => (
            <article className={index <= activeStep ? "is-active" : ""} key={number}>
              <div className="step-visual">
                <span className="step-number" aria-hidden="true">{number}</span>
                <span className="step-icon"><Icon aria-hidden="true" /></span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
