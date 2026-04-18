import { notFound } from "next/navigation";

const services = {
  "roof-repair": "Roof Repair",
  "roof-replacement": "Roof Replacement",
  "new-roof-installation": "New Roof Installation",
  "emergency-roofing": "Emergency Roofing",
  "commercial-roofing": "Commercial Roofing",
  "residential-roofing": "Residential Roofing",
};

const cities = {
  "los-angeles": "Los Angeles",
  "gardena": "Gardena",
  "torrance": "Torrance",
  "long-beach": "Long Beach",
  "riverside": "Riverside",
  "corona": "Corona",
  "moreno-valley": "Moreno Valley",
};

export default function SEOPage({
  params,
}: {
  params: { service: string; city: string };
}) {
  const serviceName = services[params.service];
  const cityName = cities[params.city];

  if (!serviceName || !cityName) return notFound();

  return (
    <main className="min-h-screen bg-black text-gray-200">

      {/* HERO */}
      <section className="text-center px-6 py-24 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {serviceName} in {cityName}
        </h1>

        <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg">
          MV Roofing Co is a family-owned roofing company with over 30 years of experience
          providing high-quality {serviceName.toLowerCase()} services in {cityName}.
          We deliver honest pricing, fast service, and guaranteed workmanship.
        </p>

        <div className="mt-10">
          <a
            href="tel:+1XXXXXXXXXX"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold text-lg"
          >
            📞 Call Now for Free Estimate
          </a>
        </div>
      </section>

      {/* TRUST */}
      <section className="grid grid-cols-2 md:grid-cols-4 text-center text-sm border-y border-gray-800 bg-gray-950 py-8">
        <div>✔ 30+ Years Experience</div>
        <div>✔ Family-Owned</div>
        <div>✔ Licensed & Insured</div>
        <div>✔ Guaranteed Work</div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20 bg-black max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">
          Professional {serviceName} in {cityName}
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          At MV Roofing Co, we specialize in {serviceName.toLowerCase()} in {cityName}
          and surrounding areas. Whether it’s storm damage, aging roofs, or emergency leaks,
          our team responds quickly and gets the job done right the first time.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          We are a family-owned company serving Southern California for over 30 years.
          Our focus is simple: honest pricing, high-quality craftsmanship, and long-lasting results.
        </p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">
          Why Choose MV Roofing Co?
        </h3>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Fast response for emergency roofing</li>
          <li>High-quality materials</li>
          <li>Affordable pricing with no hidden fees</li>
          <li>Trusted local roofing experts</li>
          <li>100% workmanship guarantee</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-24 bg-gray-950 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white">
          Need {serviceName} in {cityName}?
        </h2>

        <p className="text-gray-400 mt-4">
          Call now for a free inspection and estimate.
        </p>

        <div className="mt-8">
          <a
            href="tel:+1XXXXXXXXXX"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg"
          >
            📞 Call Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 bg-black text-center border-t border-gray-800">
        <p className="text-white font-semibold">MV Roofing Co</p>
        <p className="text-gray-500 text-sm mt-2">
          Serving {cityName} and surrounding cities
        </p>
      </footer>

    </main>
  );
}