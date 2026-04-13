import { Home, Wrench, Search, CloudRain } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Roof Installation",
    description: "Complete roof installations with premium materials",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    description: "Fast, reliable repairs to extend your roof&apos;s life",
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Advanced leak detection and prevention services",
  },
  {
    icon: CloudRain,
    title: "Storm Restoration",
    description: "Emergency storm damage repair and restoration",
  },
];

export function Services() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-silver text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-ring/50 transition-colors"
            >
              <service.icon size={28} className="text-accent mb-4" />
              <h3 className="text-foreground font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
