"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const current = new URL(window.location.href);
      const base = current.pathname.endsWith("/")
        ? current.href
        : `${current.origin}${current.pathname}/`;
      setNextUrl(new URL("thank-you", base).toString());
    }
  }, []);

  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/xiaowaif@gmail.com"
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Garrett Ingram Mobile Mechanic Website Lead"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      {nextUrl ? <input type="hidden" name="_next" value={nextUrl} /> : null}
      <div className="field-row">
        <label>
          Name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
      </div>
      <div className="field-row">
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Vehicle make / model
          <input type="text" name="vehicle" placeholder="Example: Chrysler 200" />
        </label>
      </div>
      <label>
        Location
        <input type="text" name="location" placeholder="Example: Antioch, TN" required />
      </label>
      <label>
        What&apos;s going on with the car?
        <textarea
          name="issue"
          rows="6"
          placeholder="Tell Garrett what the car is doing, what warning lights are on, and whether the car can still move."
          required
        />
      </label>
      <button className="button button-primary form-button" type="submit">
        Send Message
      </button>
    </form>
  );
}
