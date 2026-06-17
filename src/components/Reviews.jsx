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
    
    occasion: "Birthday Cake",
    review:
      "Thank you so much for the beautiful cake! It looked absolutely stunning and tasted incredibly yummy. Everyone at the party loved it. Highly recommended!"
  },
  {
    
    occasion: "Birthday Cake",
    review:
      "The cake was absolutely delightful. Beautifully designed, incredibly delicious, and full of flavour. Every bite was soft and moist. Thank you for making the celebration so special!"
  },
  {
    
    occasion: "Birthday Cake",
    review:
      "The cake was excellent! Perfect sweetness, perfectly soft, and moist. Thank you so much!"
  },
    {
      
      occasion: "Baby Celebration",
      review:
        "Absolutely gorgeous work and very professional service."
    },
    {
      
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