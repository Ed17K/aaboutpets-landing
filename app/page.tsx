import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  CircleHelp,
  Dog,
  Headphones,
  Heart,
  HouseHeart,
  LockKeyhole,
  PawPrint,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";

const website = "https://aaboutpets.com/";

const services = [
  { icon: Dog, title: "Pet Sitting", text: "In-home pet sitting with loving, trusted caregivers." },
  { icon: PawPrint, title: "Dog Walking", text: "Happy walks and exercise while you’re away." },
  { icon: HouseHeart, title: "Home Visits", text: "Drop-in visits for feeding, playtime and more." },
  { icon: CarFront, title: "Pet Taxi", text: "Safe and comfortable rides to where they need to go." },
];

const prices = [
  { name: "Pet Sitting", from: "$28", unit: "/ night", desc: "Overnight care in your home.", note: "Includes updates & playtime" },
  { name: "Dog Walking", from: "$18", unit: "/ 30 mins", desc: "Fun and safe walks.", note: "Flexible durations" },
  { name: "Home Visits", from: "$16", unit: "/ visit", desc: "Feeding, play & basic care.", note: "Customisable to your pet’s needs" },
];

const faqs = [
  ["How do I know my pet and home are safe?", "Caregiver profiles include verification details, experience and reviews so you can make an informed choice before booking."],
  ["Can I meet the caregiver before booking?", "Yes. We encourage a meet-and-greet to make sure you, your pet and the caregiver are comfortable before care begins."],
  ["What happens if my plans change?", "Contact your caregiver as soon as possible and review the cancellation terms shown for your booking."],
  ["How do payments work?", "Booking and payment information is confirmed through the A About Pets platform before the service starts."],
];

function Logo() {
  return (
    <span className="logo" aria-label="A About Pets">
      <span className="logo-mark"><PawPrint size={19} aria-hidden="true" /></span>
      <span>A About Pets</span>
    </span>
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
          <a href="#safety">Safety</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="header-actions">
          <a className="button button-outline" href={website}>Become a Caregiver</a>
          <a className="button button-primary" href={website}>Find Pet Care</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>Trusted care<br />for every paw</h1>
          <p>Book reliable pet sitters, walkers and home visits across Singapore.</p>
          <div className="hero-actions">
            <a className="button button-primary button-wide" href={website}>Find Pet Care</a>
            <a className="button button-outline button-wide" href={website}>Become a Caregiver</a>
          </div>
          <div className="hero-trust">
            <span><BadgeCheck size={18} />Verified caregivers</span>
            <span><LockKeyhole size={18} />Secure bookings</span>
            <span><Headphones size={18} />Local support</span>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=1400&q=90"
            alt="Caregiver relaxing at home with happy pets"
            fill
            priority
            sizes="(max-width: 800px) 94vw, 52vw"
          />
        </div>
      </section>

      <section className="services" id="services" aria-label="Pet care services">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="service-card" key={title}>
            <Icon className="service-line-icon" size={66} strokeWidth={1.4} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="how-section" id="how">
        <h2>How it works</h2>
        <div className="steps">
          <article>
            <div className="step-visual"><span>1</span><div><CalendarDays /></div></div>
            <h3>Choose a service</h3>
            <p>Pick the care your pet needs<br />and tell us the details.</p>
          </article>
          <div className="step-line" aria-hidden="true" />
          <article>
            <div className="step-visual"><span>2</span><div><UserRound /></div></div>
            <h3>Meet your caregiver</h3>
            <p>We’ll match you with a verified<br />caregiver you can trust.</p>
          </article>
          <div className="step-line" aria-hidden="true" />
          <article>
            <div className="step-visual"><span>3</span><div><ShieldCheck /></div></div>
            <h3>Book with confidence</h3>
            <p>Confirm, pay securely, and relax<br />knowing your pet is in good hands.</p>
          </article>
        </div>
      </section>

      <section className="safety-section" id="safety">
        <div className="safety-copy">
          <h2>Care you can count on</h2>
          <div className="safety-item"><span><BadgeCheck /></span><div><h3>Identity verified caregivers</h3><p>All caregivers go through rigorous identity and background verification.</p></div></div>
          <div className="safety-item"><span><Star /></span><div><h3>Transparent reviews</h3><p>Real reviews from pet parents help you choose with confidence.</p></div></div>
          <div className="safety-item"><span><Headphones /></span><div><h3>Local support, always</h3><p>Our friendly team in Singapore is here to help, whenever you need us.</p></div></div>
        </div>
        <div className="singapore-photo">
          <Image src="https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1400&q=88" alt="Singapore skyline at Marina Bay" fill sizes="(max-width: 800px) 94vw, 52vw" />
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <h2>Fair pricing, no fine print</h2>
        <div className="price-grid">
          {prices.map((price) => (
            <article className="price-card" key={price.name}>
              <h3>{price.name}</h3>
              <small>From</small>
              <div className="price"><strong>{price.from}</strong><span>{price.unit}</span></div>
              <p>{price.desc}</p>
              <div className="price-note"><Check size={15} />{price.note}</div>
            </article>
          ))}
        </div>
        <a className="pricing-link" href={website}>View full pricing <ArrowRight size={16} /></a>
      </section>

      <section className="faq-section" id="faq">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<ChevronDown size={17} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <PawPrint className="cta-paw cta-paw-left" aria-hidden="true" />
        <Heart className="cta-heart cta-heart-left" aria-hidden="true" />
        <Dog className="cta-dog cta-dog-left" aria-hidden="true" />
        <HouseHeart className="cta-house" aria-hidden="true" />
        <PawPrint className="cta-paw cta-paw-right" aria-hidden="true" />
        <Heart className="cta-heart cta-heart-right" aria-hidden="true" />
        <div>
          <h2>Ready to find trusted pet care?</h2>
          <p>Join thousands of pet parents across Singapore.</p>
          <a className="button button-primary cta-button" href={website}>Find Pet Care</a>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand"><Logo /><p>Reliable pet care. Happy pets.<br /><br />Peace of mind for pet parents<br />across Singapore.</p></div>
          <div><h3>Services</h3><a href="#services">Pet Sitting</a><a href="#services">Dog Walking</a><a href="#services">Home Visits</a><a href="#services">Pet Taxi</a></div>
          <div><h3>Company</h3><a href="#how">How It Works</a><a href="#safety">Safety</a><a href="#pricing">Pricing</a><a href={website}>Become a Caregiver</a></div>
          <div><h3>Support</h3><a href="#faq">Help Centre</a><a href={website}>Contact Us</a><a href={website}>Terms of Service</a><a href={website}>Privacy Policy</a></div>
          <div><h3>Follow us</h3><div className="socials"><a href={website} aria-label="Facebook"><span aria-hidden="true">f</span></a><a href={website} aria-label="Instagram"><span aria-hidden="true">◎</span></a><a href={website} aria-label="Help"><CircleHelp /></a></div></div>
        </div>
        <div className="copyright">© 2026 A About Pets. All rights reserved.</div>
      </footer>
    </main>
  );
}
