# Luxury Property Indonesia

Website penjualan rumah mewah dengan desain profesional .

## Fitur
- Filter harga & lokasi
- WhatsApp & Email
- 100% HTML (GitHub Pages Ready)

## Cara Online
Upload ke GitHub → Settings → Pages
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Detail Properti</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header class="navbar">
        <h1>Luxury Property Indonesia</h1>
    </header>

    <section class="detail">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c">
        <h2>Villa Modern Jakarta</h2>
        <p><strong>Harga:</strong> Rp 15.000.000.000</p>
        <p><strong>Luas:</strong> 500 m²</p>
        <p><strong>Kamar:</strong> 5 KT / 6 KM</p>
        <p>Hunian mewah dengan desain modern dan lokasi strategis.</p>

        <a class="wa" href="https://wa.me/62895323721707?text=Saya%20tertarik%20dengan%20Villa%20Modern%20Jakarta"
            target="_blank">
            Hubungi via WhatsApp
        </a>

        <br><br>

        <a href="mailto:ribiidinata@gmail.com" class="email">
            Kirim Email
        </a>
    </section>

</body>

</html>

 <!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Luxury Property Indonesia</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header class="navbar">
        <h1>Luxury Property Indonesia</h1>
    </header>

    <section class="hero">
        <h2>Jual & Beli Rumah Mewah</h2>
        <p>Properti Eksklusif di Lokasi Premium Indonesia</p>
    </section>

    <section class="filter">
        <select id="lokasi">
            <option value="all">Semua Lokasi</option>
            <option value="jakarta">Jakarta</option>
            <option value="bali">Bali</option>
        </select>

        <select id="harga">
            <option value="all">Semua Harga</option>
            <option value="low">&lt; 20 M</option>
            <option value="high">&gt; 20 M</option>
        </select>
    </section>

    <section class="property" id="propertyList">

        <div class="card" data-lokasi="jakarta" data-harga="low">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c">
            <h3>Villa Modern Jakarta</h3>
            <p>Rp 15.000.000.000</p>
            <a href="detail.html" class="btn">Detail</a>
        </div>

        <div class="card" data-lokasi="bali" data-harga="high">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9">
            <h3>Luxury Villa Bali</h3>
            <p>Rp 25.000.000.000</p>
            <a href="detail.html" class="btn">Detail</a>
        </div>

    </section>

    <footer>
        <p>&copy; 2026 Luxury Property Indonesia</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>







