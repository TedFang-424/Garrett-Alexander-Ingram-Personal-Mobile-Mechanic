export const metadata = {
  title: "Thank You | Garrett Ingram Mobile Mechanic",
  description:
    "Thank you for reaching out to Garrett Ingram Mobile Mechanic. Your message has been sent."
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <section className="thank-you-main">
        <div className="thank-you-card">
          <p className="eyebrow">Message sent</p>
          <h1>Thanks for reaching out.</h1>
          <p>
            Your message has been sent for review. If the situation is urgent, call{" "}
            <a href="tel:4049146773">404-914-6773</a> for the fastest response.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/">
              Back to Home
            </a>
            <a className="button button-secondary" href="tel:4049146773">
              Call Garrett
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
