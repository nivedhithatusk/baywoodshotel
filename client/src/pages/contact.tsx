import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HOTEL_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import contactHeroImg from "@assets/baywoods_Images/entrence/108A0575.jpg";
import { useEffect } from "react";

export default function Contact() {
  // SEO: Update document title and meta
  useEffect(() => {
    document.title = `Contact Us - ${HOTEL_INFO.name} | Book Your Stay`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Contact ${HOTEL_INFO.name} for bookings and inquiries. Phone: ${HOTEL_INFO.phone}, Email: ${HOTEL_INFO.email}. Located in ${HOTEL_INFO.location}.`
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
            "@type": "ContactPage",
            name: `Contact ${HOTEL_INFO.name}`,
            description: `Contact information for ${HOTEL_INFO.name}`,
            mainEntity: {
              "@type": "LodgingBusiness",
              name: HOTEL_INFO.name,
              telephone: HOTEL_INFO.phone,
              email: HOTEL_INFO.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: HOTEL_INFO.address,
              },
            },
          }),
        }}
      />
      <Layout>
        {/* Cinematic Contact Header */}
        <div className="h-[60vh] sm:h-[70vh] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              src={contactHeroImg}
              alt={`${HOTEL_INFO.name} Villa Entrance - Contact us for bookings`}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white px-4 space-y-4 sm:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif tracking-tight"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto opacity-90 italic px-2"
            >
              Your journey to tranquility begins with a conversation.
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info with Elevated Cards */}
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl font-serif text-foreground"
                >
                  Reach Out to Us
                </motion.h2>
                <p className="text-muted-foreground leading-relaxed text-xl font-light">
                  Whether you're planning a wedding, a corporate retreat, or a
                  quiet family getaway, our dedicated hosts are here to ensure
                  every detail is perfect.
                </p>
              </div>

              <div className="grid gap-8 pt-8">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    detail: HOTEL_INFO.address,
                  },
                  { icon: Phone, title: "Phone", detail: HOTEL_INFO.phone },
                  { icon: Mail, title: "Email", detail: HOTEL_INFO.email },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-8 bg-muted/30 rounded-3xl border border-primary/5 hover:border-primary/20 transition-all duration-500 group"
                  >
                    <div className="h-16 w-16 bg-primary/10 flex items-center justify-center text-primary shrink-0 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-lg">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form with Modern Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-2xl border border-border/50 relative"
            >
              <div className="absolute top-0 right-12 -translate-y-1/2 bg-primary text-white p-6 rounded-3xl shadow-xl">
                <Send className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-serif mb-8 text-foreground">
                Send us a Message
              </h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 text-left">
                    <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground ml-1">
                      Name
                    </label>
                    <Input
                      className="rounded-2xl h-16 bg-muted/50 border-none focus-visible:ring-primary text-lg px-6"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-3 text-left">
                    <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground ml-1">
                      Email
                    </label>
                    <Input
                      className="rounded-2xl h-16 bg-muted/50 border-none focus-visible:ring-primary text-lg px-6"
                      placeholder="Your Email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground ml-1">
                    Subject
                  </label>
                  <Input
                    className="rounded-2xl h-16 bg-muted/50 border-none focus-visible:ring-primary text-lg px-6"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-3 text-left">
                  <label className="text-sm font-semibold uppercase tracking-widest text-muted-foreground ml-1">
                    Message
                  </label>
                  <Textarea
                    className="rounded-[2rem] min-h-[200px] bg-muted/50 border-none focus-visible:ring-primary text-lg p-6"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>
                <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white rounded-2xl text-lg uppercase tracking-[0.2em] font-bold shadow-xl shadow-primary/20 transition-all">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <div className="mt-32 w-full h-[600px] relative rounded-[3rem] border border-border overflow-hidden shadow-2xl group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.838718866236!2d79.98145047514444!3d12.259191330096598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a530d002f5c5b85%3A0x5219fa0fe603aafa!2z8J-Plu-4jyBCQVkgV09PRFMgOjogVGhlIEJlYWNoIFZpbGxh4pux77iP!5e0!3m2!1sen!2sin!4v1767182070396!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 group-hover:scale-[1.02] transition-transform duration-[2s]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10" />
          </div>
        </div>
      </Layout>
    </>
  );
}
