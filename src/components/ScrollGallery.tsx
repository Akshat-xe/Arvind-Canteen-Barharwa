import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { galleryImages } from "@/data/menu";

/**
 * Scroll-driven gallery for the /gallery page.
 * Three columns drift at different speeds; cards fade & scale in.
 * Add new items to galleryImages — they'll automatically slot in.
 */
export function ScrollGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  // Distribute images into 3 columns
  const cols: typeof galleryImages[] = [[], [], []];
  galleryImages.forEach((img, i) => cols[i % 3].push(img));

  return (
    <div ref={ref} className="relative">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
        <Column items={cols[0]} y={y1} />
        <Column items={cols[1]} y={y2} className="hidden md:block" />
        {/* On mobile/tablet, push col 2 into col 0 area via order; show col 1 in col 2 spot */}
        <Column items={cols[2]} y={y3} />
        {/* Mobile fallback to keep column 2 visible */}
        <Column items={cols[1]} y={y2} className="md:hidden" />
      </div>
    </div>
  );
}

function Column({
  items,
  y,
  className = "",
}: {
  items: { src: string; label: string }[];
  y: ReturnType<typeof useTransform<number, string>>;
  className?: string;
}) {
  return (
    <motion.div style={{ y }} className={`flex flex-col gap-3 sm:gap-4 ${className}`}>
      {items.map((g, i) => (
        <motion.figure
          key={g.src + i}
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          whileHover={{ scale: 1.02 }}
          className="group relative overflow-hidden rounded-2xl bg-card shadow-soft transition hover:shadow-lift"
        >
          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src={g.src}
              alt={g.label}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent p-3 sm:p-4">
            <figcaption className="font-display text-sm text-white drop-shadow-md sm:text-base">
              {g.label}
            </figcaption>
          </div>
        </motion.figure>
      ))}
    </motion.div>
  );
}
