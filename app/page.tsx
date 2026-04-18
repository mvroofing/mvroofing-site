import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MV Roofing Co | Luxury Roofing in LA & Riverside",
  description:
    "Family-owned roofing company with 30+ years experience. Roof repair, replacement & emergency roofing in Los Angeles & Riverside County.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">

      {/* HERO */}
      <section className="relative px-6 py-28 text-center">

        {/* glass overlay container */}
        <div className="max-w-5xl mx-auto glass chrome-border p-10">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Premium Roofing in Los Angeles & Riverside County
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Family-owned for 30+ years. Honest pricing, precision craftsmanship,
            and guaranteed roofing work that protects your home like our own.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="tel:+1XXXXXXXXXX"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              📞 Call Now for Free Estimate
            </a>

            <a
              href="#quote"
              className="glass chrome-border px-6 py-3 rounded-xl font-semibold"
            >
              Get Free Quote
            </a>

          </div>

          <p className="mt-6 text-sm text-gray-400">
            Serving LA County • Riverside County • Surrounding Cities
          </p>

        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-4 text-center py-10 bg-black/40 border-y border-white/10">
        <div>✔ 30+ Years</div>
        <div>✔ Family-Owned</div>
        <div>✔ Licensed & Insured</div>
        <div>✔ Guaranteed Work</div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Roofing Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Roof Repair",
            "Roof Replacement",
            "New Roof Installation",
            "Emergency Roofing",
            "Commercial Roofing",
            "Residential Roofing",
          ].map((service) => (
            <div
              key={service}
              className="glass chrome-border p-6 hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="text-gray-400 mt-2">
                High-quality {service.toLowerCase()} across LA & Riverside.
              </p>

              <a
                href="tel:+1XXXXXXXXXX"
                className="inline-block mt-4 text-red-400 font-semibold"
              >
                Call for Estimate →
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* BRAND STORY */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto glass chrome-border p-10">

          <h2 className="text-3xl font-bold mb-6">
            A Roofing Company Built on Trust
          </h2>

          <p className="text-gray-300 leading-relaxed">
            MV Roofing Co has served Southern California for over 30 years.
            We are a family-owned business focused on honesty, craftsmanship,
            and protecting your home like it’s our own.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="px-6 py-24 text-center">

        <div className="max-w-3xl mx-auto glass chrome-border p-10">

          <h2 className="text-3xl font-bold mb-4">
            Get Your Free Roofing Quote
          </h2>

          <p className="text-gray-400 mb-8">
            Call us or submit your details for a fast response.
          </p>

          <a
            href="tel:+1XXXXXXXXXX"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold text-lg"
          >
            📞 Call Now
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/10 text-gray-500">
        MV Roofing Co © {new Date().getFullYear()}
      </footer>

    </main>
  );
}