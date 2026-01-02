import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { HOTEL_INFO, VILLA, AMENITIES, TESTIMONIALS } from "@/lib/constants";
import exteriorImg from "@assets/generated_images/108A0581.jpg";
import { useEffect } from "react";

import * as Icons from "lucide-react";

export default function Home() {
  // SEO: Update document title and meta
  useEffect(() => {
    document.title = `${HOTEL_INFO.name} | ${HOTEL_INFO.type} - ${HOTEL_INFO.location}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `${HOTEL_INFO.description} Book your stay at ${HOTEL_INFO.name} luxury beach villa.`
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
            "@type": "LodgingBusiness",
            name: HOTEL_INFO.name,
            description: HOTEL_INFO.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: HOTEL_INFO.address,
              addressLocality: "Edaikazhinadu",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
            telephone: HOTEL_INFO.phone,
            email: HOTEL_INFO.email,
            priceRange: `${HOTEL_INFO.currency} ${VILLA.price}`,
            numberOfRooms: VILLA.bedrooms,
            amenityFeature: VILLA.amenities.map((amenity) => ({
              "@type": "LocationFeatureSpecification",
              name: amenity,
            })),
          }),
        }}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Enhanced Parallax & Zoom */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.2, filter: "blur(10px)" }}
              animate={{ scale: 1.05, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={exteriorImg}
              alt={`${HOTEL_INFO.name} - ${HOTEL_INFO.type} in ${HOTEL_INFO.location}`}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black"
            />
          </div>

          {/* Hero Content with Advanced Transitions */}
          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto space-y-8">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm md:text-base uppercase tracking-[0.4em] mb-4 text-primary font-medium"
              >
                Luxury Coastal Escape
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] tracking-tighter"
              >
                {HOTEL_INFO.name}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-3xl font-light italic text-white/90">
                {HOTEL_INFO.type}
              </p>
              <p className="text-lg md:text-2xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed border-t border-white/20 pt-6">
                {HOTEL_INFO.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-12 flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <Link href="/booking">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-white hover:text-primary text-foreground rounded-full px-12 py-8 text-lg tracking-widest uppercase transition-all duration-500 shadow-2xl"
                >
                  Book Your Stay
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-12 py-8 text-lg tracking-widest uppercase transition-all duration-500"
                >
                  Explore Gallery
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-[1px] h-12 bg-white/50 mx-auto" />
            <span className="text-[10px] uppercase tracking-widest mt-2 block">
              Scroll
            </span>
          </motion.div>
        </section>

        {/* Villa Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                  About The Villa
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                  Escape to Your <br />{" "}
                  <span className="text-primary italic">Private Paradise</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {HOTEL_INFO.description}
                </p>
                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary">
                      {VILLA.capacity}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Max Guests
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary">
                      {VILLA.bedrooms}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Bedrooms
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-primary">
                      {VILLA.bathrooms}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Bathrooms
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/booking">
                    <Button
                      variant="outline"
                      className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none px-8 py-6 uppercase tracking-wider text-xs"
                    >
                      View Availability
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-muted overflow-hidden relative z-10">
                  <img
                    src={VILLA.image}
                    alt={`${HOTEL_INFO.name} Luxury Villa Interior - ${VILLA.bedrooms} Bedrooms, ${VILLA.bathrooms} Bathrooms`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 z-0 hidden md:block" />
                <div className="absolute -top-8 -right-8 w-40 h-40 border border-primary/30 z-0 hidden md:block" />
              </div>
            </div>
          </div>
        </section>

        {/* Villa Highlights */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                What You Get
              </span>
              <h2 className="text-4xl md:text-5xl font-serif">
                Premium Features
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Thoughtfully designed for comfort with all the amenities you
                need for a perfect coastal retreat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {VILLA.amenities.map((amenity, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="h-8 w-8 bg-primary text-foreground rounded-full flex items-center justify-center shrink-0 font-semibold text-sm">
                    ✓
                  </div>
                  <span className="text-white">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Highlights */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                Perfect Location
              </span>
              <h2 className="text-4xl md:text-5xl font-serif">
                Explore the Area
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {VILLA.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="h-10 w-10 shrink-0 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors rounded">
                    <Icons.MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold mb-1">
                      {highlight}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="space-y-6">
                <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                  Services
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                  Thoughtful <br /> Amenities
                </h2>
                <p className="text-muted-foreground">
                  Everything you need for a comfortable and memorable stay.
                </p>
                <Link href="/contact">
                  <Button className="rounded-none bg-primary text-foreground px-8 py-6 uppercase tracking-widest text-xs hover:bg-primary/90">
                    Ask Questions
                  </Button>
                </Link>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {AMENITIES.map((item, idx) => {
                  const Icon = (Icons as any)[item.icon] || Icons.Star;
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 p-6 border border-border/50 hover:border-primary/50 transition-colors group"
                    >
                      <div className="h-12 w-12 shrink-0 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-foreground transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-serif font-semibold mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <Icons.Quote className="h-12 w-12 text-primary/30 mx-auto mb-8" />
            <h2 className="text-4xl font-serif mb-12">Guest Reviews</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="bg-background p-8 shadow-sm border border-border/50 text-left"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Icons.Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic text-sm">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-serif font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-primary uppercase tracking-wider">
                      {t.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 relative bg-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={exteriorImg}
              className="w-full h-full object-cover grayscale"
              alt="Background"
            />
          </div>
          <div className="absolute inset-0 bg-secondary/80" />
          <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Ready to Escape?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto text-lg">
              Book your stay at BayWoods and experience luxury coastal living in
              Edaikazhinadu.
            </p>
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-secondary hover:bg-white/90 rounded-none px-12 py-8 text-lg uppercase tracking-widest font-semibold"
              >
                Check Availability
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
