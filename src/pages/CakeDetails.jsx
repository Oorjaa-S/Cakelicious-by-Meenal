import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";


import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import ContactFooter from "../components/ContactFooter";

import "../styles/CakeDetails.css";

function CakeDetails() {
  const { id } = useParams();

  const [cake, setCake] = useState(null);

  useEffect(() => {
  setCake(null);
  getCake();
}, [id]);

  async function getCake() {
    const { data, error } = await supabase
      .from("cakes")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.log(error);
      return;
    }

    setCake(data);
  }

  if (!cake) {
    return (
      <>
        <Navbar />
        <TopBar />
        <div className="loading">
          Loading Cake...
        </div>
      </>
    );
  }

  const whatsappMessage = `Hi! 👋

I'd like to order a cake similar to this.

🎂 Cake: *${cake.name}*

🔗 ${window.location.href}

Please let me know the available sizes, pricing, and customization options. 😊`;

  return (
    <>
      <Navbar />
      <TopBar />

      <section className="cake-details">

        <div className="cake-details-container">

          <div className="cake-details-image">

            <img
              src={cake.image_url}
              alt={cake.name}
            />

          </div>

          <div className="cake-details-content">

           <p className="cake-tag">
  CUSTOM CAKE
</p>

<h1>{cake.name}</h1>

<div className="cake-divider"></div>

<div className="cake-info">

  <p>
    <span className="info-label">
      Category: 
    
  </span>{" "}

    <span className="info-value">
      {cake.categories}
    </span>
  </p>

  <p>
    <span className="info-label">
      Flavour: 
    
  </span>{" "}

    <span className="info-value">
      {cake.flavour}
    </span>
  </p>

  <p>
    <span className="info-label">
      Description:
      </span>{" "}


    <span className="info-value">
      {cake.description}
    </span>
  </p>

</div>

<p className="cake-note">
  Available in multiple flavours,
  sizes and customizations.
  Final details can be discussed
  on WhatsApp.
</p>

<a
  href={`https://wa.me/919540168622?text=${encodeURIComponent(whatsappMessage)}`}
  target="_blank"
  rel="noreferrer"
  className="cake-order-btn"
>
  Order This Cake
</a>
          </div>

        </div>

      </section>

      <ContactFooter />
    </>
  );
}

export default CakeDetails;
