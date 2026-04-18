import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVR Roofing Co | Roofing in Los Angeles & Riverside County",
  description:
    "Family-owned roofing company with 30+ years of experience. Roof repair, replacement, and emergency roofing in Los Angeles & Riverside County. Call now for a free estimate.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b">
        <div className="font-bold text-xl">MVR Roofing Co</div>

        <a
          href="tel:+1XXXXXXXXXX"
          className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold"
        >
          Call Now
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Trusted Roofing Company in Los Angeles & Riverside County
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Family-owned for 30+ years. Affordable pricing, guaranteed workmanship,
          and roofing done right the first time. We treat your home like our own.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="tel:+1XXXXXXXXXX"
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold text-lg"
          >
            📞 Call for Free Estimate
          </a>

          <a
            href="#quote"
            className="border border-gray-800 px-6 py-3 rounded-xl font-semibold text-lg"
          >
            Get Free Quote
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Serving Los Angeles County • Riverside County • Surrounding Cities
        </p>
      </section>

      {/* TRUST BAR */}
      <section className="px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-4 text-center bg-white border-y">
        <div>✔ 30+ Years Experience</div>
        <div>✔ Family-Owned</div>
        <div>✔ Licensed & Insured</div>
        <div>✔ Guaranteed Work</div>
        <div>✔ Free Estimates</div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
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
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="text-gray-600 mt-2">
                High-quality {service.toLowerCase()} services across Los Angeles
                & Riverside County.
              </p>

              <a
                href="tel:+1XXXXXXXXXX"
                className="inline-block mt-4 text-red-600 font-semibold"
              >
                Call for Estimate →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / BRAND STORY */}
      <section className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">
          A Roofing Company You Can Trust
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          At MVR Roofing Co, we believe your home deserves the same care and respect
          as our own. As a family-owned business serving the community for over 30 years,
          we are committed to honest work, fair pricing, and lasting quality.
          <br /><br />
          We don’t just build roofs—we protect families, homes, and peace of mind.
        </p>
      </section>

      {/* SERVICE AREA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Service Areas</h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Los Angeles, Gardena, Torrance, Long Beach, Riverside, Corona,
          Moreno Valley, and surrounding cities across LA & Riverside County.
        </p>
      </section>

      {/* LEAD FORM (HubSpot) */}
      <section id="quote" className="px-6 py-20 bg-white border-t">
        <h2 className="text-3xl font-bold text-center mb-6">
          Get Your Free Roofing Quote
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Fill out the form below or call us directly for fastest response.
        </p>

        {/* HubSpot Embed Placeholder */}
        <div className="max-w-2xl mx-auto border p-6 rounded-xl">
          <p className="text-center text-gray-500">
            [HubSpot Form Embed Goes Here]
          </p>

          <div className="text-center mt-6">
            <a
              href="tel:+1XXXXXXXXXX"
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Call Now Instead
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 bg-gray-900 text-white text-center">
        <p className="font-semibold">MVR Roofing Co</p>
        <p className="text-sm text-gray-300 mt-2">
          Family-owned roofing services across Los Angeles & Riverside County
        </p>

        <p className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} MVR Roofing Co. All rights reserved.
        </p>
      </footer>
    </main>
  );
}