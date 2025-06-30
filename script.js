document.addEventListener('DOMContentLoaded', () => {
  fetch('cakes.json')
    .then(response => response.json())
    .then(cakes => {
      const gallery = document.querySelector('.cake-grid');
      if (!gallery) {
        console.error("❌ Couldn't find .cake-grid");
        return;
      }

      cakes.forEach(cake => {
        const card = document.createElement('div');
        card.classList.add('cake-card');
        card.innerHTML = `
          <a href="cake.html?title=${encodeURIComponent(cake.title)}&image=${encodeURIComponent(cake.image)}&tags=${encodeURIComponent(cake.tags)}&desc=${encodeURIComponent(cake.description)}">
            <img src="${cake.image}" alt="${cake.title}">
          </a>
        `;
        gallery.appendChild(card);
      });
    })
    .catch(error => console.error("❌ Error loading cakes:", error));
});
