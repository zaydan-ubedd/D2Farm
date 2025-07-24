const catalogData = [
  {
    id: 1,
    type: 'kambing',
    name: 'Kambing Jawa Super',
    weight: '40-45 kg',
    price: 3500000,
    image: 'kambing1.jpg'
  },
  {
    id: 2,
    type: 'sapi',
    name: 'Sapi Limousin',
    weight: '400-450 kg',
    price: 45000000,
    image: 'sapi1.jpg'
  },
  {
    id: 3,
    type: 'kambing',
    name: 'Kambing Etawa',
    weight: '55-60 kg',
    price: 4000000,
    image: 'kambing2.jpg'
  },
  {
    id: 4,
    type: 'sapi',
    name: 'Sapi Ongole',
    weight: '350-400 kg',
    price: 38000000,
    image: 'sapi2.jpg'
  }
];

function displayCatalog(items) {
  const catalogList = document.getElementById('catalog-list');
  catalogList.innerHTML = '';
  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'catalog-item';
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Jenis: ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
      <p>Berat: ${item.weight}</p>
      <p>Harga: Rp ${item.price.toLocaleString()}</p>
      <button onclick="alert('Anda memilih ${item.name}. Proses pemesanan sedang dikembangkan.')">Pesan Sekarang</button>
    `;
    catalogList.appendChild(itemElement);
  });
}

function filterCatalog() {
  const filter = document.getElementById('filterJenis').value;
  if (filter === 'all') {
    displayCatalog(catalogData);
  } else {
    const filtered = catalogData.filter(item => item.type === filter);
    displayCatalog(filtered);
  }
}

window.onload = function() {
  displayCatalog(catalogData);
}

function submitContactForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseEl = document.getElementById('formResponse');

  if (name && email && message) {
    responseEl.textContent = 'Terima kasih atas pesan Anda! Kami akan menghubungi Anda segera.';
    document.getElementById('contactForm').reset();
    return false;
  } else {
    responseEl.textContent = 'Mohon isi semua bidang formulir dengan benar.';
    return false;
  }
}
