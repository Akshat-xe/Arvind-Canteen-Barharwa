import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, WheatOff } from "lucide-react";
import { food, drinks, type MenuCategory, type MenuItem } from "@/data/menu";
import heroCoffee from "@/assets/hero-coffee.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Orah Cafe Perth | Breakfast, Lunch, Coffee" },
      {
        name: "description",
        content:
          "Browse the full Orah Cafe menu — eggs benny, buddha bowls, burgers, pasta, fresh salads, smoothies, specialty coffee and more. Perth CBD on Hay Street.",
      },
      { property: "og:title", content: "Orah Cafe — Full Menu" },
      { property: "og:description", content: "Breakfast, lunch, coffee and bakery in Perth CBD." },
      { property: "og:image", content: heroCoffee },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [tab, setTab] = useState<"food" | "drinks">("food");
  const cats = tab === "food" ? food : drinks;

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">The menu</p>
          <h1 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">
            Made fresh, served simply.
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Brunch favourites, healthy bowls, comforting mains, and the kind of
            coffee that makes you slow down. Prices in AUD.
          </p>

          <div className="mt-10 inline-flex rounded-full bg-card p-1 shadow-soft">
            <button
              onClick={() => setTab("food")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === "food" ? "bg-ink text-ink-foreground" : "text-foreground/70"
              }`}
            >
              Food
            </button>
            <button
              onClick={() => setTab("drinks")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === "drinks" ? "bg-ink text-ink-foreground" : "text-foreground/70"
              }`}
            >
              Drinks
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="sticky top-24 z-10 -mx-6 mb-10 overflow-x-auto bg-background/80 px-6 backdrop-blur">
          <div className="flex gap-2 pb-3">
            {cats.map((c) => (
              <a
                key={c.title}
                href={`#${slug(c.title)}`}
                className="whitespace-nowrap rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground/75 hover:bg-cream"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {cats.map((c) => (
            <CategoryBlock key={c.title} cat={c} />
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-cream p-8 text-center md:p-12">
          <h3 className="font-display text-3xl">Hungry yet?</h3>
          <p className="mt-2 text-foreground/70">Pop in for a coffee, brunch or a quick lunch break.</p>
          <Link
            to="/visit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground hover:opacity-90"
          >
            Visit us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function CategoryBlock({ cat }: { cat: MenuCategory }) {
  return (
    <div id={slug(cat.title)} className="scroll-mt-32">
      <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-4">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">{cat.title}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
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
      className="rounded-2xl bg-card p-5 shadow-soft transition hover:shadow-lift"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-lg leading-tight">{item.name}</h3>
            {item.dietary?.includes("V") && (
              <span className="inline-flex items-center gap-1 rounded-full bg-sage/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                <Leaf className="h-3 w-3" /> V
              </span>
            )}
            {item.dietary?.includes("GF") && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blush/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground/80">
                <WheatOff className="h-3 w-3" /> GF
              </span>
            )}
          </div>
          {item.description && <p className="mt-1 text-sm text-foreground/65">{item.description}</p>}
          {item.add && item.add.length > 0 && (
            <p className="mt-2 text-xs text-foreground/55">
              {item.add.map((a) => `add ${a.label} +$${a.price.toFixed(0)}`).join(" · ")}
            </p>
          )}
        </div>
        <div className="shrink-0 text-right">
          {item.price !== undefined ? (
            <span className="font-display text-lg text-foreground">${item.price.toFixed(2)}</span>
          ) : (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
              ask staff
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
