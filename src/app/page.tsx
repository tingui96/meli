import { Intro } from "@/components/Intro";
import { Letter } from "@/components/Letter";
import { MusicToggle } from "@/components/MusicToggle";
import { PinSequenceSecretSection } from "@/components/PinSequenceSecretSection";

export default function Home() {
  return (
    <main className="min-h-[100svh]">
      <Intro />
      <Letter />
      <PinSequenceSecretSection />
      <MusicToggle />
    </main>
  );
}
