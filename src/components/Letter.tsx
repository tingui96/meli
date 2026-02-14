import Image from "next/image";
import { letterBlocks } from "@/data/letter";
import { Reveal } from "@/components/Reveal";

export function Letter() {
  return (
    <section className="px-6 pb-28">
      <div id="letter-start" className="h-10" aria-hidden="true" />

      <div className="mx-auto w-full max-w-2xl">
        <Reveal>
          <div className="mb-10">
            <p className="font-sans text-xs tracking-[0.22em] text-black/45">
              PARA TI
            </p>
            <p className="mt-3 font-sans text-sm leading-7 text-black/55">
              Léelo como si fuera una nota doblada con cuidado.
            </p>
          </div>
        </Reveal>

        <article className="space-y-10">
          {letterBlocks.map((b) => {
            if (b.type === "paragraph") {
              return (
                <Reveal key={b.id} kind="text">
                  <p className="font-serif text-[17px] leading-[1.9] tracking-[0.01em] text-black/80 sm:text-[18px]">
                    {b.text}
                  </p>
                </Reveal>
              );
            }

            return (
              <Reveal key={b.id} kind="photo" className="py-2">
                <figure
                  className={[
                    "rounded-2xl border border-black/10 bg-white/65",
                    "shadow-[0_8px_28px_rgba(0,0,0,0.06)]",
                    "overflow-hidden",
                  ].join(" ")}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={b.src}
                      alt={b.alt}
                      fill
                      className="object-contain bg-black/[0.03]"
                      sizes="(max-width: 768px) 92vw, 640px"
                    />
                  </div>
                  {b.caption ? (
                    <figcaption className="px-5 py-4 font-sans text-xs leading-6 text-black/55">
                      {b.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </Reveal>
            );
          })}
        </article>

        <Reveal>
          <div className="mt-16 border-t border-black/10 pt-8">
            <p className="font-sans text-xs tracking-wide text-black/45">
              Fin.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

