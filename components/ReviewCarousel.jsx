"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ReviewCarousel({ reviews }) {
  const trackRef = useRef(null);
  const dialogRef = useRef(null);
  const [selectedReview, setSelectedReview] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const scrollTrack = (direction) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const amount = Math.min(track.clientWidth * 0.92, 420);
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth"
    });
  };

  const openReview = (review) => {
    setSelectedReview(review);
    setActiveImage(review.images[0]);
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !selectedReview) {
      return;
    }

    if (!dialog.open) {
      dialog.showModal();
    }
  }, [selectedReview]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const handleCancel = () => {
      setSelectedReview(null);
      setActiveImage(null);
    };

    dialog.addEventListener("close", handleCancel);
    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("close", handleCancel);
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, []);

  const closeReview = () => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
    }
    setSelectedReview(null);
    setActiveImage(null);
  };

  return (
    <>
      <div className="review-shell">
        <button
          className="review-control"
          onClick={() => scrollTrack("prev")}
          type="button"
          aria-label="Scroll reviews left"
        >
          &#8592;
        </button>
        <div className="review-track" ref={trackRef}>
          {reviews.map((review, index) => (
            <article
              className="review-card reveal is-visible"
              style={{ "--reveal-delay": `${index * 70}ms` }}
              key={`${review.reviewer}-${review.date}`}
            >
              <div className="review-card-image">
                <Image
                  src={review.previewImage}
                  alt={`${review.title} preview image`}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 960px) 70vw, 360px"
                />
              </div>
              <div className="review-content">
                <div className="stars" aria-label="5 star review">
                  {review.stars}
                </div>
                <h3>{review.title}</h3>
                <p>{review.excerpt}</p>
                <div className="review-meta">
                  <span className="reviewer">{review.reviewer}</span>
                  <span className="review-date">Service date: {review.date}</span>
                </div>
                <button
                  className="review-link"
                  onClick={() => openReview(review)}
                  type="button"
                >
                  View full review
                </button>
              </div>
            </article>
          ))}
        </div>
        <button
          className="review-control"
          onClick={() => scrollTrack("next")}
          type="button"
          aria-label="Scroll reviews right"
        >
          &#8594;
        </button>
      </div>

      <dialog className="review-modal" ref={dialogRef}>
        {selectedReview ? (
          <div className="review-modal-shell">
            <button
              className="review-modal-close"
              onClick={closeReview}
              type="button"
              aria-label="Close review details"
            >
              &#10005;
            </button>
            <div className="review-modal-grid">
              <div className="review-modal-gallery">
                <div className="review-modal-main">
                  <Image
                    src={activeImage || selectedReview.images[0]}
                    alt={`${selectedReview.title} full image`}
                    fill
                    sizes="(max-width: 960px) 100vw, 520px"
                  />
                </div>
                <div className="review-modal-thumbs">
                  {selectedReview.images.map((image, index) => (
                    <button
                      className={image === activeImage ? "is-active" : ""}
                      key={`${selectedReview.title}-${image}`}
                      onClick={() => setActiveImage(image)}
                      type="button"
                    >
                      <Image
                        src={image}
                        alt={`${selectedReview.title} image ${index + 1}`}
                        width={120}
                        height={76}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="review-modal-copy">
                <div className="stars">{selectedReview.stars}</div>
                <h3>{selectedReview.title}</h3>
                <div className="review-meta review-meta-modal">
                  <span className="reviewer">{selectedReview.reviewer}</span>
                  <span className="review-date">
                    Service date: {selectedReview.date}
                  </span>
                </div>
                <p>{selectedReview.copy}</p>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
