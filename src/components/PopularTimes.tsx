import { useState } from "react";
import { motion } from "framer-motion";

type DayKey = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

/**
 * Hourly busyness levels for Arvind Canteen — 16 bars from 8am to 11pm.
 * Sweet shop pattern: morning moderate, afternoon slow, evening peak.
 * Closes at 10 pm — bars 15 (11pm) always 0.
 * Values are 0-100 (relative busyness).
 */
const data: Record<DayKey, number[]> = {
  // 8a  9a  10a 11a 12p 1p  2p  3p  4p  5p  6p  7p  8p  9p  10p 11p
  MON: [10, 22, 32, 44, 36, 26, 18, 28, 44, 66, 76, 80, 66, 46, 14, 0],
  TUE: [12, 24, 34, 46, 38, 28, 20, 30, 46, 68, 78, 82, 68, 48, 16, 0],
  WED: [12, 26, 36, 48, 40, 30, 22, 32, 48, 70, 80, 84, 70, 50, 18, 0],
  THU: [14, 28, 38, 50, 42, 32, 24, 34, 50, 72, 82, 86, 74, 54, 20, 0],
  FRI: [16, 32, 42, 54, 46, 34, 28, 38, 54, 76, 88, 92, 80, 60, 24, 0],
  // Saturday — busy all day, strongest evening
  SAT: [22, 38, 52, 66, 60, 48, 44, 52, 64, 82, 92, 96, 88, 70, 30, 0],
  // Sunday — steady, good evening
  SUN: [18, 32, 44, 56, 52, 44, 38, 46, 58, 76, 86, 90, 78, 58, 22, 0],
};

const days: DayKey[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const dayLabels: Record<DayKey, string> = {
  MON: "Mon",
  TUE: "Tue",
  WED: "Wed",
  THU: "Thu",
  FRI: "Fri",
  SAT: "Sat",
  SUN: "Sun",
};
// 6 evenly-spaced labels across 16 bars (8a–11p)
const xLabels = ["8a", "11a", "2p", "5p", "8p", "11p"];

const summaries: Record<DayKey, { peak: string; vibe: string }> = {
  MON: { peak: "6p–8p", vibe: "Steady evening rush after work" },
  TUE: { peak: "6p–8p", vibe: "Good evening flow" },
  WED: { peak: "6p–8p", vibe: "Mid-week, calm morning, busy evening" },
  THU: { peak: "6p–8p", vibe: "Pre-weekend buzz picks up" },
  FRI: { peak: "6p–8p", vibe: "Busiest weekday evening" },
  SAT: { peak: "6p–9p", vibe: "Busiest day — lively all day" },
  SUN: { peak: "6p–8p", vibe: "Family visits, great evening crowd" },
};

export function PopularTimes() {
  const [day, setDay] = useState<DayKey>("SAT");
  const bars = data[day];
  const liveIndex = day === "SAT" ? 10 : -1; // Saturday live highlight ~6p

  const peakIdx = bars.indexOf(Math.max(...bars));
  const max = Math.max(...bars, 1);

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm">
            Visit rhythm
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            When we're busiest.
          </h2>
          <p className="mt-3 text-sm text-foreground/70 sm:mt-4 sm:text-base">
            A peek at how the shop flows through the week — handy for knowing
            when to visit for the freshest sweets or a quieter stop.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="rounded-3xl bg-ink p-5 text-ink-foreground shadow-lift sm:p-6 md:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex w-full flex-wrap gap-1 rounded-2xl bg-white/5 p-1 sm:w-auto sm:rounded-full">
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  className={`flex-1 rounded-xl px-2.5 py-2 text-xs font-semibold tracking-wide transition active:scale-95 sm:flex-none sm:rounded-full sm:px-3.5 sm:py-1.5 ${
                    day === d
                      ? "bg-cream text-ink shadow-soft"
                      : "text-ink-foreground/70 hover:text-ink-foreground"
                  }`}
                >
                  <span className="sm:hidden">{dayLabels[d].slice(0, 1)}</span>
                  <span className="hidden sm:inline">{d}</span>
                </button>
              ))}
            </div>

            {day === "SAT" && (
              <div className="flex items-center gap-2 text-[11px] text-ink-foreground/80 sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Sat evening — typically busy
              </div>
            )}
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="relative h-44 sm:h-52">
              {/* grid lines */}
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="border-t border-white/5" />
                ))}
              </div>

              <div className="relative flex h-full items-end gap-1 sm:gap-1.5">
                {bars.map((v, i) => {
                  const isLive = i === liveIndex;
                  const isPeak = i === peakIdx;
                  const heightPct = (v / max) * 100;
                  return (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${heightPct}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.025,
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                      className={`relative flex-1 rounded-t-md sm:rounded-t-lg ${
                        isLive
                          ? "bg-accent"
                          : isPeak
                            ? "bg-sage"
                            : "bg-white/15 hover:bg-white/25"
                      }`}
                      title={`${v}%`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-wider text-ink-foreground/55 sm:text-[11px]">
              {xLabels.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:mt-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-foreground/50">Day</p>
              <p className="mt-1 font-display text-base sm:text-lg">{dayLabels[day]}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-foreground/50">Peak</p>
              <p className="mt-1 font-display text-base sm:text-lg">{summaries[day].peak}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-ink-foreground/50">Vibe</p>
              <p className="mt-1 text-sm text-ink-foreground/80">{summaries[day].vibe}</p>
            </div>
          </div>

          <p className="mt-5 text-[11px] text-ink-foreground/55 sm:text-xs">
            Open daily · Closes 10 pm · Fresh sweets and snacks every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
