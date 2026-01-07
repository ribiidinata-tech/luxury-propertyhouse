const lokasi = document.getElementById("lokasi");
const harga = document.getElementById("harga");
const cards = document.querySelectorAll(".card");

function filterProperty() {
    cards.forEach(card => {
        const l = card.dataset.lokasi;
        const h = card.dataset.harga;

        const lokasiMatch = lokasi.value === "all" || lokasi.value === l;
        const hargaMatch = harga.value === "all" || harga.value === h;

        card.style.display = (lokasiMatch && hargaMatch) ? "block" : "none";
    });
}

lokasi.addEventListener("change", filterProperty);
harga.addEventListener("change", filterProperty);
