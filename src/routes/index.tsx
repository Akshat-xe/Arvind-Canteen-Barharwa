import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Phone,
  UtensilsCrossed,
  Cake,
  Cookie,
  Clock,
  ArrowRight,
  Sparkles,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { highlights, business, shopInterior, shopInterior2 } from "@/data/menu";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { PopularTimes } from "@/components/PopularTimes";
import shopSign from "@/assets/Pasted image (35).png";
import gulabJamun from "@/assets/Pasted image (13).png";
import barfi from "@/assets/Pasted image (4).png";
import creamRolls from "@/assets/Pasted image (5).png";
import roseSweets from "@/assets/Pasted image (50).png";
import flowerPeda from "@/assets/Pasted image (8).png";
import motichoorLadoo from "@/assets/Pasted image (18).png";
import cakeDisplay from "@/assets/Pasted image.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arvind Canteen Barharwa — Sweets, Snacks & Bakery Since 1956" },
      {
        name: "description",
        content:
          "Arvind Canteen, Barharwa's most trusted sweet shop since 1956. Fresh sweets, savory snacks and bakery — 70 years of taste and legacy on Main Road.",
      },
      { property: "og:title", content: "Arvind Canteen Barharwa — Since 1956" },
      {
        property: "og:description",
        content:
          "70 Years of Trust & Legacy. Fresh sweets, snacks and bakery in Barharwa, Jharkhand. 4.3★ on Google.",
      },
      { property: "og:image", content: shopSign },
      { name: "twitter:image", content: shopSign },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Highlights />
      <WhyLocals />
      <TestimonialsSection />
      <PopularTimes />
      <Visit />
      <FAQ />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blush/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sage/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur"
          >
            <MapPin className="h-3.5 w-3.5" /> Main Road, near UCO Bank, Barharwa
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Fresh sweets.<br />
            <span className="italic text-primary">70 years</span> of trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-lg text-base text-foreground/70 sm:text-lg"
          >
            Arvind Canteen — Barharwa's favourite sweet shop since 1956.
            Traditional mithai, crispy snacks, fresh bakery, and birthday cakes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground transition hover:opacity-90"
            >
              View Menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:bg-cream"
            >
              Visit Us
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/60"
            >
              <Phone className="h-4 w-4" /> Call now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3 text-xs"
          >
            <Chip icon={<Star className="h-3.5 w-3.5 fill-current text-accent" />}>
              4.3 Google Rating
            </Chip>
            <Chip icon={<Cake className="h-3.5 w-3.5" />}>Birthday Cakes</Chip>
            <Chip icon={<Cookie className="h-3.5 w-3.5" />}>Fresh Sweets</Chip>
            <Chip icon={<MapPin className="h-3.5 w-3.5" />}>Barharwa, JH</Chip>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift">
            <img
              src={shopSign}
              alt="Arvind Canteen Since 1956 — Sweets, Snacks, Bakery, Barharwa"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full object-cover object-center md:aspect-[5/6]"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 hidden rounded-3xl bg-white p-4 shadow-lift md:block"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-sage/30 text-primary">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <p className="text-2xl font-semibold leading-none">4.3</p>
                <p className="text-xs text-foreground/60">152 Google reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-10 hidden rounded-3xl bg-ink p-4 text-ink-foreground shadow-lift md:block"
          >
            <p className="text-xs uppercase tracking-wider text-ink-foreground/60">Est.</p>
            <p className="mt-1 font-display text-lg">Since 1956</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Chip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 font-medium text-foreground/80 backdrop-blur">
      {icon} {children}
    </span>
  );
}

