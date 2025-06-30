import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card py-12 px-4 mt-12">
      {/* Garis atas dengan efek glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 blur-sm opacity-75" />

      {/* Konten utama footer */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 ">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fahrul Rozi Siregar. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Dibuat dengan 💻 oleh Fahrul — Portofolio Front-End Developer
          </p>
        </div>

        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary shadow-md transition-all duration-300 hover:scale-110 "
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
