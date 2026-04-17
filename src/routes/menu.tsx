import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { food, drinks, type MenuCategory, type MenuItem } from "@/data/menu";
import shopSign from "@/assets/Pasted image (35).png";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Arvind Canteen Barharwa | Sweets, Snacks & Bakery" },
      {
        name: "description",
        content:
          "Browse Arvind Canteen's menu — traditional sweets like Gulab Jamun, Rasgulla, Kaju Katli, savory snacks, birthday cakes and bakery items in Barharwa, Jharkhand.",
      },
      { property: "og:title", content: "Arvind Canteen — Menu" },
      {
        property: "og:description",
        content: "Sweets, snacks and bakery in Barharwa, Jharkhand. Since 1956.",
      },
      { property: "og:image", content: shopSign },
    ],
  }),
  component: MenuPage,
});

const allGroups = [
  { group: "Food", categories: food },
  { group: "Drinks", categories: drinks },
] as const;

const allCategories = [...food, ...drinks];

function MenuPage() {
  const [activeId, setActiveId] = useState(slug(allCategories[0].title));

  useEffect(() => {
    const nodes = allCategories.map((c) => document.getElementById(slug(c.title)));
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    nodes.forEach((n) => n && obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Our menu</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Made fresh, served with love.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-foreground/70 sm:text-base">
            Traditional Indian sweets, crispy savory snacks, bakery items and
            custom birthday cakes. All vegetarian. All fresh. All from the heart
            since 1956.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-sage/20 px-3 py-1.5 text-xs font-medium text-primary">
            <Leaf className="h-3.5 w-3.5" /> 100% Vegetarian · Ask us for today's specials
          </p>
        </div>
      </section>

      {/* Mobile category strip */}
      <div className="sticky top-16 z-10 overflow-x-auto border-b border-border bg-background/95 backdrop-blur-md md:hidden">
        <div className="flex gap-2 px-5 py-3">
          {allCategories.map((c) => (
            <a
              key={c.title}
              href={`#${slug(c.title)}`}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                activeId === slug(c.title)
                  ? "bg-ink text-ink-foreground"
                  : "bg-secondary text-foreground/70 hover:text-foreground"
              }`}
            >
              {c.title}
            </a>
          ))}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex gap-8 lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden w-52 shrink-0 md:block">
            <div className="sticky top-24 py-10">
              {allGroups.map(({ group, categories }) => (
                <div key={group} className="mb-7">
                  <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/35">
                    {group}
                  </p>
                  <ul className="space-y-px">
                    {categories.map((c) => (
                      <li key={c.title}>
                        <a
                          href={`#${slug(c.title)}`}
                          className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                            activeId === slug(c.title)
                              ? "bg-secondary text-foreground"
                              : "text-foreground/55 hover:bg-secondary/60 hover:text-foreground"
                          }`}
                        >
                          {c.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0 flex-1 py-10">
            <SectionDivider label="Food" />
            {food.map((c) => (
              <CategoryBlock key={c.title} cat={c} />
            ))}

            <SectionDivider label="Drinks" className="mt-16" />
            {drinks.map((c) => (
              <CategoryBlock key={c.title} cat={c} />
            ))}

            {/* Pricing note */}
            <div className="mt-10 rounded-2xl bg-sage/10 border border-sage/20 p-5 text-sm text-foreground/70">
              <p className="font-semibold text-foreground">Pricing</p>
              <p className="mt-1">
                Items range from ₹1–200 per person. Prices may vary by quantity
                and season. Visit us or call for current rates and custom orders.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-3xl bg-cream p-7 text-center md:p-12">
              <h3 className="font-display text-2xl sm:text-3xl">Craving something sweet?</h3>
              <p className="mt-2 text-sm text-foreground/70 sm:text-base">
                Come visit us on Main Road — fresh sweets and snacks await.
              </p>
              <Link
                to="/visit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground hover:opacity-90"
              >
                Visit us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionDivider({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`mb-8 flex items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-border" />
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/35">
        {label}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function CategoryBlock({ cat }: { cat: MenuCategory }) {
  return (
    <div id={slug(cat.title)} className="mb-12 scroll-mt-36 md:scroll-mt-28">
      <div className="mb-5 border-b border-border pb-3">
        <h2 className="font-display text-2xl tracking-tight md:text-3xl">{cat.title}</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {cat.items.map((item) => (
          <ItemRow key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl bg-card p-4 shadow-soft transition hover:shadow-lift sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="font-display text-base leading-tight sm:text-lg">{item.name}</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-sage/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
              <Leaf className="h-2.5 w-2.5" /> Veg
            </span>
          </div>
          {item.description && (
            <p className="mt-1 text-xs text-foreground/60 sm:text-sm">{item.description}</p>
          )}
        </div>
        <span className="shrink-0 rounded-full bg-secondary px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/60 sm:px-3 sm:text-[11px]">
          Ask us
        </span>
      </div>
    </motion.div>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
