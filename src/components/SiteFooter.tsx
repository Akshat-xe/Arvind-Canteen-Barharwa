import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Star, Wifi, Trees, ArrowUpRight } from "lucide-react";
import { business, highlights } from "@/data/menu";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-ink font-display text-xl">
                o
              </span>
              <span className="font-display text-2xl">Orah Cafe</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-ink-foreground/70">
              Bright Perth café on Hay Street. Honest food, lovely coffee, and a
              corner of the city to slow down in.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                <Star className="h-3.5 w-3.5 fill-current text-accent" /> 4.9 · 440 reviews
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                <Wifi className="h-3.5 w-3.5" /> Free Wi-Fi
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                <Trees className="h-3.5 w-3.5" /> Outdoor seating
              </span>
            </div>
          </div>

          {/* Most loved */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg">Most Loved</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
              {highlights.slice(0, 6).map((h) => (
                <li key={h.name} className="hover:text-ink-foreground transition-colors">
                  {h.name}
                </li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              View full menu <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Explore (new column) */}
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
                Suite 3, 459 Hay St
                <br />
                Perth WA 6000
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
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-foreground/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Orah Cafe. Made with care in Perth.</p>
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
    </footer>
  );
}
