"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const roofTypes = [
  { value: "1", label: "Asphalt" },
  { value: "1.4", label: "Tile" },
  { value: "1.6", label: "Metal" },
];

const pitchOptions = [
  { value: "1", label: "Low Pitch" },
  { value: "1.2", label: "Medium Pitch" },
  { value: "1.5", label: "Steep Pitch" },
];

const complexityOptions = [
  { value: "1", label: "Simple" },
  { value: "1.3", label: "Moderate" },
  { value: "1.6", label: "Complex" },
];

export function RoofEstimator() {
  const [sqft, setSqft] = useState("");
  const [roofType, setRoofType] = useState("1");
  const [pitch, setPitch] = useState("1");
  const [complexity, setComplexity] = useState("1");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  function calculateEstimate() {
    if (!sqft) {
      setResult("Enter roof size");
      return;
    }

    const sqftNum = parseFloat(sqft);
    const typeMultiplier = parseFloat(roofType);
    const pitchMultiplier = parseFloat(pitch);
    const complexityMultiplier = parseFloat(complexity);

    const baseRate = 7;
    const total = sqftNum * baseRate * typeMultiplier * pitchMultiplier * complexityMultiplier;

    const low = Math.round(total * 0.9);
    const high = Math.round(total * 1.1);

    setResult(`$${low.toLocaleString()} - $${high.toLocaleString()}`);
  }

  return (
    <section id="estimate" className="py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-silver text-3xl md:text-4xl font-bold text-center mb-10">
          AI Roof Estimator
        </h2>

        <div className="p-5 md:p-6 bg-card border border-border rounded-xl">
          <div className="flex flex-col gap-3">
            <input
              type="number"
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
              placeholder="Roof Size (sq ft)"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring/50 transition-colors text-base"
            />

            <select
              value={roofType}
              onChange={(e) => setRoofType(e.target.value)}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-ring/50 transition-colors text-base appearance-none cursor-pointer"
            >
              {roofTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            <select
              value={pitch}
              onChange={(e) => setPitch(e.target.value)}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-ring/50 transition-colors text-base appearance-none cursor-pointer"
            >
              {pitchOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:border-ring/50 transition-colors text-base appearance-none cursor-pointer"
            >
              {complexityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-secondary file:text-foreground file:text-sm file:cursor-pointer text-base"
            />

            {preview && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={preview}
                  alt="Roof preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring/50 transition-colors text-base"
            />

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring/50 transition-colors text-base"
            />

            <button
              onClick={calculateEstimate}
              className="mt-2 px-6 py-3.5 border border-ring/50 rounded-full text-foreground hover:bg-foreground/5 transition-colors min-h-11"
            >
              Calculate Estimate
            </button>

            {result && (
              <div className="mt-3 text-center">
                <p className="text-silver text-2xl md:text-3xl font-bold">
                  {result}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
