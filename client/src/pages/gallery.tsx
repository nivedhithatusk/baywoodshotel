import { Layout } from "@/components/layout";
import { useState, useMemo } from "react";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/constants";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("bedroom");

  const filteredImages = useMemo(() => {
    return GALLERY_IMAGES.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-secondary py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Photo Gallery</h1>
        <p className="text-white/60 max-w-2xl mx-auto">Explore the beauty and luxury of Bay Woods</p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {GALLERY_CATEGORIES.map((category) => {
              const Icon = (Icons as any)[category.icon] || Icons.Image;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 border-2",
                    selectedCategory === category.id
                      ? "bg-primary text-foreground border-primary"
                      : "bg-white text-foreground border-border hover:border-primary"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
              className="group"
            >
              <div className="relative overflow-hidden bg-muted aspect-[4/3] cursor-pointer">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif text-xl font-bold mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No images available in this category yet.</p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center space-y-4">
          <h2 className="text-2xl font-serif">Your Own Photos</h2>
          <p className="text-muted-foreground">
            Replace the placeholder images above with your actual Airbnb photos organized by category. Once you provide your images, we'll update the gallery with your real villa photos to showcase its true beauty.
          </p>
        </div>
      </section>
    </Layout>
  );
}
