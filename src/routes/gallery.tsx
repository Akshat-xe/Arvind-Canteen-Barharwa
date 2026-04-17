import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CircularGallery } from "@/components/CircularGallery";
import { ScrollGallery } from "@/components/ScrollGallery";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Orah Cafe Perth" },
      {
        name: "description",
        content:
          "A look inside Orah Cafe, Perth — fresh brunch, beautiful coffee and a bright Hay Street space.",
      },
      { property: "og:title", content: "Orah Cafe — Gallery" },
      {
        property: "og:description",
        content: "Brunch, coffee and café moments from Hay Street, Perth.",
      },
      { property: "og:image", content: interior },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="bg-background">
      {/* Hero with circular gallery */}
      <section className="relative overflow-hidden bg-ink py-16 text-ink-foreground md:py-24">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mb-6 text-center md:mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent sm:text-sm">
              Gallery
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-7xl">
              A floating spread of <span className="italic">Orah</span>.
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-foreground/70 sm:text-base">
              Drift through the dishes and moments people love. Scroll, hover,
              or just let it spin.
            </p>
          </div>

          <CircularGallery />
        </div>
      </section>

      {/* Scroll-driven gallery */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm">
              Every frame
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Scroll through Orah.
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition active:scale-95 hover:opacity-90"
          >
            See full menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ScrollGallery />
      </section>
    </div>
  );
}
