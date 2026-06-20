import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import "../styles/FeaturedCakes.css";
import Cake1 from "../assets/featured/Cake1.jpeg";
import Cake2 from "../assets/featured/Cake2.png";
import Cake3 from "../assets/featured/Cake3.png";
import Cake4 from "../assets/featured/Cake4.png";
import Cake5 from "../assets/featured/Cake5.jpeg";
import Cake6 from "../assets/featured/Cake6.jpeg";
import Cake7 from "../assets/featured/Cake7.png";
import Cake8 from "../assets/featured/Cake8.png";
import Cake9 from "../assets/featured/Cake9.jpeg";
import Cake10 from "../assets/featured/Cake10.png";
import Cake11 from "../assets/featured/Cake11.png";
import Cake12 from "../assets/featured/Cake12.png";
import { Link } from "react-router-dom";

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
    id: 17,
    name: "Cake 1",
    image: Cake1
  },
  {
    id: 63,
    name: "Cake 2",
    image: Cake2
  },
  {
    id: 70,
    name: "Cake 3",
    image: Cake3
  },
  {
    id: 32,
    name: "Cake 4",
    image: Cake4
  },
  {
    id: 21,
    name: "Cake 5",
    image: Cake5
  },
  {
    id: 22,
    name: "Cake 6",
    image: Cake6
  },
  {
    id: 75,
    name: "Cake 7",
    image: Cake7
  },
  {
    id: 115,
    name: "Cake 8",
    image: Cake8
  },
  {
    id: 25,
    name: "Cake 9",
    image: Cake9
  },
  {
    id: 53,
    name: "Cake 10",
    image: Cake10
  },
  {
    id: 36,
    name: "Cake 11",
    image: Cake11
  },
  {
    id: 98,
    name: "Cake 12",
    image: Cake12
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

                <Link
  to={`/cake/${cake.id}`}
  className="featured-card-link"
>
  <div className="featured-card">

    <div className="featured-image">
      <img
        src={cake.image}
        alt={cake.name}
      />
    </div>

  </div>
</Link>
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
