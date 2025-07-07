import { useState } from "react";

const certifications = [
  {
    title: "Spring Boot with java",
    issuer: "Udemy",
    thumbnail: "/certificates/spring-thumb.png",
    image: "/certificates/spring-full.png",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    thumbnail: "/certificates/webdev-thumb.png",
    image: "/certificates/webdev-full.jpg",
  },
  {
    title: "Core Java",
    issuer: "United Global Infoservice",
    thumbnail: "/certificates/java-thumb.png",
    image: "/certificates/java-full.jpg",
  },
];

export default function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="my-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-white">
        Featured <span className="text-purple-500">Certifications</span>
      </h2>
      <p className="text-gray-400 mt-2 max-w-xl mx-auto">
        Verified credentials from industry-recognized platforms.
      </p>

      {/* Cards */}
      <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            onClick={() => openModal(cert.image)}
            className="bg-[#0c0c1d] max-w-sm w-full p-5 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={cert.thumbnail}
              alt={cert.title}
              className="rounded-md h-40 w-full object-cover"
            />
            <div className="mt-4 text-white font-semibold text-lg">{cert.title}</div>
            <div className="text-sm text-gray-400">{cert.issuer}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center">
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-red-600 text-4xl font-bold hover:text-purple-400"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full max-h-[80vh] object-contain rounded-md shadow-2xl border border-white"
            />
          </div>
        </div>
      )}
    </section>
  );
}
