import { Layout } from "@/components/layout";
import { HOTEL_INFO, VILLA } from "@/lib/constants";
// import exteriorImg from "@assets/generated_images/beach_villa_resort_exterior.png";
import exteriorImg from "@assets/generated_images/108A0571.jpg";
import standardRoomImg from "@assets/generated_images/108A0540.jpg";
import { useEffect } from "react";

export default function About() {
  // SEO: Update document title and meta
  useEffect(() => {
    document.title = `About Us - ${HOTEL_INFO.name} | ${HOTEL_INFO.type}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Learn about ${HOTEL_INFO.name}, a luxury beach villa in ${HOTEL_INFO.location}. Discover our amenities, features, and what makes us special.`
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
            "@type": "AboutPage",
            name: `About ${HOTEL_INFO.name}`,
            description: `Learn about ${HOTEL_INFO.name} luxury beach villa`,
            mainEntity: {
              "@type": "LodgingBusiness",
              name: HOTEL_INFO.name,
              description: HOTEL_INFO.description,
            },
          }),
        }}
      />
      <Layout>
        {/* Header */}
        <div className="h-[50vh] sm:h-[60vh] relative flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src={exteriorImg}
              alt={`${HOTEL_INFO.name} Villa Exterior - Luxury Beach Villa in ${HOTEL_INFO.location}`}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white space-y-4 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif">
              Our Villa
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto">
              A luxury coastal sanctuary in Edaikazhinadu, Tamil Nadu
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-24">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground">
                Crafted for Comfort
              </h2>
              <div className="w-20 h-1 bg-primary" />
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                BayWoods is a meticulously designed luxury beach villa that
                combines modern comfort with coastal charm. Every detail has
                been carefully curated to ensure your stay is unforgettable.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Located in Edaikazhinadu, just 500 meters from ECR, our villa
                offers the perfect escape for families and friends. Close to
                historic landmarks like Alamparai Fort, the Lighthouse, and
                pristine backwaters, you're never far from adventure or
                relaxation.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-2xl font-serif font-bold text-primary">
                    {VILLA.capacity}
                  </div>
                  <div className="text-xs uppercase text-muted-foreground">
                    Guest Capacity
                  </div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-2xl font-serif font-bold text-primary">
                    5.0★
                  </div>
                  <div className="text-xs uppercase text-muted-foreground">
                    Guest Rating
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-4 border border-primary/20">
              <img
                src={standardRoomImg}
                alt={`${HOTEL_INFO.name} Villa Interior - Spacious and Modern Design`}
                className="w-full h-full object-cover shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
            <div className="bg-secondary text-secondary-foreground p-8 sm:p-12 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif text-primary">
                Perfect for
              </h3>
              <ul className="space-y-2 text-white/80 text-sm sm:text-base">
                <li>✓ Family Vacations</li>
                <li>✓ Friend Getaways</li>
                <li>✓ Couple's Retreat</li>
                <li>✓ Group Celebrations</li>
                <li>✓ Corporate Retreats</li>
              </ul>
            </div>
            <div className="bg-muted p-8 sm:p-12 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif text-foreground">
                Why Choose Us
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>✓ Pristine Beach Access</li>
                <li>✓ Modern Amenities</li>
                <li>✓ Beautiful Garden</li>
                <li>✓ Fully Equipped Kitchen</li>
                <li>✓ Exceptional Hospitality</li>
              </ul>
            </div>
          </div>

          {/* Villa Specs */}
          <div className="text-center max-w-3xl mx-auto space-y-6 sm:space-y-8 bg-muted/30 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-serif">
              Villa Specifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
              <div>
                <div className="text-2xl font-serif font-bold text-primary">
                  {VILLA.bedrooms}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  Bedrooms
                </div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-primary">
                  {VILLA.bathrooms}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  Bathrooms
                </div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-primary">
                  {VILLA.capacity}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  Max Guests
                </div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-primary">
                  {HOTEL_INFO.currency} {VILLA.price}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-2">
                  Per Night
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
