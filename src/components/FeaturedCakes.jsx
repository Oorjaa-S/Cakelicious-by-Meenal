import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "../styles/FeaturedCakes.css";
import Cake1 from "../assets/featured/cake1.jpeg";
import Cake2 from "../assets/featured/cake2.jpeg";
import Cake3 from "../assets/featured/cake3.jpeg";
import Cake4 from "../assets/featured/cake4.jpeg";
import Cake5 from "../assets/featured/cake5.jpeg";
import Cake6 from "../assets/featured/cake6.jpeg";
import Cake7 from "../assets/featured/cake7.jpeg";
import Cake8 from "../assets/featured/cake8.jpeg";
import Cake9 from "../assets/featured/cake9.jpeg";
import Cake10 from "../assets/featured/cake10.jpeg";

function FeaturedCakes() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start"
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

const cakes = [
  {
    name: "Cake 1",
    image: Cake1
  },
  {
    name: "Cake 2",
    image: Cake2
  },
  {
    name: "Cake 3",
    image: Cake3
  },
  {
    name: "Cake 4",
    image: Cake4
  },
  {
    name: "Cake 5",
    image: Cake5
  },
  {
    name: "Cake 6",
    image: Cake6
  },
  {
    name: "Cake 7",
    image: Cake7
  },
  {
    name: "Cake 8",
    image: Cake8
  },
  {
    name: "Cake 9",
    image: Cake9
  },
  {
    name: "Cake 10",
    image: Cake10
  }
];

  return (
    <section className="featured-cakes" id="featured">

      <div className="section-header">
        <p>BESTSELLERS</p>
        <h2>Featured Cakes</h2>
      </div>

      <div className="featured-carousel-wrapper">

        <button
          className="carousel-arrow prev"
          onClick={scrollPrev}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="embla" ref={emblaRef}>

          <div className="embla__container">

            {cakes.map((cake, index) => (
              <div className="embla__slide" key={index}>

                <div className="featured-card">

  <div className="featured-image">
    <img
      src={cake.image}
      alt={cake.name}
    />
  </div>

  <div className="featured-content">
    <h3>{cake.name}</h3>
  </div>

</div>

              </div>
            ))}

          </div>

        </div>

        <button
          className="carousel-arrow next"
          onClick={scrollNext}
          aria-label="Next"
        >
          ›
        </button>

      </div>

      <div className="carousel-dots">

  {cakes.map((_, index) => (
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

export default FeaturedCakes;