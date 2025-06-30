fetch('cakes.json')
  .then(response => response.json())
  .then(cakes => {
    const gallery = document.querySelector('.cake-grid');
    cakes.forEach(cake => {
      const card = document.createElement('div');
      card.classList.add('cake-card');
      card.innerHTML = `
        <a href="cake.html?title=${encodeURIComponent(cake.title)}&img=${encodeURIComponent(cake.image)}&tags=${cake.tags.join(',')}&desc=${encodeURIComponent(cake.description)}">
          <img src="${cake.image}" alt="${cake.title}">
        </a>
      `;
      gallery.appendChild(card);
    });
  });
