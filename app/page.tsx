import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MV Roofing Co | Roofing in Los Angeles & Riverside County",
  description:
    "Family-owned roofing company with 30+ years of experience. Roof repair, replacement, and emergency roofing in Los Angeles & Riverside County.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-gray-200">

      {/* HEADER (LOGO CENTERED) */}
      <header className="w-full flex justify-center items-center py-6 border-b border-gray-800 bg-black">
        <img
          src="/logo.png"
          alt="MV Roofing Co Logo"
          className="h-14 w-auto object-contain"
        />
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-24 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Trusted Roofing in Los Angeles & Riverside County
        </h1>

        <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg">
          Family-owned for 30+ years. Honest pricing, high-quality workmanship,
          and guaranteed roofing services. We protect your home like it’s our own.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="tel:+1XXXXXXXXXX"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg"
          >
            📞 Call Now for Free Estimate
          </a>

          <a
            href="#quote"
            className="border border-gray-500 text-gray-200 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-gray-800"
          >
            Get Free Quote
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Serving Los Angeles • Riverside • Surrounding Cities
        </p>
      </section>

      {/* TRUST BAR */}
      <section className="grid grid-cols-2 md:grid-cols-5 text-center text-sm border-y border-gray-800 bg-gray-950 py-8">
        <div>✔ 30+ Years Experience</div>
        <div>✔ Family-Owned</div>
        <div>✔ Licensed & Insured</div>
        <div>✔ Guaranteed Work</div>
        <div>✔ Free Estimates</div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 bg-black">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Roofing Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
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
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {service}
              </h3>

              <p className="text-gray-400 mt-2">
                High-quality {service.toLowerCase()} across LA & Riverside County.
              </p>

              <a
                href="tel:+1XXXXXXXXXX"
                className="inline-block mt-4 text-red-500 font-semibold hover:text-red-400"
              >
                Call for Estimate →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="px-6 py-24 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          A Roofing Company You Can Trust
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
          At MV Roofing Co, we’ve been serving our community for over 30 years.
          We are a family-owned business built on honesty, integrity, and craftsmanship.
          <br /><br />
          Our mission is simple: deliver high-quality roofing at fair prices while treating
          every home like our own.
        </p>
      </section>

      {/* SERVICE AREAS */}
      <section className="px-6 py-16 text-center bg-black">
        <h2 className="text-3xl font-bold text-white mb-6">
          Service Areas
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Los Angeles, Gardena, Torrance, Long Beach, Riverside, Corona,
          Moreno Valley, and surrounding cities.
        </p>
      </section>

      {/* CTA / FORM */}
      <section
        id="quote"
        className="px-6 py-24 bg-gradient-to-b from-gray-900 to-black text-center border-t border-gray-800"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          Get Your Free Roofing Quote
        </h2>

        <p className="text-gray-400 mb-10">
          Call us or submit your details and we’ll respond quickly.
        </p>

        <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400">
            [HubSpot Form Goes Here]
          </p>

          <a
            href="tel:+1XXXXXXXXXX"
            className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Call Now Instead
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 bg-black border-t border-gray-800 text-center">
        <p className="text-white font-semibold">MV Roofing Co</p>
        <p className="text-gray-500 text-sm mt-2">
          Family-owned roofing services across Los Angeles & Riverside County
        </p>

        <p className="text-gray-600 text-xs mt-6">
          © {new Date().getFullYear()} MV Roofing Co
        </p>
      </footer>
    </main>
  );
}