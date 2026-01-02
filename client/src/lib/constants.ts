import exteriorImg from "@assets/generated_images/baywoods_home.jpeg";
import home from "@assets/generated_images/108A0565.jpg";
import logo from "@assets/generated_images/baywoods_logo.png";

export const HOTEL_INFO = {
  logo: logo,
  name: "BAYWOODS",
  type: "Luxury Beach Villa",
  location: "Edaikazhinadu, Tamil Nadu, India",
  tagline: "Your Private Coastal Paradise",
  description:
    "Experience the perfect blend of luxury and serene coastal living at BayWoods. This meticulously designed beachfront villa offers the ultimate escape for families and friends, combining elegance, comfort, and tranquility. Located just 500 meters from ECR, near the historic Alamparai Fort and pristine backwaters.",
  address: "Edaikazhinadu, ECR, Tamil Nadu, India (500m from ECR)",
  phone: "+91 9876543210",
  email: "stay@baywoods.in",
  currency: "OMR",
  guests: 6,
  bedrooms: 2,
  bathrooms: 2,
  image: exteriorImg,
};

export const VILLA = {
  id: "baywoods",
  name: "BayWoods Luxury Beach Villa",
  price: 45, // OMR per night
  description:
    "Exclusive private villa featuring 2 spacious air-conditioned bedrooms, 2 full bathrooms, drawing room with kitchenette, and garden access. Perfect for families and friends seeking a memorable coastal retreat.",
  image: home,
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
    "Private Parking",
  ],
  highlights: [
    "Shared Beach Access",
    "Garden View",
    "Courtyard View",
    "Close to Alamparai Fort",
    "Near Lighthouse",
    "Backwater Access",
    "Local Market Nearby",
    "5-star Restaurant Nearby",
  ],
};

export const AMENITIES = [
  {
    icon: "Wifi",
    title: "High-Speed Internet",
    description:
      "Stay connected with complimentary Wi-Fi throughout the villa.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Full Kitchen Access",
    description: "Well-equipped kitchenette with all cooking essentials.",
  },
  {
    icon: "Waves",
    title: "Beach Access",
    description:
      "Shared access to pristine sandy beaches and local water sports.",
  },
  {
    icon: "Clock",
    title: "Flexible Check-in/out",
    description: "Check-in from 2 PM, checkout by 1 PM (flexible with host).",
  },
  {
    icon: "Sparkles",
    title: "Housekeeping Ready",
    description: "Fresh linens, towels, and basic toiletries included.",
  },
  {
    icon: "Shield",
    title: "Safe & Secure",
    description: "Gated property with secure parking and 24/7 access.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Kapila",
    location: "Houston, Texas",
    text: "I can't say enough good things about this place. Peaceful, safe, quiet, beautiful, and comfortable. Ms. Subashini made me feel very well looked after. I was quite sad to leave!",
    rating: 5,
  },
  {
    name: "Vidyasagar",
    location: "India",
    text: "This place oozes quality and it's managed very well by the host. This property stands out in the region. There is no other property that can match the quality levels. Brilliantly done!",
    rating: 5,
  },
  {
    name: "Meena",
    location: "India",
    text: "Had an amazing stay at this private villa! The location was perfect, and the villa had all amenities we needed. Our host was super friendly and made us feel at home. Would definitely recommend!",
    rating: 5,
  },
];

export const GALLERY_CATEGORIES = [
  { id: "entrence", label: "Entrance", icon: "Home", folder: "entrence" },
  { id: "garden", label: "Garden", icon: "Leaf", folder: "garden" },
  {
    id: "kitchen",
    label: "Kitchen",
    icon: "UtensilsCrossed",
    folder: "kitchen",
  },
  { id: "living", label: "Living Room", icon: "Sofa", folder: "living" },
  { id: "bedroom", label: "Bedrooms", icon: "Bed", folder: "bedroom" },
  { id: "bathroom", label: "Bathrooms", icon: "Droplet", folder: "bathrooms" },
  { id: "others", label: "Others", icon: "Camera", folder: "others" },
];
