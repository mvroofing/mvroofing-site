"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-lg border-b border-border/50">
      <div className="flex items-center justify-between px-5 py-3 md:px-8">
        {/* Desktop Left Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Home
          </Link>
          <Link
            href="#estimate"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Estimate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground min-h-11 min-w-11 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="#">
            <Image
              src="/logo.png"
              alt="MV Roofing"
              width={60}
              height={60}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>
        </div>

        {/* Desktop Right Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Contact
          </Link>
          <Link
            href="#estimate"
            className="px-5 py-2.5 border border-ring/50 rounded-full text-foreground text-sm hover:bg-foreground/5 transition-colors"
          >
            Book
          </Link>
        </div>

        {/* Mobile spacer for centering */}
        <div className="md:hidden w-11" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col p-4 gap-1">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="#estimate"
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              Estimate
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#estimate"
              onClick={() => setIsOpen(false)}
              className="mt-2 py-3 px-4 border border-ring/50 rounded-full text-center text-foreground hover:bg-foreground/5 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
