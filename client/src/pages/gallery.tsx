import { Layout } from "@/components/layout";
import { useState, useMemo, useEffect } from "react";
import { GALLERY_CATEGORIES, HOTEL_INFO } from "@/lib/constants";
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import gallery_banner_img from "@assets/generated_images/108A0540.jpg";

// Dynamically import all images from each category folder
const imageModules = import.meta.glob<{ default: string }>(
  "@assets/baywoods_Images/**/*.{jpg,jpeg,png}",
  { eager: true }
);

// Helper function to get images for a specific category
const getImagesForCategory = (categoryId: string) => {
  const category = GALLERY_CATEGORIES.find((cat) => cat.id === categoryId);
  if (!category) return [];

  const folderPath = `baywoods_Images/${category.folder}/`;
  const images: Array<{ id: string; image: string }> = [];

  Object.entries(imageModules).forEach(([path, module], index) => {
    if (path.includes(folderPath)) {
      images.push({
        id: `${categoryId}-${index}`,
        image: module.default,
      });
    }
  });

  // Sort images by filename for consistent ordering
  return images.sort((a, b) => {
    const aName = a.image.split("/").pop() || "";
    const bName = b.image.split("/").pop() || "";
    return aName.localeCompare(bName);
  });
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("entrence");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Get first image from entrance folder for hero
  const galleryImg = useMemo(() => {
    const entranceImages = getImagesForCategory("entrence");
    return entranceImages[0]?.image || "";
  }, []);

  // Get first image from entrance folder for contact banner
  const contactBannerImg = useMemo(() => {
    const entranceImages = getImagesForCategory("entrence");
    return entranceImages[1]?.image || entranceImages[0]?.image || "";
  }, []);

  const filteredImages = useMemo(() => {
    return getImagesForCategory(selectedCategory);
  }, [selectedCategory]);

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 4);

  // Get category label for alt text
  const getCategoryLabel = (categoryId: string) => {
    return (
      GALLERY_CATEGORIES.find((cat) => cat.id === categoryId)?.label ||
      "Gallery"
    );
  };

  // Handle image load
  const handleImageLoad = (imageId: string) => {
    setLoadedImages((prev) => new Set(prev).add(imageId));
  };

  // SEO: Update document title and meta
  useEffect(() => {
    document.title = `Gallery - ${HOTEL_INFO.name} | ${HOTEL_INFO.type}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Explore our ${HOTEL_INFO.name} gallery featuring luxury beach villa interiors, bedrooms, living spaces, and coastal views in Edaikazhinadu, Tamil Nadu.`
      );
    }
  }, []);

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: `${HOTEL_INFO.name} Gallery`,
            description: `Photo gallery of ${HOTEL_INFO.name} luxury beach villa`,
            url:
              typeof window !== "undefined"
                ? `${window.location.origin}/gallery`
                : "",
            image: GALLERY_CATEGORIES.flatMap((cat) =>
              getImagesForCategory(cat.id).map((img) => ({
                "@type": "ImageObject",
                contentUrl: img.image,
                description: `${getCategoryLabel(cat.id)} - ${HOTEL_INFO.name}`,
              }))
            ),
          }),
        }}
      />
      <Layout>
        {/* Header with parallax-like effect */}
        <div className="h-[60vh] sm:h-[70vh] relative overflow-hidden flex items-center justify-center">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {galleryImg && (
              <img
                src={gallery_banner_img}
                alt={`${HOTEL_INFO.name} Villa Gallery - Luxury Beach Villa in ${HOTEL_INFO.location}`}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif mb-4 sm:mb-6 tracking-tight"
            >
              Villa Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto opacity-90 px-2"
            >
              Step inside our private coastal sanctuary
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          {/* Category Filter */}
          <div className="mb-12 sm:mb-16 md:mb-20 sticky top-16 sm:top-20 z-40 bg-background/80 backdrop-blur-md py-3 sm:py-4 -mx-4 px-2 sm:px-4 rounded-b-2xl">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {GALLERY_CATEGORIES.map((category) => {
                const Icon = (Icons as any)[category.icon] || Icons.Image;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowAll(false);
                    }}
                    className={cn(
                      "px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-serif text-sm sm:text-base md:text-lg transition-all duration-500 flex items-center gap-2 sm:gap-3 border shadow-sm",
                      selectedCategory === category.id
                        ? "bg-primary text-white border-primary shadow-primary/20"
                        : "bg-white text-muted-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                    )}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`Filter by ${category.label}`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="whitespace-nowrap">{category.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="space-y-8 sm:space-y-12">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {displayedImages.map((image, index) => {
                  const isLoaded = loadedImages.has(image.id);
                  const categoryLabel = getCategoryLabel(selectedCategory);
                  const altText = `${categoryLabel} - ${HOTEL_INFO.name} Villa`;

                  return (
                    <motion.div
                      key={image.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.03,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      className="group"
                      onClick={() => setSelectedImage(image.image)}
                    >
                      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-muted aspect-video cursor-pointer shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                        {!isLoaded && (
                          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
                            <Icons.Image className="h-12 w-12 text-muted-foreground/30" />
                          </div>
                        )}
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          src={image.image}
                          alt={altText}
                          className={cn(
                            "w-full h-full object-cover transition-opacity duration-300",
                            isLoaded ? "opacity-100" : "opacity-0"
                          )}
                          loading={index < 4 ? "eager" : "lazy"}
                          fetchPriority={index < 2 ? "high" : "auto"}
                          onLoad={() => handleImageLoad(image.id)}
                          decoding="async"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Show More Button */}
            {!showAll && filteredImages.length > 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center pt-6 sm:pt-8"
              >
                <Button
                  onClick={() => setShowAll(true)}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 sm:px-12 py-4 sm:py-5 md:py-6 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-serif text-base sm:text-lg"
                  aria-label={`Show all ${
                    filteredImages.length
                  } photos in ${getCategoryLabel(selectedCategory)} category`}
                >
                  Show All {filteredImages.length} Photos
                </Button>
              </motion.div>
            )}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 sm:py-24 md:py-32"
            >
              <Icons.ImageOff className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-muted-foreground/30 mb-4 sm:mb-6" />
              <p className="text-muted-foreground text-lg sm:text-xl font-serif italic px-4">
                New photos coming soon to this collection.
              </p>
            </motion.div>
          )}
        </div>

        {/* Realistic Contact Banner */}
        <section className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24 text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden min-h-[400px] sm:min-h-[500px] flex items-center p-6 sm:p-8 md:p-16"
          >
            <div className="absolute inset-0">
              <img
                src={HOTEL_INFO.image}
                alt={`${HOTEL_INFO.name} Villa Exterior - Contact us for bookings`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl text-white space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Experience Coastal Elegance Firsthand
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed">
                Have questions about our amenities or want to check availability
                for your specific dates? We're here to help you plan your
                perfect escape to {HOTEL_INFO.name}.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full font-serif text-base sm:text-lg font-medium shadow-xl hover:bg-gray-50 transition-colors w-full sm:w-auto"
                    aria-label="Contact host for booking inquiries"
                  >
                    Contact Host
                  </motion.button>
                </Link>
                <div className="flex items-center gap-3 sm:gap-4 text-white/90">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                    <Icons.Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60">
                      Call Us Directly
                    </p>
                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="text-base sm:text-lg font-serif hover:underline"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Fullscreen Image Popup */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
            <DialogTitle>
              <VisuallyHidden>
                View Gallery Image - {HOTEL_INFO.name}
              </VisuallyHidden>
            </DialogTitle>
            {selectedImage && (
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img
                  src={selectedImage}
                  alt={`${HOTEL_INFO.name} Gallery Image - Fullscreen View`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  loading="eager"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors z-10"
                  aria-label="Close image viewer"
                >
                  <Icons.X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Layout>
    </>
  );
}