function TrustStrip() {
  const items = [
    { icon: <Cake className="h-5 w-5" />, label: "Fresh sweets daily" },
    { icon: <Cookie className="h-5 w-5" />, label: "Crispy savory snacks" },
    { icon: <UtensilsCrossed className="h-5 w-5" />, label: "Bakery & cakes" },
    { icon: <ShoppingBag className="h-5 w-5" />, label: "Takeaway & dine-in" },
    { icon: <Star className="h-5 w-5" />, label: "Since 1956" },
    { icon: <Heart className="h-5 w-5" />, label: "Vegetarian only" },
  ];
  return (
    <section className="border-y border-border/60 bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-5 text-sm text-foreground/70 sm:px-6 sm:py-6">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-2">
            <span className="text-primary">{it.icon}</span>
            <span className="font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Most loved at Arvind Canteen
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              The sweets people reorder.
            </h2>
            <p className="mt-4 text-foreground/70">
              Fresh every day — from our Gulab Jamun to birthday cakes, with chai
              on the side. 70 years of taste in every bite.
            </p>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-cream"
          >
            See full menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {highlights.slice(0, 6).map((h, i) => (
            <motion.article
              key={h.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-card shadow-soft transition hover:shadow-lift sm:rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={h.image}
                  alt={h.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-foreground backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                  <Sparkles className="h-3 w-3 text-primary" /> {h.tag}
                </span>
              </div>
              <div className="p-3 sm:p-5">
                <h3 className="font-display text-sm leading-snug sm:text-xl">{h.name}</h3>
                <p className="mt-1 hidden text-sm text-foreground/65 sm:block">{h.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyLocals() {
  const reasons = [
    {
      icon: <Cake className="h-6 w-6" />,
      title: "Fresh every single day",
      body: "Sweets made fresh daily — never stale, always authentic. Customers notice it in every bite.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "70 years of trust",
      body: "Since 1956, Arvind Canteen has been the go-to sweet shop for Barharwa's families.",
    },
    {
      icon: <Cookie className="h-6 w-6" />,
      title: "Sweets, snacks & bakery",
      body: "Traditional mithai, crispy snacks, bakery items, and birthday cakes — all under one roof.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Warm, friendly service",
      body: "A welcoming shop where everyone gets a smile and sweets taste like they were made with care.",
    },
  ];
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div className="relative">
            <img
              src={shopInterior}
              alt="Arvind Canteen shop interior with sweets counter and display"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-lift"
            />
            <img
              src={shopInterior2}
              alt="Arvind Canteen snacks and bakery counter"
              width={800}
              height={1000}
              loading="lazy"
              className="absolute -bottom-10 -right-6 hidden aspect-[3/4] w-44 rounded-3xl border-4 border-cream object-cover shadow-lift md:block"
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Why Barharwa loves Arvind Canteen
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              The Main Road ritual.
            </h2>
            <p className="mt-4 max-w-lg text-foreground/70">
              Tucked on Main Road near UCO Bank, this is the kind of place where
              regulars know exactly what they want, kids save their pocket money
              for, and no celebration is complete without a box of sweets.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="rounded-2xl bg-card p-5 shadow-soft">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sage/30 text-primary">
                    {r.icon}
                  </div>
                  <h3 className="mt-3 font-display text-lg">{r.title}</h3>
                  <p className="mt-1 text-sm text-foreground/65">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const arvindTestimonials = [
  {
    quote:
      "Sweets are always fresh, perfectly balanced in taste. Snacks are crispy and flavorful. Clean shop, friendly staff. A must visit!",
    name: "Vishal Thakur",
    designation: "Regular Customer",
    src: gulabJamun,
  },
  {
    quote:
      "Best sweet shop ever! Fresh, tasty sweets and amazing snacks. Highly recommended to everyone in Barharwa.",
    name: "BYT JerryOP",
    designation: "Barharwa Local",
    src: cakeDisplay,
  },
  {
    quote:
      "Loved the Motichoor Ladoo and Malai Barfi — soft, fresh, traditional flavor is rich. Freshness and quality noticeable in every bite.",
    name: "Ayush Rastogi",
    designation: "Sweet Lover",
    src: barfi,
  },
  {
    quote:
      "Gulab Jamun perfectly soaked, Rasgulla melted in mouth, Kaju Katli rich and smooth. Each item tasted freshly made.",
    name: "Local Customer",
    designation: "Regular",
    src: flowerPeda,
  },
  {
    quote:
      "Must-visit for sweet lovers. Aroma, décor and friendly service create a wonderful atmosphere. Best in town!",
    name: "Ansh Raj",
    designation: "College Student",
    src: roseSweets,
  },
  {
    quote:
      "Warm aroma of freshly made delicacies. Cozy, inviting atmosphere. Works for a quick treat or full shopping. Never disappoints.",
    name: "Sumit Kumar",
    designation: "Regular Visitor",
    src: shopInterior as string,
  },
  {
    quote: "Great variety of sweets, super fresh and right sweetness. Easily the best quality sweet shop in Barharwa.",
    name: "Journal Roy",
    designation: "Visitor",
    src: motichoorLadoo,
  },
  {
    quote:
      "Food is delicious, top-notch quality. They provide the best service. Clean, cozy atmosphere. Highly recommend!",
    name: "Yatish Kumar",
    designation: "Regular",
    src: creamRolls,
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              What people say
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Loved by Barharwa.
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 rounded-2xl bg-secondary px-5 py-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < 4 ? "fill-current text-accent" : "fill-current text-accent/40"}`}
                />
              ))}
            </div>
            <div>
              <p className="text-2xl font-semibold leading-none">4.3</p>
              <p className="text-xs text-foreground/60">152 Google reviews</p>
            </div>
          </div>
        </div>
        <CircularTestimonials testimonials={arvindTestimonials} />
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 overflow-hidden rounded-[2.5rem] bg-card shadow-soft md:grid-cols-2">
          <div className="p-6 sm:p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Visit us</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              On Main Road, Barharwa.
            </h2>
            <p className="mt-4 text-foreground/70">
              Easy to find — near UCO Bank, in front of Patanjali. Pop in for sweets,
              snacks, or a birthday cake.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-2xl bg-secondary p-4 transition active:scale-[0.99] hover:bg-cream"
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Arvind Canteen</p>
                  <p className="text-sm text-foreground/65">Main Road, near UCO Bank</p>
                  <p className="text-sm text-foreground/60">Barharwa, Jharkhand 816101</p>
                </div>
              </a>
              <a
                href={business.phoneHref}
                className="flex items-start gap-3 rounded-2xl bg-secondary p-4 transition active:scale-[0.99] hover:bg-cream"
              >
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">{business.phone}</p>
                  <p className="text-sm text-foreground/60">Tap to call</p>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-2xl bg-secondary p-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Open daily · Closes 10 pm</p>
                  <p className="text-sm text-foreground/60">Fresh sweets and snacks every day.</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {["Dine-in", "Takeaway", "Vegetarian only", "Cash only", "Free parking", "Good for kids"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background px-3 py-1.5 font-medium text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition active:scale-95 hover:opacity-90"
              >
                Get directions <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground transition active:scale-95 hover:bg-cream"
              >
                View menu
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px]">
            <iframe
              title="Arvind Canteen location — Barharwa, Jharkhand"
              src={business.mapsEmbed}
              className="absolute inset-0 h-full w-full border-0"
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What do you sell at Arvind Canteen?",
      a: "We sell traditional Indian sweets (mithai), savory snacks like samosa and golgappa, bakery items, and custom birthday cakes. All vegetarian.",
    },
    {
      q: "Are the sweets made fresh?",
      a: "Yes — sweets and snacks are made fresh daily. Customers consistently praise the freshness and authentic taste.",
    },
    {
      q: "Do you make custom birthday cakes?",
      a: "Yes, we make custom celebration cakes. Come in or call us to place your order in advance.",
    },
    {
      q: "Where exactly is Arvind Canteen?",
      a: "We're on Main Road, near UCO Bank, in front of Patanjali, Barharwa, Jharkhand 816101.",
    },
    {
      q: "What are your opening hours?",
      a: "We are open daily and close at 10 pm. Come in anytime for fresh sweets, snacks, or a quick bite.",
    },
    {
      q: "Do you offer takeaway?",
      a: "Yes — takeaway and dine-in both available. We also offer delivery and catering for events.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We currently accept cash only.",
    },
  ];
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">FAQ</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
          Good things to know.
        </h2>
        <div className="mt-10 divide-y divide-border rounded-3xl bg-card shadow-soft">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base sm:text-lg">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-foreground/60 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-foreground/70 sm:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
