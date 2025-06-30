import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8"
    >
      {/* KIRI - TEKS */}
      <div className="container max-w-2xl mx-auto z-10 text-left md:text-left space-y-6 md:translate-x-20 md:-translate-y-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <br />
          <span className="text-primary opacity-0 animate-fade-in-delay-1 ">
            {" "}
            Fahrul Rozi Siregar
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
          Saya mahasiswa Informatika di Universitas Satya Terra Bhinneka. Saya
          tertarik di bidang front-end dan senang belajar cara membuat tampilan
          web yang rapi, menarik, dan mudah digunakan.
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#about" className="cosmic-button">
            Yukk, Kenalan Lebih Lanjut!!
          </a>
        </div>
      </div>

      {/* KANAN - FOTO */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 opacity-0 animate-fade-in-delay-2 md:translate-x-20 md:-translate-y-10 ">
        <div className="relative w-77 h-77 rounded-full overflow-hidden shadow-xl flex justify-center items-center transition-all duration-700 group hover:scale-[1.02] hover:rotate-[1deg]">
          {/* Glow terus nyala */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-primary to-indigo-500 opacity-40 blur-lg z-0 animate-pulse transition-all duration-700 group-hover:opacity-60 group-hover:blur-xl" />

          {/* Foto */}
          <img
            src="/src/assets/ozi2.jpeg"
            alt="Fahrul Rozi Siregar"
            className="object-cover object-center scale-75 z-10 transition-all duration-700 group-hover:scale-[0.78] group-hover:rotate-[1deg]"
          />
        </div>
      </div>

      {/* SCROLL INDIKATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
