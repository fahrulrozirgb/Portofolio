import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    title: "SDN 064018",
    degree: "Pendidikan Dasar",
    year: "2012 – 2018",
    description: "Menyelesaikan pendidikan dasar di SDN 064018.",
    image: "./src/assets/sdn064018.png",
  },
  {
    title: "SMP YPMA (Yayasan Pesantren Modern Adnan)",
    degree: "Pendidikan Umum dan Agama",
    year: "2018 – 2021",
    description:
      "Menjalani pendidikan di lingkungan pesantren modern. Belajar disiplin, nilai agama, dan keterampilan hidup.",
    image: "./src/assets/2.webp",
  },
  {
    title: "SMK Muhammadiyah 09 Medan",
    degree: "Teknik Mesin",
    year: "2021 – 2024",
    description:
      "Lulus dari jurusan Teknik Mesin. Aktif dalam praktik bengkel, pengelasan, dan tertarik mengembangkan skill di bidang teknologi digital.",
    image: "./src/assets/smks.png",
  },
  {
    title: "Universitas Satya Terra Bhinneka",
    degree: "S1 Informatika (Mahasiswa Baru)",
    year: "2024 – sekarang",
    description:
      "Sedang menempuh pendidikan di bidang Informatika. Fokus pada pengembangan web, UI/UX, dan pemrograman dasar.",
    image: "./src/assets/satya.png",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>
        <p className="text-muted-foreground mt-2 text-center">
          Riwayat pendidikan yang pernah saya tempuh.
        </p>
        <br />
        <br />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-6 md:px-20">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative group rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.03] hover:ring-2 hover:ring-purple-500/30 bg-card text-card-foreground"
          >
            {/* Background Gambar Transparan */}
            <div className="absolute inset-0">
              <img
                src={edu.image}
                alt={edu.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Isi konten di atas gambar */}
            <div className="relative z-10 p-4 pt-12">
              <div className="absolute top-4 left-4 bg-purple-600 text-white p-2 rounded-full shadow-md shadow-purple-300/40 z-20">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-md font-semibold mb-1">{edu.title}</h3>
              <p className="text-sm text-purple-200 italic">
                {edu.degree} — {edu.year}
              </p>
              <p className="text-sm text-white mt-2">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
