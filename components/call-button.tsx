import { Phone } from "lucide-react";

export function CallButton() {
  return (
    <a
      href="tel:+19519348958"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-foreground text-background px-5 py-3.5 rounded-full font-semibold shadow-lg hover:bg-accent transition-colors min-h-11"
      aria-label="Call MV Roofing"
    >
      <Phone size={18} />
      <span className="hidden sm:inline">Call</span>
    </a>
  );
}
