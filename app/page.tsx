import Image from "next/image";
import HowItWorks from "./how-it-works";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  CircleHelp,
  Dog,
  Headphones,
  Heart,
  HouseHeart,
  MapPin,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Star,
  Video,
} from "lucide-react";

const website = "https://aaboutpets.com/";
const appStore = "https://apps.apple.com/sg/app/a-about-pets/id6755103989";
const googlePlay = "https://play.google.com/store/apps/details?id=com.aaboutpets.app";

const services = [
  { icon: HouseHeart, title: "Boarding", text: "Overnight, cage-free care in a verified caregiver’s home." },
  { icon: PawPrint, title: "House Sitting", text: "Drop-in visits or overnight stays in your pet’s familiar home." },
  { icon: Heart, title: "Day Care", text: "Daytime play, socialisation and companionship while you are busy." },
  { icon: Dog, title: "Pet Walking", text: "Agreed walks and outdoor activity tailored to your pet’s routine." },
];

const benefits = [
  { icon: Video, title: "Innovation Meets Trust", text: "Connect face-to-face through integrated video calls and tour the care environment virtually before booking." },
  { icon: Star, title: "Fair Pricing That Benefits Everyone", text: "Competitive rates designed to work for both pet owners and caregivers." },
  { icon: ShieldCheck, title: "Safety and Convenience", text: "Identity-verified caregivers, secure in-app communication and straightforward booking." },
  { icon: Headphones, title: "Dedicated live support", text: "Get real-time assistance from the A About Pets team when needed." },
];

const faqs = [
  ["How does A About Pets work for pet owners?", "Download the app and browse caregiver profiles by your needs, location and availability. Compare experience, services and reviews, use secure in-app chat to align expectations, then book and pay through A About Pets."],
  ["How can I become a caregiver on A About Pets?", "List a service that complies with Singapore requirements, complete eKYC identity verification and pass the Pet Caregiver Introduction Test."],
  ["Can one account be used as both pet owner and caregiver?", "Yes. The same A About Pets account can be used in both roles."],
];

function Logo() {
  return (
    <span className="logo" aria-label="A About Pets">
      <Image src="/images/a-about-pets-logo.png" alt="A About Pets" width={438} height={154} priority />
    </span>
  );
}

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M17.05 12.54c.02-2.18 1.78-3.23 1.86-3.28a4 4 0 0 0-3.15-1.7c-1.33-.14-2.62.8-3.3.8-.7 0-1.75-.78-2.89-.76a4.2 4.2 0 0 0-3.53 2.15c-1.53 2.65-.39 6.55 1.08 8.69.74 1.05 1.6 2.23 2.74 2.19 1.11-.05 1.52-.7 2.85-.7 1.32 0 1.7.7 2.86.67 1.2-.02 1.94-1.05 2.65-2.11a8.7 8.7 0 0 0 1.21-2.47 3.77 3.77 0 0 1-2.38-3.48ZM14.89 6.15a3.84 3.84 0 0 0 .88-2.75 3.9 3.9 0 0 0-2.55 1.3 3.63 3.63 0 0 0-.91 2.65 3.23 3.23 0 0 0 2.58-1.2Z" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg viewBox="0 0 32 36" aria-hidden="true">
      <path fill="#00d7fe" d="M2.2 1.7 18.8 18 2.2 34.3A3.7 3.7 0 0 1 1 31.5v-27c0-1.1.4-2 1.2-2.8Z" />
      <path fill="#00ef84" d="m2.2 1.7 21.1 12-4.5 4.3L2.2 1.7Z" />
      <path fill="#ffdf00" d="m18.8 18 4.5-4.3 5.1 2.9c1 .6 1 2.2 0 2.8l-5.1 2.9-4.5-4.3Z" />
      <path fill="#ff495c" d="m2.2 34.3 21.1-12-4.5-4.3L2.2 34.3Z" />
    </svg>
  );
}

function AppBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`app-badges${compact ? " app-badges-compact" : ""}`} aria-label="Download the A About Pets app">
      <a className="store-badge" href={appStore} target="_blank" rel="noreferrer" aria-label="Download A About Pets on the App Store">
        <AppleLogo />
        <span><small>Download on the</small><strong>App Store</strong></span>
      </a>
      <a className="store-badge" href={googlePlay} target="_blank" rel="noreferrer" aria-label="Get A About Pets on Google Play">
        <PlayLogo />
        <span><small>GET IT ON</small><strong>Google Play</strong></span>
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a href="#top"><Logo /></a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#how">How It Works</a>
          <a href="#safety">Why Us</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <a className="button button-outline" href="#caregivers">Become a Caregiver</a>
          <a className="button button-primary" href="#download">Download App</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Pet care across Singapore</span>
          <h1>Peace of mind for you. A second home for them.</h1>
          <p>Connect with locally vetted caregivers for boarding, house sitting, day care and pet walking—all from the A About Pets app.</p>
          <AppBadges />
          <div className="hero-trust">
            <span><BadgeCheck size={19} />eKYC-verified caregivers</span>
            <span><Video size={19} />Integrated video calls</span>
            <span><MessageCircle size={19} />In-app updates</span>
          </div>
        </div>
        <div className="hero-photo">
          <Image src="/images/hero-caregiver-pets.jpg" alt="Caregiver relaxing at home with happy pets" fill priority sizes="(max-width: 800px) 94vw, 52vw" />
        </div>
      </section>

      <section className="section-heading" id="services">
        <span className="eyebrow">Care for every paw</span>
        <h2>Pet care that fits your routine</h2>
        <p>Flexible, home-based care options tailored to your pet and schedule.</p>
      </section>
      <section className="services" aria-label="Pet care services">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="service-card" key={title}>
            <span className="icon-disc"><Icon size={38} strokeWidth={1.7} aria-hidden="true" /></span>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </section>

      <HowItWorks />

      <section className="safety-section" id="safety">
        <div className="safety-copy">
          <span className="eyebrow">Where we are right now</span>
          <h2>Proudly serving pet parents across Singapore</h2>
          <p className="section-intro">From the CBD to the heartlands, find trusted caregivers in your community.</p>
          <div className="safety-item"><span><MapPin /></span><div><h3>Island-wide coverage</h3><p>Search for boarding and caregivers by location and availability.</p></div></div>
          <div className="safety-item"><span><BadgeCheck /></span><div><h3>Locally vetted caregivers</h3><p>Caregivers complete eKYC identity verification and a platform introduction test.</p></div></div>
        </div>
        <div className="singapore-photo"><Image src="/images/singapore-marina-bay.jpg" alt="Singapore skyline at Marina Bay" fill sizes="(max-width: 800px) 94vw, 52vw" /></div>
      </section>

      <section className="benefits-section">
        <div className="section-heading"><span className="eyebrow">What sets us apart</span><h2>Transparency, safety and community</h2></div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => <article className="benefit-card" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p><span><Check size={15} /> Built into A About Pets</span></article>)}
        </div>
      </section>

      <section className="caregiver-section" id="caregivers">
        <div><span className="eyebrow">For caregivers</span><h2>Love pets? Turn your passion into income.</h2><p>Join Singapore’s pet care community with flexible hours, competitive rates and one of the lowest platform fees in Singapore.</p><a className="text-link" href={website}>Learn how to become a caregiver <ArrowRight size={17} /></a></div>
        <div><h3>Start with the A About Pets app</h3><AppBadges compact /></div>
      </section>

      <section className="faq-section" id="faq">
        <span className="eyebrow">Help centre</span><h2>Frequently asked questions</h2>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div>
        <a className="text-link faq-link" href="https://aaboutpets.com/faq.html">See full FAQ <ArrowRight size={17} /></a>
      </section>

      <section className="final-cta" id="download">
        <div className="cta-copy"><span className="eyebrow">Care for your pet, wherever you are</span><h2>Ready to Give Your Pet the Best? <em>Download the App</em></h2><p>Unlock pet care at your fingertips. Discover locally vetted caregivers, book secure services and receive real-time updates from your smartphone.</p><AppBadges /></div>
        <div className="phone-art" aria-label="A About Pets mobile app screens">
          <Image src="/images/a-about-pets-app-phones.png" alt="A About Pets app shown on two phones" fill sizes="(max-width: 800px) 92vw, 48vw" />
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand"><Logo /><p>Elevating pet care standards in Singapore. Peace of mind for you, a second home for them.</p></div>
          <div><h3>Services</h3><a href="#services">Boarding</a><a href="#services">House Sitting</a><a href="#services">Day Care</a><a href="#services">Pet Walking</a></div>
          <div><h3>Company</h3><a href="#how">How It Works</a><a href="#safety">Why Us</a><a href="#caregivers">For Caregivers</a><a href="https://aaboutpets.com/faq.html">Help Centre</a></div>
          <div><h3>Legal</h3><a href="https://aaboutpets.com/privacy-policy.html">Privacy Policy</a><a href="https://aaboutpets.com/terms-of-use.html">Terms of Service</a><a href="mailto:askaap@aaboutpets.com">Contact Support</a></div>
          <div><h3>Get the app</h3><AppBadges compact /><a className="support-link" href="mailto:askaap@aaboutpets.com"><CircleHelp size={16} /> askaap@aaboutpets.com</a></div>
        </div>
        <div className="copyright">© 2026 A About Pets Pte. Ltd. All rights reserved. Made with care in Singapore.</div>
      </footer>
    </main>
  );
}
