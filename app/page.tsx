const menu = [
  {
    name: "Velvet Latte",
    description: "Double espresso, silky steamed milk",
    price: "$4.50",
    image: "/images/latte.jpg",
  },
  {
    name: "Flat White",
    description: "Rich espresso, perfectly textured milk",
    price: "$4.00",
    image: "/images/flat-white.jpg",
  },
  {
    name: "Caramel Macchiato",
    description: "Espresso, vanilla and golden caramel",
    price: "$4.75",
    image: "/images/caramel-macchiato.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F0E6] text-[#3B2419]">
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <a href="#" className="text-xl font-bold tracking-[0.12em]">
          THE DAILY GRIND<span className="text-[#B7794B]">.</span>
        </a>

        <nav className="flex flex-wrap items-center gap-4 text-xs sm:gap-6 sm:text-sm">
          <a href="#story" className="transition hover:text-[#B7794B]">
            Our Story
          </a>
          <a href="#menu" className="transition hover:text-[#B7794B]">
            Menu
          </a>
          <a href="#visit" className="transition hover:text-[#B7794B]">
            Visit Us
          </a>
        </nav>

        <a
          href="#menu"
          className="rounded-full bg-[#3B2419] px-4 py-3 text-sm text-white transition hover:bg-[#68432E]"
        >
          Explore Menu
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#A36A40]">
            GOOD COFFEE. SLOW MOMENTS.
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-[1.1] md:text-7xl">
            Your daily ritual, brewed to perfection.
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-[#765B49]">
            Thoughtfully sourced beans, handcrafted coffee and a cozy corner to
            make every moment feel a little more special.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-[#3B2419] px-7 py-4 text-sm font-medium text-white hover:bg-[#68432E]"
            >
              Discover our menu ↗
            </a>
            <a
              href="#story"
              className="rounded-full border border-[#D8C5B1] px-7 py-4 text-sm font-medium hover:bg-white/50"
            >
              Our story
            </a>
          </div>

          <p className="mt-10 text-xs tracking-wide text-[#8C715D]">
            SMALL BATCH COFFEE · MADE WITH CARE
          </p>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] md:min-h-[520px]">
          <img
            src="/images/cafe-image.jpg"
            alt="Warm, welcoming café interior"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B2419]/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              YOUR NEIGHBORHOOD COFFEE SPOT
            </p>
            <p className="mt-3 font-serif text-3xl italic">
              A little moment of calm.
            </p>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="border-y border-[#E4D6C6] bg-[#FBF7F1] px-6 py-16 text-center md:py-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A36A40]">
          MORE THAN JUST COFFEE
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl md:text-5xl">
          Made for the moments worth slowing down for.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#765B49]">
          From your first morning espresso to long conversations over coffee, we
          believe the little things make the day.
        </p>
      </section>

      <section
        id="menu"
        className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24"
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A36A40]">
              MADE FRESH, EVERY DAY
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              A few favorites.
            </h2>
          </div>
          <p className="text-sm text-[#765B49]">Good things, made with care.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {menu.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-[#E4D6C6] bg-[#FBF7F1] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 h-48 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-2xl">{item.name}</h3>
                <span className="text-sm font-semibold">{item.price}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#765B49]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="visit"
        className="bg-[#3B2419] px-6 py-16 text-center text-[#F7F0E6] md:py-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AA82]">
          YOUR TABLE IS WAITING
        </p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">
          Make room for a coffee break.
        </h2>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-[#E0CFC0]">
          Drop by for your favorite cup, something sweet and a moment to
          yourself.
        </p>

        <div className="mx-auto mt-8 grid max-w-2xl gap-8 text-left sm:grid-cols-2">
          <div>
            <h3 className="mb-3 font-serif text-xl">Find our café</h3>
            <p className="text-sm leading-6 text-[#E0CFC0]">
              24 Willow Lane
              <br />
              Brewtown
              <br />
              Fictional portfolio location
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-serif text-xl">Opening hours</h3>
            <p className="text-sm leading-7 text-[#E0CFC0]">
              Monday – Friday: 7 AM – 7 PM
              <br />
              Saturday – Sunday: 8 AM – 8 PM
            </p>
          </div>
        </div>

        <a
          href="mailto:hello@thedailygrind.demo"
          className="mt-8 inline-block rounded-full bg-[#F7F0E6] px-7 py-4 text-sm font-semibold text-[#3B2419] hover:bg-white"
        >
          Get in touch ↗
        </a>
        <p className="mt-12 text-xs tracking-widest text-[#D5AA82]">
          THE DAILY GRIND · A CAFE CONCEPT BY LUSTRION
        </p>
      </section>

      <footer className="border-t border-[#E4D6C6] bg-[#FBF7F1] px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <a href="#" className="text-sm font-bold tracking-[0.12em]">
            THE DAILY GRIND<span className="text-[#B7794B]">.</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#765B49]">
            <a href="#story" className="hover:text-[#B7794B]">
              Our Story
            </a>
            <a href="#menu" className="hover:text-[#B7794B]">
              Menu
            </a>
            <a href="#visit" className="hover:text-[#B7794B]">
              Visit Us
            </a>
          </nav>

          <p className="text-xs text-[#8C715D]">
            © 2026 The Daily Grind · A Lustrion concept
          </p>
        </div>
      </footer>
    </main>
  );
}
