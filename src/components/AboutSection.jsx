import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold"></h3>

            <p className="text-muted-foreground">
              Selain mahasiswa prodi Informatika di Universitas Satya Terra
              Bhinneka saya juga aktif bekerja sebagai driver online seperti
              gojek dan aplikasi semacamnya. Dari Pekerjaan ini lah saya tau
              kampus ini serta Beasiswa nya Lewat Costumer yang pernah saya
              bawa.
            </p>

            <p className="text-muted-foreground">
              Selain bekerja sebagai Driver Online Saya juga bekerja di Honda,
              di mana saya belajar tentang etos kerja, ketelitian, dan
              pentingnya kerja tim dalam lingkungan profesional.
            </p>

            <p className="text-muted-foreground">
              Setelah pengalaman saya bekerja sebagai driver online dan di
              Honda,saya menyadari bahwa teknologi memiliki peran besar dalam
              kehidupan sehari-hari, dan dari sanalah saya mulai menumbuhkan
              minat untuk menjadi seorang Web Developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Hubungi Saya
              </a>
              <a
                href="#skills"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Silahkan Liat Skills Saya
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <img
              src="/images/gojek.jpeg"
              alt="Foto memakai jaket Gojek"
              className="rounded-xl shadow-md object-cover object-center w-full h-64 scale-75 transition-transform duration-500 ease-in-out hover:scale-[0.78] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:brightness-110"
            />
            <img
              src="/images/gojek1.jpeg"
              alt="Foto saat di Honda"
              className="rounded-xl shadow-md object-cover object-center w-full h-64 scale-75 transition-transform duration-500 ease-in-out hover:scale-[0.78] hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:brightness-110 -mt-10"
            />
          </div>
        </div>

        {/* Kartu Skill */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Membuat situs web dan aplikasi web responsif dengan kerangka
                  kerja modern.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                <p className="text-muted-foreground">
                  Merancang antarmuka pengguna yang intuitif dan pengalaman
                  pengguna yang lancar.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Membangun Startup</h4>
                <p className="text-muted-foreground">
                  Merancang dan membangun produk digital dari ide awal, termasuk
                  tampilan, fitur, dan arah bisnisnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
