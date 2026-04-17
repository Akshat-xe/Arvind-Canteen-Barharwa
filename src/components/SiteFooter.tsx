import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Star, Instagram, Facebook, Heart } from "lucide-react";
import { business } from "@/data/menu";

const featuredSweets = [
  "Gulab Jamun",
  "Motichoor Ladoo",
  "Malai Barfi",
  "Kaju Katli",
  "Rasgulla",
  "Birthday Cakes",
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-ink font-display text-sm font-bold">
                AC
              </span>
              <div>
                <span className="font-display text-xl">Arvind Canteen</span>
                <p className="text-xs text-ink-foreground/55">Since 1956</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-ink-foreground/70">
              Barharwa's most loved sweet shop on Main Road. Traditional mithai,
              crispy snacks, bakery and birthday cakes — 70 years of trust and
              legacy in every bite.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                <Star className="h-3.5 w-3.5 fill-current text-accent" /> 4.3 · 152 reviews
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                <Heart className="h-3.5 w-3.5 fill-current text-accent" /> Vegetarian only
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                ₹1–200 per person
              </span>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Arvind Canteen on Instagram"
                className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 transition hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Arvind Canteen on Facebook"
                className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 transition hover:bg-white/20"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-foreground/50">
              Instagram: {business.instagramHandle}
            </p>
          </div>

          {/* Featured Sweets */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg">Our Sweets</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              {featuredSweets.map((item) => (
                <li key={item}>
                  <Link
                    to="/menu"
                    className="flex items-center gap-2 transition-colors hover:text-ink-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-ink-foreground/30" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              View full menu →
            </Link>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="font-display text-lg">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              <li>
                <Link to="/" className="transition-colors hover:text-ink-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="transition-colors hover:text-ink-foreground">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition-colors hover:text-ink-foreground">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/visit" className="transition-colors hover:text-ink-foreground">
                  Visit Us
                </Link>
              </li>
              <li>
                <a
                  href="/Arvind-Canteen-Barharwa/visit#amenities"
                  className="transition-colors hover:text-ink-foreground"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href={business.phoneHref}
                  className="transition-colors hover:text-ink-foreground"
                >
                  Call Now
                </a>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div className="md:col-span-2">
            <h4 className="font-display text-lg">Visit</h4>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-start gap-2 text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Main Road, near UCO Bank
                <br />
                Barharwa, JH 816101
              </span>
            </a>
            <a
              href={business.phoneHref}
              className="mt-3 flex items-center gap-2 text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
            >
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1">Dine-in</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Takeaway</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Cash only</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-ink-foreground/55">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Arvind Canteen, Barharwa. Since 1956.</p>
            <p>
              Web Developer · Web Designer:{" "}
              <span className="font-medium text-ink-foreground/75">Akshat Kumar</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="hover:text-ink-foreground">
                Menu
              </Link>
              <Link to="/gallery" className="hover:text-ink-foreground">
                Gallery
              </Link>
              <Link to="/visit" className="hover:text-ink-foreground">
                Visit
              </Link>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink-foreground"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
