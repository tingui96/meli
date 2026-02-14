"use client";

import { useEffect, useRef, useState } from "react";

type MusicToggleProps = {
  src?: string;
};

export function MusicToggle({ src = "/music.mp3" }: MusicToggleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    return () => {
      const el = audioRef.current;
      if (!el) return;
      el.pause();
      el.currentTime = 0;
    };
  }, []);

  async function toggle() {
    const el = audioRef.current;
    if (!el || unavailable) return;

    try {
      if (isPlaying) {
        el.pause();
        setIsPlaying(false);
        return;
      }

      const p = el.play();
      if (p) await p;
      setIsPlaying(true);
    } catch {
      setUnavailable(true);
      setIsPlaying(false);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        preload="none"
        loop
        onError={() => setUnavailable(true)}
        onEnded={() => setIsPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        disabled={unavailable}
        aria-pressed={isPlaying}
        className={[
          "fixed bottom-5 right-5 z-50",
          "rounded-full border border-black/10 bg-white/75 px-3 py-2",
          "text-xs tracking-wide text-black/70 shadow-sm",
          "transition hover:bg-white/75 hover:text-black/80",
          "disabled:opacity-40 disabled:cursor-not-allowed",
        ].join(" ")}
        title={
          unavailable
            ? "Música no disponible. Agrega un archivo en /public/music.mp3"
            : isPlaying
              ? "Pausar música"
              : "Reproducir música"
        }
      >
        <span className="font-sans">
          {isPlaying ? "Pausar" : "Música"}
        </span>
      </button>
    </>
  );
}

