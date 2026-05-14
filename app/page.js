import Image from "next/image";
import ContactForm from "../components/ContactForm";
import RevealOnScroll from "../components/RevealOnScroll";
import ReviewCarousel from "../components/ReviewCarousel";
import { galleryImages, reviews } from "../data/reviews";

const services = [
  {
    title: "Late-night roadside assistance",
    text: "Emergency help around Nashville when your car leaves you stranded. Roadside assistance is priced at $3 per mile, with many Nashville-area calls reached in about 45-60 minutes.",
    featured: true
  },
  {
    title: "Mobile diagnostics",
    text: "Warning lights, no-start conditions, battery issues, cooling system concerns, and hard-to-track problems diagnosed on-site."
  },
  {
    title: "Mobile repairs",
    text: "On-site repair work for common failures so you can avoid a tow whenever possible."
  },
  {
    title: "Oil change service",
    text: "Oil changes start at $50-$75 and include full synthetic oil, a quality oil filter, and purchase records when needed."
  },
  {
    title: "Cooling system work",
    text: "Thermostat housing replacement, coolant flushes, bleeding air from the system, and careful follow-through to make sure the fix is done right."
  },
  {
    title: "Parts sourcing support",
    text: "If a job needs parts, Garrett can help source them and tries to find the most affordable option available."
  }
];

const cities = [
  "Nashville",
  "Antioch",
  "Murfreesboro",
  "Franklin",
  "Brentwood",
  "Smyrna",
  "La Vergne"
];

