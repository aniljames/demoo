import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      
      {/* Spacer content to allow for the hero scroll effect */}
      <section className="h-screen bg-neutral-900 flex items-center justify-center flex-col p-10 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white tracking-tight">
          Engineering Marvel
        </h2>
        <p className="text-neutral-400 max-w-2xl text-lg">
          Our motorcycles are built on a foundation of precision engineering and cutting edge materials. 
          The structural blueprint beneath reveals exactly what makes our machines so formidable on the track.
        </p>
      </section>

      <section className="h-[50vh] bg-black flex items-center justify-center">
         <p className="text-neutral-600 uppercase tracking-[0.2em] text-sm">
           Discover the anatomy of speed
         </p>
      </section>
    </main>
  );
}
