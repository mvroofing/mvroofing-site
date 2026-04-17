import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Services } from "@/components/services";
import { RoofEstimator } from "@/components/roof-estimator";
import { ContactForm } from "@/components/contact-form";
import { CallButton } from "@/components/call-button";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <RoofEstimator />
        <ContactForm />
      </main>
      <CallButton />
    </>
  );
}
