import exteriorImg from "@assets/generated_images/beach_villa_resort_exterior.png";
import standardRoomImg from "@assets/generated_images/standard_beachfront_room.png";
import deluxeRoomImg from "@assets/generated_images/deluxe_beach_villa_suite.png";
import premiumRoomImg from "@assets/generated_images/premium_penthouse_beach_villa.png";

export const HOTEL_INFO = {
  name: "BAY WOODS",
  type: "Luxury Beach Villa",
  location: "Edaikazhinadu, Tamil Nadu, India",
  tagline: "Your Private Coastal Paradise",
  description: "Experience the perfect blend of luxury and serene coastal living at Bay Woods. This meticulously designed beachfront villa offers the ultimate escape for families and friends, combining elegance, comfort, and tranquility. Located just 500 meters from ECR, near the historic Alamparai Fort and pristine backwaters.",
  address: "Edaikazhinadu, ECR, Tamil Nadu, India (500m from ECR)",
  phone: "+91 9876543210",
  email: "stay@baywoods.in",
  currency: "OMR",
  guests: 6,
  bedrooms: 2,
  bathrooms: 2
};

export const VILLA = {
  id: "baywoods",
  name: "Bay Woods Luxury Beach Villa",
  price: 45, // OMR per night
  description: "Exclusive private villa featuring 2 spacious air-conditioned bedrooms, 2 full bathrooms, drawing room with kitchenette, and garden access. Perfect for families and friends seeking a memorable coastal retreat.",
  image: exteriorImg,
  capacity: 6,
  bedrooms: 2,
  bathrooms: 2,
  amenities: [
    "2 Air-Conditioned Bedrooms",
    "2 Full Bathrooms with Rain Showers",
    "Fully Equipped Kitchenette",
    "Drawing Room with TV",
    "Garden & Courtyard Access",
    "Free High-Speed Wi-Fi",
    "Washing Machine",
    "Refrigerator & Cooking Appliances",
    "Hair Dryer",
    "Iron Box",
    "First Aid Kit",
    "Private Parking"
  ],
  highlights: [
    "Shared Beach Access",
    "Garden View",
    "Courtyard View",
    "Close to Alamparai Fort",
    "Near Lighthouse",
    "Backwater Access",
    "Local Market Nearby",
    "5-star Restaurant Nearby"
  ]
};

export const AMENITIES = [
  { icon: "Wifi", title: "High-Speed Internet", description: "Stay connected with complimentary Wi-Fi throughout the villa." },
  { icon: "UtensilsCrossed", title: "Full Kitchen Access", description: "Well-equipped kitchenette with all cooking essentials." },
  { icon: "Waves", title: "Beach Access", description: "Shared access to pristine sandy beaches and local water sports." },
  { icon: "Clock", title: "Flexible Check-in/out", description: "Check-in from 2 PM, checkout by 1 PM (flexible with host)." },
  { icon: "Sparkles", title: "Housekeeping Ready", description: "Fresh linens, towels, and basic toiletries included." },
  { icon: "Shield", title: "Safe & Secure", description: "Gated property with secure parking and 24/7 access." }
];

export const TESTIMONIALS = [
  {
    name: "Kapila",
    location: "Houston, Texas",
    text: "I can't say enough good things about this place. Peaceful, safe, quiet, beautiful, and comfortable. Ms. Subashini made me feel very well looked after. I was quite sad to leave!",
    rating: 5
  },
  {
    name: "Vidyasagar",
    location: "India",
    text: "This place oozes quality and it's managed very well by the host. This property stands out in the region. There is no other property that can match the quality levels. Brilliantly done!",
    rating: 5
  },
  {
    name: "Meena",
    location: "India",
    text: "Had an amazing stay at this private villa! The location was perfect, and the villa had all amenities we needed. Our host was super friendly and made us feel at home. Would definitely recommend!",
    rating: 5
  }
];

export const GALLERY_CATEGORIES = [
  { id: "bedroom", label: "Bedrooms", icon: "Bed" },
  { id: "living", label: "Living Room", icon: "Sofa2" },
  { id: "bathroom", label: "Bathrooms", icon: "Droplet" },
  { id: "kitchen", label: "Kitchen", icon: "UtensilsCrossed" },
  { id: "garden", label: "Garden & Courtyard", icon: "Leaf" },
  { id: "exterior", label: "Exterior & View", icon: "Home" },
];

export const GALLERY_IMAGES = [
  // Bedroom
  {
    id: "bed-1",
    category: "bedroom",
    title: "Master Bedroom",
    description: "Air-conditioned bedroom with queen bed and sea view",
    image: standardRoomImg,
  },
  {
    id: "bed-2",
    category: "bedroom",
    title: "Second Bedroom",
    description: "Spacious bedroom with queen bed and attached bathroom",
    image: deluxeRoomImg,
  },
  // Living Room
  {
    id: "living-1",
    category: "living",
    title: "Living Room",
    description: "Modern drawing room with comfortable seating and entertainment",
    image: premiumRoomImg,
  },
  {
    id: "living-2",
    category: "living",
    title: "Lounge Area",
    description: "Relaxation space with TV and premium furnishings",
    image: standardRoomImg,
  },
  // Bathroom
  {
    id: "bath-1",
    category: "bathroom",
    title: "Master Bathroom",
    description: "Full bathroom with rain shower and modern fixtures",
    image: deluxeRoomImg,
  },
  {
    id: "bath-2",
    category: "bathroom",
    title: "Guest Bathroom",
    description: "Attached bathroom with shower and quality toiletries",
    image: premiumRoomImg,
  },
  // Kitchen
  {
    id: "kitchen-1",
    category: "kitchen",
    title: "Kitchenette",
    description: "Fully equipped cooking space with modern appliances",
    image: standardRoomImg,
  },
  {
    id: "kitchen-2",
    category: "kitchen",
    title: "Dining Area",
    description: "Comfortable dining space for your group",
    image: deluxeRoomImg,
  },
  // Garden & Courtyard
  {
    id: "garden-1",
    category: "garden",
    title: "Garden View",
    description: "Lush garden area for relaxation and outdoor activities",
    image: premiumRoomImg,
  },
  {
    id: "garden-2",
    category: "garden",
    title: "Courtyard",
    description: "Private courtyard space with seating areas",
    image: standardRoomImg,
  },
  // Exterior
  {
    id: "ext-1",
    category: "exterior",
    title: "Villa Exterior",
    description: "Modern beachfront villa architecture",
    image: exteriorImg,
  },
  {
    id: "ext-2",
    category: "exterior",
    title: "Beach View",
    description: "Stunning coastal views from the villa",
    image: deluxeRoomImg,
  },
];
