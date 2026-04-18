export default function HomePage() {
  return (
    <main className="px-6 py-16">

      {/* HERO */}
      <section className="glass chrome max-w-5xl mx-auto p-10 text-center">

        <h1 className="text-4xl md:text-6xl font-bold">
          Premium Roofing in Los Angeles & Riverside
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Family-owned for 30+ years. Honest pricing, expert craftsmanship,
          and guaranteed roofing services that protect your home.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="tel:+1XXXXXXXXXX"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold"
          >
            📞 Call Now
          </a>

          <a className="glass chrome px-6 py-3 rounded-xl">
            Get Free Quote
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Serving LA County • Riverside County • Surrounding Areas
        </p>
      </section>

      {/* SERVICES */}
      <section className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {[
          "Roof Repair",
          "Roof Replacement",
          "New Roof Installation",
          "Emergency Roofing",
          "Commercial Roofing",
          "Residential Roofing",
        ].map((item) => (
          <div key={item} className="glass chrome p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="text-gray-400 mt-2">
              High-quality {item.toLowerCase()} in Southern California.
            </p>
          </div>
        ))}

      </section>

      {/* TRUST SECTION */}
      <section className="glass chrome max-w-4xl mx-auto mt-20 p-10 text-center">
        <h2 className="text-3xl font-bold">Built on Trust</h2>
        <p className="text-gray-300 mt-4">
          30+ years serving homeowners with honesty, reliability, and craftsmanship.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <a
          href="tel:+1XXXXXXXXXX"
          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-lg font-semibold"
        >
          📞 Get Your Free Roofing Quote
        </a>
      </section>

    </main>
  );
}