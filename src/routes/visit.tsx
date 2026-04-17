import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ExternalLink,
  Navigation,
  Mail,
} from "lucide-react";
import { business, amenityGroups } from "@/data/menu";
import shopSign from "@/assets/Pasted image (35).png";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Arvind Canteen — Main Road, Barharwa, Jharkhand" },
      {
        name: "description",
        content:
          "Find Arvind Canteen at Main Road, near UCO Bank, Barharwa, Jharkhand 816101. Phone, directions, hours, dine-in and takeaway.",
      },
      { property: "og:title", content: "Visit Arvind Canteen — Barharwa, Jharkhand" },
      {
        property: "og:description",
        content:
          "Main Road, near UCO Bank, Barharwa, Jharkhand 816101. Open daily till 10 pm. Dine-in & takeaway.",
      },
      { property: "og:image", content: shopSign },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    }
  }, []);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream py-12 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto max-w-7xl px-5 sm:px-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm">
            Find us
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Main Road, Barharwa.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-foreground/70 sm:text-base">
            Near UCO Bank, in front of Patanjali — easy to find, easy to settle
            in, easy to grab sweets on the go.
          </p>
        </motion.div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 sm:space-y-4 lg:col-span-2"
          >
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft transition active:scale-[0.99] hover:shadow-lift sm:rounded-3xl sm:p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sage/30 text-primary">
                <MapPin className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] uppercase tracking-wider text-foreground/55">Address</p>
                <p className="mt-1 font-display text-lg sm:text-xl">Arvind Canteen</p>
                <p className="text-sm text-foreground/75">Main Road, near UCO Bank</p>
                <p className="text-sm text-foreground/65">
                  In front of Patanjali, Barharwa
                </p>
                <p className="text-sm text-foreground/60">Jharkhand 816101</p>
                <p className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </p>
              </div>
            </a>

            <a
              href={business.phoneHref}
              className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft transition active:scale-[0.99] hover:shadow-lift sm:rounded-3xl sm:p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blush/40 text-foreground/80">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-foreground/55">Call</p>
                <p className="mt-1 font-display text-lg sm:text-xl">{business.phone}</p>
                <p className="text-sm text-foreground/65">{business.phone2}</p>
                <p className="text-sm text-foreground/55">Tap to call from your phone</p>
              </div>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft transition active:scale-[0.99] hover:shadow-lift sm:rounded-3xl sm:p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-foreground/55">Email</p>
                <p className="mt-1 font-display text-base sm:text-lg break-all">{business.email}</p>
                <p className="text-sm text-foreground/55">Tap to email us</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-soft sm:rounded-3xl sm:p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-foreground/55">Hours</p>
                <p className="mt-1 font-display text-lg sm:text-xl">Open daily</p>
                <p className="text-sm text-foreground/65">
                  Fresh sweets and snacks — closes at 10 pm.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 sm:gap-3">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground transition active:scale-[0.98] hover:opacity-90 sm:flex-none"
              >
                <Navigation className="h-4 w-4" /> Get directions
              </a>
              <Link
                to="/menu"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-foreground transition active:scale-[0.98] hover:bg-cream sm:flex-none"
              >
                View menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative overflow-hidden rounded-3xl bg-card shadow-lift lg:col-span-3"
          >
            <iframe
              title="Arvind Canteen — Main Road, Barharwa, Jharkhand"
              src={business.mapsEmbed}
              className="block h-[380px] w-full border-0 sm:h-[500px] lg:h-full lg:min-h-[520px]"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink shadow-lift backdrop-blur transition active:scale-95 hover:bg-white"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Open in Maps
            </a>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="scroll-mt-20 bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm">
              What's on offer
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Everything you'd want from a sweet shop.
            </h2>
            <p className="mt-3 text-sm text-foreground/70 sm:text-base">
              The little things that make a visit easy — and the bigger things
              that keep locals coming back for 70 years.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenityGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="rounded-2xl bg-card p-5 shadow-soft transition hover:shadow-lift sm:p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {group.title}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
