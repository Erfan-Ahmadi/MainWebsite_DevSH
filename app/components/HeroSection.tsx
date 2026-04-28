export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-5xl">
        <span className="text-white">Elite Graphics Programming</span>
        <br />
        <span className="text-devsh">&amp; Performance Optimization.</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl text-balance">
        GPU computing, real-time rendering, and high-performance solutions for demanding applications.
      </p>
      <a
        href="mailto:newclients@devsh.eu"
        className="mt-10 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-devsh hover:bg-devsh-light rounded-md transition-colors"
      >
        Talk With Our Experts
      </a>
    </section>
  );
}
