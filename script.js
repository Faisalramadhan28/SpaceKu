(function () {
  'use strict';

  /*Elemen dan State*/

  function byId(id) {
    return document.getElementById(id);
  }

  const roomList = byId('room-list');
  const cards = Array.from(roomList.querySelectorAll('.room-card'));
  const originalOrder = cards.slice(); // untuk membatalkan urutan A-Z
  const chips = document.querySelectorAll('.chip');
  const sortButton = byId('btn-sort');

  let status = 'semua';  // filter status aktif
  let keyword = '';      // untuk kata kunci pencarian (huruf kecil)
  let sorted = false;    // true jika filter diurutkan A-Z

  /* Fitur pencarian dan filter */

  // Menampikan kartu yang sesuai dengan filter status dan kata kunci pencarian
  function filterRooms() {
    let count = 0;

    cards.forEach(function (card) {
      const matchStatus = status === 'semua' || card.dataset.status === status;
      const matchName = card.dataset.name.toLowerCase().includes(keyword);

      card.hidden = !(matchStatus && matchName);
      if (!card.hidden) {
        count += 1;
      }
    });

    byId('result-count').textContent = count + ' ruangan ditemukan';
    byId('empty-state').hidden = count > 0;
  }

  byId('search-input').addEventListener('input', function (event) {
    keyword = event.target.value.trim().toLowerCase();
    filterRooms();
  });

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      status = chip.dataset.filter;
      chips.forEach(function (item) {
        item.setAttribute('aria-pressed', item === chip);
      });
      filterRooms();
    });
  });

  /*Komponen 1 : Header */

  function compareNames(a, b) {
    return a.dataset.name.localeCompare(b.dataset.name, 'id');
  }

  // Ikon filter: untuk mengurutkan A-Z, klik lagi untuk kembali ke urutan awal
  sortButton.addEventListener('click', function () {
    sorted = !sorted;
    sortButton.setAttribute('aria-pressed', sorted);

    const ordered = sorted ? cards.slice().sort(compareNames) : originalOrder;
    ordered.forEach(function (card) {
      roomList.appendChild(card); // menyesuaikan kartu
    });
  });

  filterRooms(); 
}());