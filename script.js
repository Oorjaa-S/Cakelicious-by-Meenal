document.addEventListener('DOMContentLoaded', () => {
  fetch('cakes.json')
    .then(response => response.json())
    .then(cakes => {
      const gallery = document.getElementById('cakeGallery');

      cakes.forEach(cake => {
        const card = document.createElement('div');
        card.classList.add('cake-card');

        card.innerHTML = `
          <div class="img-wrapper">
            <img src="${cake.image}" alt="${cake.title}" />
          </div>
          <h3>${cake.title}</h3>
        `;

        gallery.appendChild(card);
      });
    })
    .catch(error => console.error('Error loading cakes:', error));
});
