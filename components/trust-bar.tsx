import { Star, Shield, CheckCircle, MapPin } from "lucide-react";

const trustItems = [
  { icon: Star, label: "30+ Years Experience" },
  { icon: Shield, label: "Licensed" },
  { icon: CheckCircle, label: "Guaranteed Work" },
  { icon: MapPin, label: "Riverside & LA" },
];

export function TrustBar() {
  return (
    <div className="bg-secondary border-y border-border">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 px-4 py-4 text-sm text-muted-foreground">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <item.icon size={16} className="text-accent" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
