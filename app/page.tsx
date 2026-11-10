import Image from "next/image";

const CONTACT_EMAIL = "hello@syumul.com";
const contactHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Apl berjenama Syumul",
)}`;

/* The Syumul petal (from the brand icon), drawn in a 100 × 116 box. */
const PETAL =
  "M50 0C56 12 74 22 86 32C97 41 100 50 100 58C100 70 92 78 80 88C68 98 56 106 50 116C44 106 32 98 20 88C8 78 0 70 0 58C0 50 3 41 14 32C26 22 44 12 50 0Z";

type IconName =
  | "clock"
  | "compass"
  | "book"
  | "shield"
  | "pin"
  | "moon"
  | "person"
  | "heart"
  | "coins"
  | "plane"
  | "layers"
  | "arrow"
  | "check";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5z" />
      </>
    ),
    book: (
      <path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V5c-3-.5-6 0-8 1.5zM12 6.5v13" />
    ),
    shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4" />,
    pin: (
      <>
        <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    moon: <path d="M20 14.5A8 8 0 119.5 4a6.5 6.5 0 0010.5 10.5z" />,
    person: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1-3.5 4-5 7-5s6 1.5 7 5" />
      </>
    ),
    heart: (
      <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
    ),
    coins: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    plane: (
      <path d="M21 4l-8.5 8.5M21 4l-6 17-3.5-8.5L3 9z" />
    ),
    layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

/* ---------- Ecosystem lattice (brand "Modular concept") ---------- */

type LatticePetal = { label: string; col: number; row: number; live?: boolean };

const lattice: LatticePetal[] = [
  { label: "Solat", col: 0, row: -1, live: true },
  { label: "Quran", col: -1, row: 0, live: true },
  { label: "Halal", col: 1, row: 0, live: true },
  { label: "Tempat", col: 0, row: 1, live: true },
  { label: "Qurban", col: 2, row: -1 },
  { label: "Ustaz", col: 1, row: -2 },
  { label: "Apl anda", col: -1, row: -2 },
  { label: "Wakaf", col: -2, row: -1 },
  { label: "Zakat", col: -2, row: 1 },
  { label: "Travel", col: 2, row: 1 },
  { label: "Masjid", col: -1, row: 2 },
];

function EcosystemLattice() {
  const cx = 232;
  const cy = 302;
  const dx = 84;
  const dy = 114;
  return (
    <svg
      className="lattice"
      viewBox="0 0 464 604"
      role="img"
      aria-label="Ekosistem Syumul: Solat, Quran, Halal dan Tempat kini tersedia; Qurban, Ustaz, Wakaf, Zakat, Travel, Masjid dan apl berjenama akan datang"
    >
      {lattice.map((p) => {
        const x = cx + p.col * dx;
        const y = cy + p.row * dy;
        return (
          <g key={p.label} className={p.live ? "lp live" : "lp next"}>
            <path
              d={PETAL}
              transform={`translate(${x - 64} ${y - 74}) scale(1.28)`}
              vectorEffect="non-scaling-stroke"
            />
            <text x={x} y={y + (p.live ? 9 : 7)} textAnchor="middle">
              {p.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function HeroPetals() {
  return (
    <svg className="hero-petals" viewBox="0 0 1024 1024" aria-hidden="true">
      <path d={PETAL} transform="translate(376 226) scale(2.72)" />
      <path d={PETAL} transform="translate(224 482) scale(2.72)" />
      <path d={PETAL} transform="translate(528 482) scale(2.72)" />
    </svg>
  );
}

/* ---------- Phone mock-up of the Syumul app ---------- */

function PhoneHome() {
  const tiles: { icon: IconName; label: string; soon?: boolean }[] = [
    { icon: "clock", label: "Solat" },
    { icon: "compass", label: "Kiblat" },
    { icon: "book", label: "Quran" },
    { icon: "shield", label: "Halal" },
    { icon: "pin", label: "Tempat" },
    { icon: "heart", label: "Wakaf", soon: true },
  ];
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="ph-top">
          <div>
            <small>Assalamualaikum</small>
            <strong>Kuala Lumpur</strong>
          </div>
          <Image src="/syumul-icon.png" alt="" width={30} height={30} />
        </div>

        <div className="ph-prayer">
          <small>Solat seterusnya</small>
          <div className="ph-prayer-row">
            <strong>Asar</strong>
            <span>4:21 PTG</span>
          </div>
          <div className="ph-times">
            <span>Subuh</span>
            <span>Zohor</span>
            <span className="on">Asar</span>
            <span>Maghrib</span>
            <span>Isyak</span>
          </div>
        </div>

        <div className="ph-grid">
          {tiles.map((t) => (
            <div key={t.label} className={t.soon ? "ph-tile soon" : "ph-tile"}>
              <span className="ph-ico">
                <Icon name={t.icon} size={18} />
              </span>
              <small>{t.label}</small>
            </div>
          ))}
        </div>

        <div className="ph-card">
          <span className="ph-ico">
            <Icon name="book" size={18} />
          </span>
          <div>
            <small>Sambung bacaan</small>
            <strong>Al-Kahf · ayat 10</strong>
          </div>
        </div>

        <div className="ph-card">
          <span className="ph-ico">
            <Icon name="shield" size={18} />
          </span>
          <div>
            <small>Semak Halal</small>
            <strong>Imbas label produk</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientPhone({
  name,
  kind,
  tone,
  modules,
}: {
  name: string;
  kind: string;
  tone: string;
  modules: string[];
}) {
  return (
    <div className={`client-phone ${tone}`} aria-hidden="true">
      <div className="cp-head">
        <span className="cp-logo">{name.slice(0, 1)}</span>
        <div>
          <strong>{name}</strong>
          <small>{kind}</small>
        </div>
      </div>
      <div className="cp-hero" />
      <div className="cp-list">
        {modules.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="cp-foot">Dikuasakan Syumul</div>
    </div>
  );
}

/* ---------- Content ---------- */

const liveFeatures: {
  icon: IconName;
  title: string;
  body: string;
  wide?: boolean;
}[] = [
  {
    icon: "shield",
    title: "Semak Halal",
    body: "Ambil gambar label produk untuk bacaan awal ramuannya. Ini bukan pensijilan halal, jadi sentiasa rujuk logo halal yang diiktiraf apabila ia penting.",
    wide: true,
  },
  {
    icon: "clock",
    title: "Waktu solat",
    body: "Waktu solat mengikut lokasi anda, dengan peringatan setiap kali masuk waktu.",
  },
  {
    icon: "compass",
    title: "Arah kiblat",
    body: "Kompas kiblat yang mengikut anda ke mana sahaja anda bermusafir.",
  },
  {
    icon: "book",
    title: "Al-Quran",
    body: "Mushaf penuh dengan terjemahan pelbagai bahasa, tetapan bacaan dan penanda.",
  },
  {
    icon: "pin",
    title: "Halal berhampiran",
    body: "Cari tempat makan halal dan masjid di sekeliling anda.",
  },
];

const upcoming: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "moon",
    title: "Qurban & Aqiqah",
    body: "Wakilkan ibadah korban kepada ladang dan rumah sembelih yang disahkan. Anda terima video sembelihan dengan nama anda, sijil digital dan laporan agihan.",
  },
  {
    icon: "person",
    title: "Ustaz & Ustazah atas permintaan",
    body: "Tempah kelas mengaji, fardu ain, tazkirah atau tahlil dengan pengajar bertauliah. Ada pilihan ustazah untuk wanita dan kanak-kanak.",
  },
  {
    icon: "heart",
    title: "Wakaf",
    body: "Sumbang kepada projek wakaf bersama Majlis Agama Islam negeri, dengan kemajuan projek yang telus dan sijil wakaf atas nama anda.",
  },
  {
    icon: "coins",
    title: "Zakat",
    body: "Kira zakat pendapatan, simpanan, emas dan perniagaan, kemudian bayar terus kepada pusat zakat negeri.",
  },
  {
    icon: "plane",
    title: "Travel & Umrah",
    body: "Pakej umrah daripada agensi berlesen sahaja, panduan manasik, serta hotel dan makanan halal di destinasi.",
  },
];

const audiences = [
  "Masjid & surau",
  "Majlis agama & pusat zakat",
  "Institusi wakaf",
  "Bank & e-dompet",
  "Agensi umrah & pelancongan",
  "Jenama & restoran halal",
  "Sekolah tahfiz & pusat pengajian",
];

const whiteLabelPoints = [
  "Nama, logo dan warna organisasi anda",
  "Pilih modul: solat, Quran, halal, wakaf, qurban, kelas",
  "Diterbitkan di Google Play dan App Store atas nama anda",
  "Pengguna dan data kekal milik organisasi anda",
  "Kemas kini enjin Syumul diterima secara automatik",
];

const steps = [
  { title: "Pilih modul", body: "Tentukan perkhidmatan yang jemaah atau pelanggan anda perlukan." },
  { title: "Jenamakan", body: "Kongsi logo, warna dan nama apl. Kami sediakan reka bentuknya." },
  { title: "Kami bina & terbitkan", body: "Apl anda dibina di atas enjin Syumul dan diterbitkan ke kedai apl." },
  { title: "Lancar & kembangkan", body: "Tambah modul baharu apabila organisasi anda berkembang." },
];

const principles = [
  {
    title: "Akad dijelaskan sebelum bayaran",
    body: "Setiap transaksi menunjukkan akadnya, sama ada wakalah atau upah, sebelum anda membayar.",
  },
  {
    title: "Dana amanah diasingkan",
    body: "Wang korban, wakaf dan zakat tidak bercampur dengan hasil operasi Syumul.",
  },
  {
    title: "Rakan yang disahkan",
    body: "Ustaz bertauliah, agensi berlesen, ladang dan rumah sembelih yang diperiksa.",
  },
  {
    title: "Menyemak, bukan mensijilkan",
    body: "Syumul membantu menyemak status halal. Pensijilan kekal di tangan badan yang diiktiraf.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#top" aria-label="Syumul, ke atas">
            <Image
              src="/syumul-wordmark.png"
              alt="Syumul"
              width={458}
              height={131}
              priority
            />
          </a>
          <nav aria-label="Utama">
            <a href="#ekosistem">Ekosistem</a>
            <a href="#apl">Apl Syumul</a>
            <a href="#akan-datang">Akan datang</a>
            <a href="#white-label">Untuk organisasi</a>
          </nav>
          <a className="btn btn-primary btn-sm" href="#white-label">
            Bina apl anda
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Apl induk Muslim</p>
              <h1>
                Satu apl.
                <br />
                Seluruh kehidupan <span>Muslim.</span>
              </h1>
              <p className="lead">
                Syumul menghimpunkan waktu solat, kiblat, al-Quran dan semakan
                halal dalam satu apl. Enjin yang sama turut menggerakkan apl
                berjenama untuk masjid, institusi dan perniagaan anda.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#ekosistem">
                  Lihat ekosistem <Icon name="arrow" size={18} />
                </a>
                <a className="btn btn-ghost" href="#white-label">
                  Apl untuk organisasi
                </a>
              </div>
              <p className="hero-note">
                Akan datang ke Google Play dan App Store.
              </p>
            </div>
            <div className="hero-visual">
              <HeroPetals />
              <PhoneHome />
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="section eco" id="ekosistem">
          <div className="wrap eco-grid">
            <div>
              <p className="eyebrow">Konsep modular</p>
              <h2>Satu ekosistem, kelopak demi kelopak.</h2>
              <p className="lead">
                Setiap kelopak ialah satu perkhidmatan. Yang berisi sudah ada
                dalam apl hari ini, yang bergaris sedang dibina. Setiap satu
                boleh dipasang ke dalam apl Syumul atau apl berjenama anda
                sendiri.
              </p>
              <ul className="legend">
                <li>
                  <span className="dot live" /> Kini dalam apl
                </li>
                <li>
                  <span className="dot next" /> Akan datang
                </li>
              </ul>
            </div>
            <EcosystemLattice />
          </div>
        </section>

        {/* Live today */}
        <section className="section" id="apl">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Kini dalam apl</p>
              <h2>Dalam apl Syumul hari ini.</h2>
            </div>
            <div className="bento">
              {liveFeatures.map((f) => (
                <article
                  key={f.title}
                  className={f.wide ? "card card-wide" : "card"}
                >
                  <span className="card-ico">
                    <Icon name={f.icon} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                  {f.wide && (
                    <div className="scan" aria-hidden="true">
                      <div className="scan-frame">
                        <span>Ramuan</span>
                        <i />
                        <i />
                        <i className="short" />
                      </div>
                      <div className="scan-result">
                        <Icon name="check" size={16} /> Bacaan awal: tiada
                        ramuan meragukan dikesan
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="section upcoming" id="akan-datang">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Selepas halal</p>
              <h2>Ibadah yang lebih mudah diurus, dengan amanah.</h2>
              <p className="lead">
                Modul seterusnya dibina dengan akad yang jelas, dana yang
                diasingkan dan rakan yang berdaftar dengan pihak berkuasa.
              </p>
            </div>
            <ol className="roadmap">
              {upcoming.map((u, i) => (
                <li key={u.title}>
                  <span className="rm-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="card-ico">
                    <Icon name={u.icon} />
                  </span>
                  <div>
                    <h3>{u.title}</h3>
                    <p>{u.body}</p>
                  </div>
                  <span className="pill">Akan datang</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* White label */}
        <section className="section wl" id="white-label">
          <div className="wrap">
            <div className="wl-grid">
              <div>
                <p className="eyebrow on-dark">Syumul untuk organisasi</p>
                <h2>Apl anda sendiri, dikuasakan Syumul.</h2>
                <p className="lead">
                  Masjid, pusat zakat, institusi wakaf, bank, agensi umrah dan
                  jenama halal boleh melancarkan apl berjenama sendiri tanpa
                  membina dari kosong. Anda pilih modul, kami bina dan
                  terbitkan.
                </p>
                <ul className="ticks">
                  {whiteLabelPoints.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={18} /> {p}
                    </li>
                  ))}
                </ul>
                <a className="btn btn-light" href={contactHref}>
                  Bincang apl anda <Icon name="arrow" size={18} />
                </a>
              </div>

              <div className="wl-visual">
                <div className="engine">
                  <Image src="/syumul-icon.png" alt="" width={56} height={56} />
                  <div>
                    <strong>Enjin Syumul</strong>
                    <small>Modul, kandungan dan kemas kini</small>
                  </div>
                </div>
                <div className="wl-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="client-row">
                  <ClientPhone
                    name="Masjid Anda"
                    kind="Apl jemaah"
                    tone="t-teal"
                    modules={["Waktu solat", "Kuliah", "Tabung"]}
                  />
                  <ClientPhone
                    name="Institusi Anda"
                    kind="Wakaf & zakat"
                    tone="t-navy"
                    modules={["Projek wakaf", "Kira zakat", "Laporan"]}
                  />
                  <ClientPhone
                    name="Jenama Anda"
                    kind="Pelanggan"
                    tone="t-plum"
                    modules={["Semak halal", "Kedai", "Ganjaran"]}
                  />
                </div>
                <p className="wl-caption">Contoh ilustrasi</p>
              </div>
            </div>

            <div className="audiences">
              <span className="aud-label">Sesuai untuk</span>
              {audiences.map((a) => (
                <span key={a} className="chip">
                  {a}
                </span>
              ))}
            </div>

            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="step-num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Principles */}
        <section className="section" id="prinsip">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Prinsip yang kami pegang</p>
              <h2>Amanah dahulu, teknologi kemudian.</h2>
            </div>
            <div className="principles">
              {principles.map((p) => (
                <article key={p.title}>
                  <svg viewBox="0 0 100 116" className="mini-petal" aria-hidden="true">
                    <path d={PETAL} />
                  </svg>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section closing" id="hubungi">
          <div className="wrap closing-box">
            <HeroPetals />
            <div>
              <h2>Bina apl Muslim anda di atas Syumul.</h2>
              <p className="lead">
                Ceritakan organisasi anda dan modul yang anda perlukan. Kami
                akan hubungi anda semula.
              </p>
            </div>
            <a className="btn btn-primary" href={contactHref}>
              Hubungi kami <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div>
            <Image
              src="/syumul-wordmark.png"
              alt="Syumul"
              width={458}
              height={131}
              className="footer-logo"
            />
            <p>Panduan Muslim, secara menyeluruh.</p>
          </div>
          <nav aria-label="Kaki">
            <a href="#ekosistem">Ekosistem</a>
            <a href="#apl">Apl Syumul</a>
            <a href="#akan-datang">Akan datang</a>
            <a href="#white-label">Untuk organisasi</a>
            <a href={contactHref}>{CONTACT_EMAIL}</a>
          </nav>
          <small>© {new Date().getFullYear()} Syumul</small>
        </div>
      </footer>
    </>
  );
}
