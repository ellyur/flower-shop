import { useState } from "react";
import type { FlowerSection as FlowerSectionType } from "@/data/flowerCatalog";
import ImageLightbox from "./ImageLightbox";
import { Camera } from "lucide-react";

interface FlowerSectionProps {
  section: FlowerSectionType;
}

const FlowerSection = ({ section }: FlowerSectionProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Combine color reference image with bouquet images for lightbox navigation
  const allImages = section.colorReferenceImage
    ? [section.colorReferenceImage, ...section.images]
    : section.images;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id={section.id} className="py-12 md:py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-8 md:mb-12">
          {section.title}
        </h2>

        {/* Color Reference Image */}
        {section.colorReferenceImage && (
          <div className="mb-6 md:mb-8">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Available Colors
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => openLightbox(0)}
                className="w-full max-w-md overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer relative group"
              >
                <img
                  src={section.colorReferenceImage}
                  alt={`${section.title} available colors`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {section.outOfStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-base md:text-lg font-bold uppercase tracking-wider transform -rotate-12 border-2 border-white shadow-xl">
                      Out of Stock
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold text-lg">Screenshot Me!</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {section.images.map((image, index) => {
            const lightboxIndex = section.colorReferenceImage ? index + 1 : index;

            return (
              <button
                key={image}
                onClick={() => openLightbox(lightboxIndex)}
                className="relative aspect-square cursor-pointer group"
              >
                {/* Outer decorative border */}
                <div className="absolute inset-0 border-4 border-primary/20 rounded-lg pointer-events-none z-10 group-hover:border-primary/40 transition-colors duration-300" />

                {/* Inner white border frame */}
                <div className="absolute inset-2 bg-white rounded-md shadow-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${section.title} bouquet ${index + 1}`}
                    className="w-full h-full object-cover p-2 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {section.outOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transform -rotate-12 border-2 border-white shadow-lg">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Screenshot Me Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 rounded-lg">
                  <div className="text-white text-center bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/20">
                    <Camera className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
                    <p className="font-semibold text-sm md:text-base">Screenshot Me!</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={allImages}
        currentIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setSelectedIndex}
        title={section.title}
      />
    </section>
  );
};

export default FlowerSection;
