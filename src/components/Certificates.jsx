import React, { useState } from "react";

const certificates = [
  {
    title: "Piagam Penghargaan",
    platform: "SMK Muhammadiyah 9 Medan",
    image: "/src/assets/Sertificat1.jpeg",
    description: "Juara 1 Umum.",
  },
  {
    title: "Certificate",
    platform: "Kegiatan Kampus",
    image: "/src/assets/Sertificat2.jpeg",
    description: "Microsoft Office Specialist.",
  },
  {
    title: "Certificate of Appreciation",
    platform: "Kegiatan Kampus",
    image: "/src/assets/Sertificat3.jpeg",
    description: "Kuliah Umum Di Kampus.",
  },
  {
    title: "Certificate",
    platform: "Sdg Academy Indonesia",
    image: "/src/assets/Sertificat4.jpeg",
    description: "Belajar Keragaman Sosial.",
  },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="certificates"
      className="py-20 bg-background text-foreground transition-colors duration-300"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          My <span className="text-purple-500">Certificate</span>
          <br />
          <br />
        </h2>
        <p className="text-muted-foreground mt-2">
          Berikut adalah beberapa sertifikat dan pencapaian saya.
        </p>
        <br />
      </div>

      {/* Grid Sertifikat */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group bg-card text-card-foreground rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.03] hover:ring-2 hover:ring-purple-500/30"
          >
            <div className="relative">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20 pointer-events-none" />
            </div>
            <div className="p-4">
              <h3 className="text-md font-semibold mb-1">
                {cert.title} - {cert.platform}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {cert.description}
              </p>
              <button
                onClick={() => openImage(cert.image)}
                className="text-purple-400 hover:underline text-sm"
              >
                Lihat Sertifikat
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview Gambar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Preview Sertifikat"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg transition-all duration-300"
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
