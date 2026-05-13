const reviewTrack = document.getElementById("review-track");
const prevButton = document.getElementById("review-prev");
const nextButton = document.getElementById("review-next");
const reviewModal = document.getElementById("review-modal");
const reviewModalClose = document.getElementById("review-modal-close");
const reviewModalMainImage = document.getElementById("review-modal-main-image");
const reviewModalThumbs = document.getElementById("review-modal-thumbs");
const reviewModalStars = document.getElementById("review-modal-stars");
const reviewModalTitle = document.getElementById("review-modal-title");
const reviewModalReviewer = document.getElementById("review-modal-reviewer");
const reviewModalDate = document.getElementById("review-modal-date");
const reviewModalText = document.getElementById("review-modal-text");
const reviewCards = document.querySelectorAll(".review-card");

if (reviewTrack && prevButton && nextButton) {
  const scrollAmount = () => Math.min(reviewTrack.clientWidth * 0.92, 420);

  prevButton.addEventListener("click", () => {
    reviewTrack.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    reviewTrack.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  });
}

if (
  reviewModal &&
  reviewModalClose &&
  reviewModalMainImage &&
  reviewModalThumbs &&
  reviewModalStars &&
  reviewModalTitle &&
  reviewModalReviewer &&
  reviewModalDate &&
  reviewModalText
) {
  const setActiveImage = (src, altText, buttonToActivate) => {
    reviewModalMainImage.src = src;
    reviewModalMainImage.alt = altText;

    const thumbButtons = reviewModalThumbs.querySelectorAll("button");
    thumbButtons.forEach((button) => {
      button.classList.toggle("is-active", button === buttonToActivate);
    });
  };

  reviewCards.forEach((card) => {
    const trigger = card.querySelector(".review-link");

    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", () => {
      const title = card.dataset.reviewTitle || "";
      const reviewer = card.dataset.reviewer || "";
      const date = card.dataset.date || "";
      const stars = card.dataset.stars || "★★★★★";
      const copy = card.dataset.copy || "";
      const images = (card.dataset.images || "").split("|").filter(Boolean);

      reviewModalTitle.textContent = title;
      reviewModalReviewer.textContent = reviewer;
      reviewModalDate.textContent = `Service date: ${date}`;
      reviewModalStars.textContent = stars;
      reviewModalText.textContent = copy;
      reviewModalThumbs.innerHTML = "";

      images.forEach((imageSrc, index) => {
        const thumbButton = document.createElement("button");
        thumbButton.type = "button";

        const thumbImage = document.createElement("img");
        thumbImage.src = imageSrc;
        thumbImage.alt = `${title} image ${index + 1}`;

        thumbButton.appendChild(thumbImage);
        thumbButton.addEventListener("click", () => {
          setActiveImage(imageSrc, `${title} image ${index + 1}`, thumbButton);
        });

        reviewModalThumbs.appendChild(thumbButton);

        if (index === 0) {
          setActiveImage(imageSrc, `${title} image 1`, thumbButton);
        }
      });

      reviewModal.showModal();
    });
  });

  reviewModalClose.addEventListener("click", () => {
    reviewModal.close();
  });

  reviewModal.addEventListener("click", (event) => {
    if (event.target === reviewModal) {
      reviewModal.close();
    }
  });
}
