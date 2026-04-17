import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-5 pt-32 pb-20 md:px-8 md:pt-36">
      <div className="max-w-2xl">
        <h1 className="text-silver text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          Luxury Roofing. Built to Dominate.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-4 md:mt-6 max-w-lg">
          30+ years of precision roofing with elite craftsmanship.
        </p>
        <Link
          href="#estimate"
          className="inline-block mt-6 md:mt-8 px-7 py-3.5 border border-ring/50 rounded-full text-foreground hover:bg-foreground/5 transition-colors min-h-11"
        >
          Get Estimate
        </Link>
      </div>
    </section>
  );
}
