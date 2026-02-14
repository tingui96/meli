"use client";

export function Intro() {
  function go() {
    document.getElementById("letter-start")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className="min-h-[100svh] flex items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        <p className="font-sans text-xs tracking-[0.22em] text-black/50">
          UNA CARTA
        </p>
        <h1 className="mt-4 font-serif text-[clamp(28px,5vw,46px)] leading-[1.15] text-black/90">
          Esto no es para leerse rápido.
        </h1>
        <p className="mt-6 font-sans text-sm leading-7 text-black/60">
          Si hoy puedes, regálame tu atención un momento. Baja el ritmo. Desliza
          como quien abre una ventana sin hacer ruido.
        </p>

        <div className="mt-10 flex items-center justify-center gap-10">
          <button
            type="button"
            onClick={go}
            className={[
              "rounded-full border border-black/10 bg-white/75",
              "px-6 py-3 text-sm font-medium text-black/80",
              "transition hover:bg-white/70 hover:border-black/15",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
            ].join(" ")}
          >
            Leer despacio
          </button>
        </div>

        <p className="mt-10 font-sans text-[11px] tracking-wide text-black/40">
          (desplaza hacia abajo)
        </p>
      </div>
    </section>
  );
}