const whyGarrett = [
  "8 years of repair experience",
  "Independent mobile mechanic who comes to you",
  "Emergency roadside help available late night",
  "Fair pricing that is discussed clearly up front",
  "Strong attention to detail and follow-through",
  "Helps customers save money on parts when possible"
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#top">
            Garrett Ingram Mobile Mechanic
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div className="mobile-urgent-bar">
        <a href="#contact">Send Message First</a>
        <a href="tel:4049146773">Call Now</a>
      </div>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <RevealOnScroll className="hero-copy hero-copy-top" delay={0}>
              <p className="eyebrow">Mobile mechanic serving the greater Nashville area</p>
              <h1>
                Fast mobile auto repair and late-night roadside help when you need it most.
              </h1>
              <p className="hero-text">
                Garrett brings the tools, the experience, and the urgency. From
                diagnostics and on-site repairs to emergency roadside assistance, he
                helps drivers across Nashville, Antioch, Murfreesboro, Franklin,
                Brentwood, Smyrna, and La Vergne get back on the road.
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="hero-visual" delay={90}>
              <Image
                src="/images/main-photo.png"
                alt="Garrett Ingram, a mobile mechanic in Nashville, ready to help customers on-site."
                width={860}
                height={1080}
                priority
              />
              <div className="hero-badge">
                <strong>Honest pricing</strong>
                <span>Roadside help at $3 per mile</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="hero-copy hero-copy-bottom" delay={160}>
              <div className="hero-points" aria-label="Key service highlights">
                <span>8 years of experience</span>
                <span>Emergency roadside help available late night</span>
                <span>Nashville-area arrival often within 45-60 minutes</span>
              </div>
              <div className="hero-quick-facts" aria-label="Fast pricing and coverage details">
                <div className="quick-fact">
                  <strong>$3 / mile</strong>
                  <span>Roadside help pricing</span>
                </div>
                <div className="quick-fact">
                  <strong>$50-$75</strong>
                  <span>Oil change starting range</span>
                </div>
                <div className="quick-fact">
                  <strong>7 cities</strong>
                  <span>Core service area coverage</span>
                </div>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Send a Message
                </a>
                <a className="button button-secondary" href="tel:4049146773">
                  Call 404-914-6773
                </a>
              </div>
              <div className="contact-priority">
                Best contact method: website message first, phone second, text only if
                needed.
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="proof-strip">
          <div className="container proof-grid">
            <RevealOnScroll as="article" delay={0}>
              <strong>Roadside assistance</strong>
              <p>Fast response for breakdowns, no-start issues, and urgent on-site help.</p>
            </RevealOnScroll>
            <RevealOnScroll as="article" delay={90}>
              <strong>Repairs and diagnostics</strong>
              <p>Mobile troubleshooting and repair work without making you tow the car first.</p>
            </RevealOnScroll>
            <RevealOnScroll as="article" delay={180}>
              <strong>Fair, flexible pricing</strong>
              <p>Clear communication, negotiable quotes, and help finding the best parts prices.</p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <RevealOnScroll className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>Real help for real car problems, wherever your car is parked.</h2>
              <p>
                Garrett handles urgent roadside situations and everyday repair work with
                the same careful, hands-on approach.
              </p>
            </RevealOnScroll>
            <div className="services-grid">
              {services.map((service, index) => (
                <RevealOnScroll
                  as="article"
                  className={`service-card${
                    service.featured ? " service-card-featured" : ""
                  }`}
                  key={service.title}
                  delay={index * 70}
                >
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="why-garrett">
          <div className="container split-grid">
            <RevealOnScroll delay={0}>
              <p className="eyebrow">Why drivers call Garrett</p>
              <h2>Built for stressful moments when you need someone reliable, not a guess.</h2>
              <ul className="check-list">
                {whyGarrett.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </RevealOnScroll>
            <RevealOnScroll className="coverage-card" delay={120}>
              <p className="eyebrow">Service area</p>
              <h3>Serving the greater Nashville area</h3>
              <div className="coverage-list" aria-label="Cities served">
                {cities.map((city) => (
                  <span key={city}>{city}</span>
                ))}
              </div>
              <a
                className="button button-tertiary"
                href="https://www.facebook.com/YourAntiochMechanic"
                target="_blank"
                rel="noreferrer"
              >
                Visit Facebook Page
              </a>
            </RevealOnScroll>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="container">
            <RevealOnScroll className="section-heading">
              <p className="eyebrow">Reviews</p>
              <h2>Customer feedback and real repair work.</h2>
              <p>
                Each review can show multiple repair photos, service dates, and a fuller
                story when someone opens the detail view.
              </p>
            </RevealOnScroll>
            <ReviewCarousel reviews={reviews} />
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <RevealOnScroll className="section-heading">
              <p className="eyebrow">Gallery</p>
              <h2>Real on-site work, real tools, real repairs.</h2>
            </RevealOnScroll>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <RevealOnScroll
                  as="figure"
                  className={`gallery-card${
                    index === 0 ? " gallery-card-tall" : ""
                  }${index === 3 ? " gallery-card-wide" : ""}`}
                  key={image.src}
                  delay={index * 80}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 33vw"
                  />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-accent" id="contact">
          <div className="container contact-grid">
            <RevealOnScroll delay={0}>
              <p className="eyebrow">Contact</p>
              <h2>Send a message first for the best response.</h2>
              <p className="contact-copy">
                Garrett prefers website messages because they are easier to organize
                and forward by email. Calling is the next best option. Texting should
                only be used when necessary.
              </p>
              <div className="contact-cards">
                <a className="contact-card" href="mailto:xiaowaif@gmail.com">
                  <strong>Email routing</strong>
                  <span>Messages from this form are routed to xiaowaif@gmail.com</span>
                </a>
                <a className="contact-card" href="tel:4049146773">
                  <strong>Call Garrett</strong>
                  <span>404-914-6773</span>
                </a>
                <a
                  className="contact-card"
                  href="https://www.facebook.com/YourAntiochMechanic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>Facebook page</strong>
                  <span>Your Antioch Mechanic</span>
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Garrett Ingram Mobile Mechanic</strong>
            <p>Mobile repairs, diagnostics, and roadside help across the Nashville area.</p>
          </div>
          <div className="footer-links">
            <a href="tel:4049146773">404-914-6773</a>
            <a href="mailto:xiaowaif@gmail.com">xiaowaif@gmail.com</a>
            <a
              href="https://www.facebook.com/YourAntiochMechanic"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
