import Image from "next/image";

const places = [
  {
    name: "Aroma Iman Bistro",
    area: "Damansara",
    rating: "4.7",
    reviews: "254",
    distance: "1.2 km",
    badge: "Halal Certified",
  },
  {
    name: "Suka Sucre",
    area: "Mont Kiara",
    rating: "4.6",
    reviews: "98",
    distance: "1.6 km",
    badge: "Muslim-Owned",
  },
  {
    name: "The Kaffe Klub",
    area: "TTDI",
    rating: "4.4",
    reviews: "126",
    distance: "1.8 km",
    badge: "Information Available",
  },
  {
    name: "Nasi Lemak Royale",
    area: "Kuala Lumpur",
    rating: "4.6",
    reviews: "328",
    distance: "350 m",
    badge: "Halal Certified",
  },
];

const categories = [
  ["🍴", "Restoran"],
  ["✓", "Halal Check"],
  ["🕌", "Masjid"],
  ["✈", "Travel"],
  ["🛍", "Produk"],
  ["•••", "Lainnya"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="/">
  <Image
    src="/syumul-logo.png"
    alt="Syumul"
    width={180}
    height={70}
    priority
  />
</a>

        <nav>
          <a href="#discover">Discover</a>
          <a href="#halal-check">Halal Check</a>
          <a href="#places">Places</a>
          <a href="#travel">Travel</a>
          <a href="#learn">Learn</a>
          <a href="#business">For Business</a>
        </nav>

        <div className="header-actions">
          <button className="btn btn-outline">Log in</button>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">EVERYTHING MUSLIM. IN ONE PLACE.</div>

          <h1>
            Panduan Muslim,
            <br />
            secara <span>menyeluruh.</span>
          </h1>

          <p>
            Cari tempat, semak status halal dan buat pilihan dengan yakin, di
            mana jua anda berada.
          </p>

          <div className="search-box">
            <span>⌕</span>
            <input
              placeholder="Cari restoran, produk, tempat dan banyak lagi..."
            />
            <button>⌕</button>
          </div>

          <div className="categories">
            {categories.map(([icon, label]) => (
              <button key={label} className="category">
                <span className="category-icon">{icon}</span>
                <small>{label}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="scribble">syumul</div>

          <div className="phone">
            <div className="phone-top">
              <Image
  src="/syumul-logo.png"
  alt="Syumul"
  width={80}
  height={30}
  className="phone-logo"
/>
              <span>⌕</span>
            </div>

            <p className="location">Kuala Lumpur⌄</p>

            <div className="mini-search">Cari tempat, makanan, produk...</div>

            <div className="mini-categories">
              <span>🍴</span>
              <span>✓</span>
              <span>🕌</span>
              <span>✈</span>
            </div>

            <h3>Berhampiran anda</h3>

            <div className="phone-card">
              <div className="phone-image" />
              <div>
                <strong>Nasi Lemak Royale</strong>
                <p>Kuala Lumpur</p>
                <small>⭐ 4.6 (328)</small>
              </div>
            </div>

            <h3>Syumul Picks</h3>

            <div className="phone-row">
              <div className="mini-tile" />
              <div className="mini-tile" />
            </div>
          </div>

          <div className="note">
            ↖
            <br />
            Semak sebelum
            <br />
            anda pilih.
          </div>
        </div>
      </section>

      <section className="content-grid" id="discover">
        <div className="discover-panel">
          <div className="section-heading">
            <h2>Terokai pilihan terbaik</h2>
            <a href="#">Lihat semua</a>
          </div>

          <div className="cards">
            {places.map((place, index) => (
              <article className="place-card" key={place.name}>
                <div className={`place-image image-${index + 1}`}>
                  <span className="badge">{place.badge}</span>
                </div>

                <div className="place-content">
                  <strong>{place.name}</strong>
                  <p>{place.area}</p>

                  <div className="place-meta">
                    <span>
                      ⭐ {place.rating} ({place.reviews})
                    </span>
                    <span>{place.distance}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="halal-panel" id="halal-check">
          <div>
            <h2>Halal Check</h2>
            <p>
              Imbas kod bar atau cari produk untuk semak status halal dengan
              mudah.
            </p>

            <button className="btn btn-primary">Semak sekarang</button>
          </div>

          <div className="scanner-art">
            <div className="barcode">|||| ||| |||| | |||</div>
          </div>
        </aside>
      </section>
    </main>
  );
}