"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { STRING_ART_PINS, STRING_ART_SEQUENCE_RAW } from "@/data/stringArt";

function SecretVideoModal({
  open,
  onClose,
  videoSrc,
}: {
  open: boolean;
  onClose: () => void;
  videoSrc: string;
}) {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (!open) return;
    setVideoError(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/80"
            aria-label="Cerrar video"
          />
          <motion.div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl"
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-4 py-3 sm:px-5">
              <p className="font-serif text-sm tracking-wide text-white/75">
                Un detalle que no se dice en voz alta
              </p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white/10"
              >
                Cerrar
              </button>
            </div>
            <div className="px-3 pb-4 sm:px-5 sm:pb-5">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <video
                  className="h-auto w-full bg-black"
                  src={videoSrc}
                  controls
                  playsInline
                  preload="metadata"
                  onError={() => setVideoError(true)}
                />
              </div>
              {videoError ? (
                <p className="mt-3 font-sans text-xs leading-6 text-white/60">
                  No pude cargar el video. Asegúrate de tenerlo en{" "}
                  <span className="font-mono">public/secret/our-video.mp4</span>{" "}
                  (o ajusta <span className="font-mono">videoSrc</span>).
                </p>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function PinSequenceSecretSection({
  videoSrc = "/secret/our-video.mp4",
}: {
  videoSrc?: string;
}) {
  const reduce = useReducedMotion();
  const [videoOpen, setVideoOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const openTsRef = useRef(0);

  const { prettySequence, stepCount } = useMemo(() => {
    // Source is exactly the "RAW DATA" CSV from the instructions file.
    const seq = STRING_ART_SEQUENCE_RAW.split(",").map((n) => Number(n));
    const perLine = 28;

    const parts: string[] = [];
    for (let i = 0; i < seq.length; i++) {
      parts.push(String(seq[i]).padStart(3, "0"));
      parts.push((i + 1) % perLine === 0 ? "\n" : "  ");
    }

    return {
      prettySequence: parts.join(""),
      stepCount: seq.length,
    };
  }, []);

  function openLetter() {
    openTsRef.current = Date.now();
    setOpen(true);
  }

  function maybeOpenVideo() {
    // Avoid accidental video open while tapping to open the letter
    // (especially on mobile where quick taps can bubble).
    const dt = Date.now() - openTsRef.current;
    if (dt < 350) return;
    setVideoOpen(true);
  }

  return (
    <section className="w-full bg-[#0f0f0f] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs tracking-[0.26em] text-white/45">
            CARTA
          </p>
          <h2 className="mt-5 font-serif text-[clamp(26px,4.6vw,44px)] leading-[1.12] text-white/90">
            Esto no son solo números.
          </h2>
          <p className="mt-5 font-sans text-sm leading-7 text-white/55">
            Ábrela para ver la secuencia real de enlazar los hilos, paso a paso,
            hasta formar nuestra imagen. Cuando la toques, aparece el video.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-[980px]">
            <div className="relative mx-auto w-full max-w-[780px]">
              {/* Envelope */}
              <motion.div
                className={[
                  "relative rounded-[28px]",
                  "border border-white/10 bg-white/[0.02]",
                  "shadow-[0_24px_120px_rgba(0,0,0,0.55)]",
                  "min-h-[560px] sm:min-h-[640px]",
                ].join(" ")}
                style={{
                  perspective: 1200,
                  overflow: open ? "visible" : "hidden",
                }}
                initial={false}
                animate={open ? "open" : "closed"}
                variants={{
                  closed: {
                    boxShadow: "0 24px 120px rgba(0,0,0,0.55)",
                  },
                  open: {
                    boxShadow: "0 28px 140px rgba(0,0,0,0.65)",
                  },
                }}
                transition={{ duration: reduce ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Back paper texture */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(255,255,255,0.08),transparent_45%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_40%)]" />

                {/* Flap */}
                <motion.div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[54%] origin-top"
                  style={{
                    transformStyle: "preserve-3d",
                    clipPath: "polygon(0 0, 100% 0, 50% 78%)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                  variants={{
                    closed: { rotateX: 0, y: 0, opacity: 1 },
                    open: { rotateX: -160, y: -8, opacity: 0.92 },
                  }}
                  transition={{
                    duration: reduce ? 0.01 : 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Front pocket */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%]"
                  style={{
                    clipPath: "polygon(0 0, 50% 60%, 100% 0, 100% 100%, 0 100%)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                  }}
                />

                {/* Letter paper */}
                <motion.div
                  className={[
                    "absolute inset-x-0 bottom-6 mx-auto w-[94%] sm:w-[92%]",
                    "rounded-[22px] border border-white/10 bg-[#0b0b0b]",
                    "will-change-transform",
                  ].join(" ")}
                  variants={{
                    closed: { y: 210, opacity: 0, scale: 0.985, rotateZ: -0.5 },
                    open: { y: -120, opacity: 1, scale: 1, rotateZ: 0 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: reduce ? 999 : 240,
                    damping: reduce ? 80 : 22,
                    mass: 0.9,
                    delay: reduce ? 0 : 0.14,
                  }}
                >
                  {/* subtle paper texture */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[22px] opacity-80"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.04), transparent 35%), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 22px)",
                    }}
                  />
                  {/* depth shadow */}
                  <motion.div
                    className="pointer-events-none absolute -inset-x-2 -bottom-3 h-10 rounded-[28px] blur-xl"
                    style={{ background: "rgba(0,0,0,0.55)" }}
                    variants={{
                      closed: { opacity: 0, scaleX: 0.92 },
                      open: { opacity: 1, scaleX: 1 },
                    }}
                    transition={{
                      duration: reduce ? 0.01 : 0.55,
                      ease: [0.22, 1, 0.36, 1],
                      delay: reduce ? 0 : 0.18,
                    }}
                  />

                  <div className="relative flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
                    <p className="font-sans text-xs tracking-[0.22em] text-white/45">
                      {STRING_ART_PINS} pins · {stepCount} steps
                    </p>
                    <button
                      type="button"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/60 transition hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      cerrar
                    </button>
                  </div>

                  <motion.button
                    type="button"
                    onClick={maybeOpenVideo}
                    className={[
                      "block w-full text-left",
                      "px-4 pt-4 sm:px-5 sm:pt-5",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
                    ].join(" ")}
                    aria-label="Esto no son solo números (tocar para ver video)"
                    whileTap={reduce ? undefined : { scale: 0.995 }}
                  >
                    <p className="font-serif text-lg text-white/90">
                      Esto no son solo números.
                    </p>
                    <p className="mt-1 font-sans text-xs leading-6 text-white/55">
                      Es la secuencia real para enlazar los hilos y revelar la
                      imagen. Tócame.
                    </p>
                  </motion.button>

                  <motion.pre
                    className={[
                      "max-h-[56vh] overflow-auto px-4 pb-5 pt-4 sm:px-5",
                      "whitespace-pre-wrap break-words",
                      "font-mono text-[11px] leading-5 text-white/70",
                    ].join(" ")}
                    initial={false}
                    variants={{
                      closed: {
                        opacity: 0,
                        y: 10,
                        clipPath: "inset(0 0 100% 0 round 0px)",
                      },
                      open: {
                        opacity: 1,
                        y: 0,
                        clipPath: "inset(0 0 0% 0 round 0px)",
                      },
                    }}
                    transition={{
                      duration: reduce ? 0.01 : 0.55,
                      ease: [0.22, 1, 0.36, 1],
                      delay: reduce ? 0 : 0.22,
                    }}
                  >
                    {prettySequence}
                  </motion.pre>
                </motion.div>

                {/* Open CTA (when closed) */}
                <AnimatePresence>
                  {!open ? (
                    <motion.div
                      className="relative px-6 py-16 sm:px-10 sm:py-20"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: reduce ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="mx-auto max-w-[520px] text-center">
                        <p className="font-sans text-xs tracking-[0.22em] text-white/45">
                          (TOCA PARA ABRIR)
                        </p>
                        <button
                          type="button"
                          onClick={openLetter}
                          className={[
                            "mt-5 inline-flex items-center justify-center",
                            "rounded-full border border-white/10 bg-white/5 px-5 py-2.5",
                            "font-sans text-sm text-white/80 transition",
                            "hover:bg-white/10 active:scale-[0.99]",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
                          ].join(" ")}
                        >
                          Abrir carta
                        </button>
                        <p className="mt-4 font-sans text-xs leading-6 text-white/45">
                          Dentro está la secuencia completa.
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                {/* Bottom shine */}
                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 100%, rgba(255,255,255,0.08), transparent 65%)",
                  }}
                  variants={{
                    closed: { opacity: 0.35 },
                    open: { opacity: 0.7 },
                  }}
                  transition={{
                    duration: reduce ? 0.01 : 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Tap anywhere on open letter area to open video (optional): disabled to avoid accidental */}
              </motion.div>

              {/* Mobile friendly hit area: tapping the envelope when closed opens it */}
              {!open ? (
                <button
                  type="button"
                  onClick={openLetter}
                  className="absolute inset-0 rounded-[28px]"
                  aria-label="Abrir carta"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <SecretVideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoSrc={videoSrc}
      />
    </section>
  );
}

