"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GalleryCarousel({ images }) {
  const trackRef = useRef(null);
  const dialogRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const openImage = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
    }
    setActiveIndex(null);
  };

  const scrollTrack = (direction) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const amount = Math.min(track.clientWidth * 0.9, 440);
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth"
    });
  };

  const showNext = () => {
    if (activeIndex === null) {
      return;
    }
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const showPrev = () => {
    if (activeIndex === null) {
      return;
    }
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || activeIndex === null) {
      return;
    }

    if (!dialog.open) {
      dialog.showModal();
    }
  }, [activeIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const handleCancel = () => setActiveIndex(null);
    dialog.addEventListener("close", handleCancel);
    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("close", handleCancel);
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, []);

  return (
    <>
      <div className="gallery-shell">
        <button
          className="gallery-control"
          onClick={() => scrollTrack("prev")}
          type="button"
          aria-label="Scroll gallery left"
        >
          &#8592;
        </button>
        <div className="gallery-track" ref={trackRef}>
          {images.map((image, index) => (
            <button
              className="gallery-card gallery-slide reveal is-visible"
              style={{ "--reveal-delay": `${index * 55}ms` }}
              key={image.src}
              onClick={() => openImage(index)}
              type="button"
            >
              <div className="gallery-card-media">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 960px) 42vw, 300px"
                />
              </div>
              <div className="gallery-card-caption">
                <strong>{image.title || "Gallery image"}</strong>
                <span>Tap or click to enlarge</span>
              </div>
            </button>
          ))}
        </div>
        <button
          className="gallery-control"
          onClick={() => scrollTrack("next")}
          type="button"
          aria-label="Scroll gallery right"
        >
          &#8594;
        </button>
      </div>

      <dialog className="gallery-modal" ref={dialogRef}>
        {activeIndex !== null ? (
          <div className="gallery-modal-shell">
            <button
              className="gallery-modal-close"
              onClick={closeModal}
              type="button"
              aria-label="Close gallery image"
            >
              &#10005;
            </button>
            <div className="gallery-modal-stage">
              <button
                className="gallery-modal-arrow"
                onClick={showPrev}
                type="button"
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <div className="gallery-modal-image">
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  fill
                  sizes="90vw"
                />
              </div>
              <button
                className="gallery-modal-arrow"
                onClick={showNext}
                type="button"
                aria-label="Next image"
              >
                &#8594;
              </button>
            </div>
            <div className="gallery-modal-caption">
              <strong>{images[activeIndex].title || "Gallery image"}</strong>
              <span>
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
