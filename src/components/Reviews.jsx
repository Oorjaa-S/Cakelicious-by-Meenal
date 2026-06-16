import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "../styles/Reviews.css";

function Reviews() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
  if (!emblaApi) return;

  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  onSelect();

  emblaApi.on("select", onSelect);

  return () => {
    emblaApi.off("select", onSelect);
  };
}, [emblaApi]);

  const reviews = [
    {
      name: "Priya S.",
      occasion: "Birthday Cake",
      review:
        "The cake looked exactly like the reference image and tasted amazing."
    },
    {
      name: "Ananya R.",
      occasion: "Anniversary Cake",
      review:
        "Beautiful design, great flavour and delivered right on time."
    },
    {
      name: "Rohit K.",
      occasion: "Custom Theme Cake",
      review:
        "Everyone loved the cake. It was the highlight of the celebration."
    },
    {
      name: "Sneha M.",
      occasion: "Baby Celebration",
      review:
        "Absolutely gorgeous work and very professional service."
    },
    {
      name: "Aditi P.",
      occasion: "Birthday Cake",
      review:
        "Fresh, delicious and exactly what we wanted."
    }
  ];

  return (
    <section className="reviews" id="reviews">

      <div className="section-header">
        <p>HAPPY CUSTOMERS</p>
        <h2>What Our Customers Say</h2>
      </div>

      <div className="reviews-wrapper">

        <button
          className="review-arrow prev"
          onClick={scrollPrev}
        >
          ←
        </button>

        <div className="reviews-carousel" ref={emblaRef}>

          <div className="reviews-container">

            {reviews.map((review, index) => (

              <div className="review-slide" key={index}>

                <div className="review-card">

                  <div className="stars">
                    ★★★★★
                  </div>

                  <p className="review-text">
                    "{review.review}"
                  </p>

                  <h4>{review.name}</h4>

                  <span>
                    {review.occasion}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        <button
          className="review-arrow next"
          onClick={scrollNext}
        >
          →
        </button>

      </div>

      <div className="review-dots">

  {reviews.map((_, index) => (
    <span
      key={index}
      className={
        index === selectedIndex
          ? "dot active"
          : "dot"
      }
      onClick={() =>
        emblaApi?.scrollTo(index)
      }
    />
  ))}

</div>

    </section>
  );
}

export default Reviews;