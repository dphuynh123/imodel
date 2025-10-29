import { log } from "console"
import React, { useState } from "react"
import { Compare } from "../../components/ui/compare"

const galleryImages = [
  {
    id: "1",
    src: `${import.meta.env.BASE_URL}ao-choang-nam.png`,
    alt: "Modern architecture",
    title: "Urban Design",
  },
  {
    id: "2",
    src: `${import.meta.env.BASE_URL}ao-choang-nu.png`,
    alt: "Mountain landscape",
    title: "Mountain Vista",
  },
  {
    id: "3",
    src: `${import.meta.env.BASE_URL}ao-thun-nu.png`,
    alt: "Abstract art",
    title: "Abstract Expression",
  },
  {
    id: "4",
    src: `${import.meta.env.BASE_URL}giay-nam.png`,
    alt: "Ocean sunset",
    title: "Coastal Beauty",
  },
  {
    id: "5",
    src: `${import.meta.env.BASE_URL}non-nam.png`,
    alt: "Forest scenery",
    title: "Forest Path",
  },
  {
    id: "6",
    src: `${import.meta.env.BASE_URL}red-polo.png`,
    alt: "City lights",
    title: "Urban Nights",
  },
  {
    id: "7",
    src: `${import.meta.env.BASE_URL}suit.png`,
    alt: "City lights",
    title: "Urban Nights",
  },
  {
    id: "8",
    src: `${import.meta.env.BASE_URL}vay-den.png`,
    alt: "City lights",
    title: "Urban Nights",
  }
]
export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<any>(null)


  return (
    <div className="w-full">
      {/* Header */}
      {/* <div className="px-6 py-16 md:px-12 md:py-24">
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Image Gallery
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore our curated collection of stunning images showcasing diverse subjects and artistic perspectives.
        </p>
      </div> */}
      {/* Gallery Grid */}
      <div className="px-6 md:px-12 pb-16 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          {galleryImages.map((image) => {
            console.log("Image src:", image.src);
            return (
              <div key={image.id} className="grid col-span-1 justify-center items-center ">
                <Compare
                  firstImage={image.src}
                  secondImage={`${image.src.split('.')[0]}-ai.png`}
                  slideMode="drag"
                  className="w-[300px] rounded-2xl bg-gray-200 justify-center items-center"
                />
              </div>
              // <div
              //   key={image.id}
              //   className="group relative overflow-hidden rounded-lg bg-card cursor-pointer h-80"
              //   onClick={() => setSelectedImage(image)}
              // >
              //   <img
              //     src={`${image.src}`} // ✅ correct path
              //     alt={image.alt}
              //     className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              //   />
              //   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
              //     <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              //       <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              //     </div>
              //   </div>
              // </div>
            )
          }
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${selectedImage.src}`} // ✅ same here
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">{selectedImage.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
