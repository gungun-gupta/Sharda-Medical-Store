export interface Product {
  id: string;
  name: string;
  category: 'medicines' | 'healthcare' | 'equipment';
  description: string;
  image?: string; // We can use placeholder SVGs or high quality icons
  specialOrder?: boolean;
  price?: string; // Optional price range or retail price
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  role?: string;
}

export interface StoreInfo {
  name: string;
  shortName: string;
  tagline: string;
  location: {
    address: string;
    city: string;
    district: string;
    state: string;
    landmark: string;
    googleMapsLink: string;
    googleMapsEmbedUrl: string;
  };
  phone: string;
  whatsapp: string;
  hours: string;
  hoursFootnote: string;
  establishedYear: string;
  yearsOfService: number;
  doctorCount: string;
  discountRate: string;
}

export const storeInfo: StoreInfo = {
  name: "Sharda Medical Store",
  shortName: "Sharda Medicals",
  tagline: "Kawardha's Trusted Doorstep Pharmacy & Wholesale Distributor",
  location: {
    address: "Naveen Bazar, Main Market Road",
    city: "Kawardha",
    district: "Kabirdham",
    state: "Chhattisgarh",
    landmark: "Naveen Bazar Main Market",
    googleMapsLink: "https://maps.app.goo.gl/vWFHc8c7jLbuCVeJ9",
    // Standard embed for Kawardha market area - using a generic functional map placeholder
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14828.679634991196!2d81.24278453775084!3d22.01428258661645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a296541f5a5ad27%3A0xb5b736b04eb8c74a!2sKawardha%2C%20Chhattisgarh%20491995!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  phone: "+91 99936 50999",
  whatsapp: "918827510999", // Needs to be format without + or spaces for api.whatsapp.com/wa.me link
  hours: "8:00 AM – 11:00 PM",
  hoursFootnote: "Open 15 Hours Daily, 7 Days a week (Closed on alternate Fridays)",
  establishedYear: "2000",
  yearsOfService: 26, // 26+ years of operation
  doctorCount: "400+",
  discountRate: "10%"
};

export const services = [
  {
    id: "delivery",
    title: "Doorstep Home Delivery",
    shortDesc: "First medical store in Kawardha district to deliver medicine to your doorstep.",
    longDesc: "We bring health to your home. Simply call us or message your prescription list on WhatsApp. We verify your order, package it securely following safety standards, and deliver it directly to your home in Kawardha. Quick, safe, and dependable.",
    iconName: "Truck",
    ctaText: "Order Home Delivery"
  },
  {
    id: "sourcing",
    title: "Special Medicine Sourcing",
    shortDesc: "Can't find a medicine anywhere? We'll source it for you.",
    longDesc: "If a rare or specialty medication is out of stock anywhere else in the district, we will use our vast distributor network to source it for you. We typically get specialized medicines sourced within 24 to 48 hours.",
    iconName: "Search",
    ctaText: "Inquire for Medicine"
  },
  {
    id: "wholesale",
    title: "Wholesale for Doctors",
    shortDesc: "Wholesale distribution rates on bulk orders for clinics & hospitals.",
    longDesc: "We supply essential medicines and equipment at highly competitive wholesale rates to over 400+ doctors, clinics, and hospitals throughout Kabirdham district. Partner with us for smooth bulk logistics and digital invoicing.",
    iconName: "Building2",
    ctaText: "Wholesale Inquiry"
  },
  {
    id: "equipment",
    title: "Medical Equipment Supply",
    shortDesc: "Bandages of various types and patient care equipment.",
    longDesc: "We stock a full range of patient care devices (glucometers, blood pressure monitors, nebulizers), orthopedic supports (knee caps, back belts), and various dressings and surgical bandages for hospital and patient use.",
    iconName: "Stethoscope",
    ctaText: "Inquire About Equipment"
  }
];

export const products: Product[] = [
  // Medicines
  {
    id: "med-1",
    name: "Paracetamol 650mg Tablets",
    category: "medicines",
    description: "Highly effective analgesic and antipyretic tablets for fever and mild to moderate pain relief. Daily essential.",
    price: "₹15 - ₹30 per strip"
  },
  {
    id: "med-2",
    name: "Pantoprazole 40mg (Gastro-resistant)",
    category: "medicines",
    description: "Prescription medicine used to treat acid-related diseases of the stomach and intestine, like acid reflux and heartburn.",
    price: "₹80 - ₹120 per strip"
  },
  {
    id: "med-3",
    name: "Metformin Hydrochloride 500mg SR",
    category: "medicines",
    description: "Sustained-release oral anti-diabetic medication used for managing type 2 diabetes mellitus under professional guidance.",
    price: "₹20 - ₹50 per strip"
  },
  {
    id: "med-4",
    name: "Amlodipine 5mg Tablets",
    category: "medicines",
    description: "Calcium channel blocker used to treat high blood pressure (hypertension) and chest pain (angina). Proper storage maintained.",
    price: "₹10 - ₹25 per strip"
  },
  {
    id: "med-5",
    name: "Cetirizine 10mg Allergy Relief",
    category: "medicines",
    description: "Antihistamine tablet that provides 24-hour relief from common allergy symptoms like runny nose, sneezing, and itchy eyes.",
    price: "₹15 - ₹20 per strip"
  },
  {
    id: "med-6",
    name: "Essential Multivitamin & Minerals",
    category: "medicines",
    description: "Daily health capsule containing key vitamins, minerals, and antioxidants to support overall immunity and general wellness.",
    price: "₹90 - ₹150 per bottle"
  },

  // Healthcare
  {
    id: "hlth-1",
    name: "Premium Hand Sanitizer (75% Alcohol)",
    category: "healthcare",
    description: "Instant skin sanitizer with moisturizer. Destroys 99.9% of germs without water. Essential hygiene product.",
    price: "₹50 - ₹250"
  },
  {
    id: "hlth-2",
    name: "Digital Thermometer (Quick-Read)",
    category: "healthcare",
    description: "High-precision digital oral/underarm thermometer with auto-beep alarm and memory function for fever tracking.",
    price: "₹120 - ₹199"
  },
  {
    id: "hlth-3",
    name: "Fingerpulse Oximeter (SpO2)",
    category: "healthcare",
    description: "Accurate blood oxygen saturation monitor and pulse rate reader with bright LED screen. Compact and reliable.",
    price: "₹799 - ₹1,499"
  },
  {
    id: "hlth-4",
    name: "3-in-1 Steam Vaporizer / Inhaler",
    category: "healthcare",
    description: "All-in-one steamer for facial sauna, nasal relief, and throat vaporization. Excellent for cold and congestion.",
    price: "₹250 - ₹399"
  },
  {
    id: "hlth-5",
    name: "Herbal Cough & Sore Throat Syrup",
    category: "healthcare",
    description: "Non-drowsy ayurvedic formula containing honey, tulsi, and mulethi for quick relief from wet and dry cough.",
    price: "₹80 - ₹130"
  },
  {
    id: "hlth-6",
    name: "Chyawanprash Immunity Booster (500g)",
    category: "healthcare",
    description: "Traditional Ayurvedic herbal paste formulated with Amla and rich herbs to strengthen natural defense systems.",
    price: "₹190 - ₹260"
  },

  // Equipment
  {
    id: "eq-1",
    name: "Elastic Adhesive Bandages (Various Sizes)",
    category: "equipment",
    description: "High-elasticity adhesive support bandages for compression, dressings, and muscle strain relief. Top grade quality.",
    price: "₹60 - ₹150"
  },
  {
    id: "eq-2",
    name: "Sterile Gauze Swabs (Pack of 100)",
    category: "equipment",
    description: "Ultra-absorbent, cotton-woven medical-grade gauze pads for wound dressings and sanitization in clinics and homes.",
    price: "₹120 - ₹180"
  },
  {
    id: "eq-3",
    name: "Digital Blood Pressure Monitor (Automatic)",
    category: "equipment",
    description: "Fully automatic upper-arm blood pressure checker with memory storage, irregular heartbeat detection, and large cuff.",
    price: "₹1,800 - ₹2,800"
  },
  {
    id: "eq-4",
    name: "Blood Glucose Monitor (Glucometer Kit)",
    category: "equipment",
    description: "Includes test meter, lancing device, and 25 test strips. Delivers results in 5 seconds with small droplet sample.",
    price: "₹990 - ₹1,350"
  },
  {
    id: "eq-5",
    name: "Orthopedic Neoprene Knee Support",
    category: "equipment",
    description: "Anatomically designed knee cap for compression, patellar stabilization, joint warmth, and recovery from sports injury.",
    price: "₹250 - ₹450"
  },
  {
    id: "eq-6",
    name: "Compression Crepe Bandage (10cm)",
    category: "equipment",
    description: "Flesh-colored heavy cotton elastic bandage providing long-lasting compression and support for sprains and dislocations.",
    price: "₹80 - ₹130"
  }
];

export const faqs: FAQ[] = [
  {
    question: "How do I place an order for home delivery?",
    answer: "It is simple! 1. Browse our shop catalog online. 2. Click the 'Order Now' button. 3. Choose 'Order on WhatsApp' or 'Call Us'. 4. Send a text list of your requirements or take a photo of your doctor's prescription and share it. 5. Our certified pharmacist will verify the order, call you to confirm, and dispatch it for delivery."
  },
  {
    question: "Is there a minimum order amount for home delivery?",
    answer: "Yes, the minimum order amount for home delivery is ₹500/- and above. Free delivery is provided within Kawardha town limits for orders meeting this minimum threshold."
  },
  {
    question: "Can you source a rare or specialized medicine if it is out of stock?",
    answer: "Yes, this is one of our special services! We have established networks with regional distributors. If a medicine is not currently on our shelves, we can source it for you within 24 to 48 hours. Just share the exact medicine name and strength on WhatsApp."
  },
  {
    question: "Do you supply medicines in wholesale to clinics and doctors?",
    answer: "Yes, we are one of the leading wholesale pharmaceutical distributors in Kawardha district, trusted by over 400+ doctors. We offer bulk medicines, bandages, surgical items, and diagnostics at dedicated wholesale rates. Doctors and clinic administrators can reach out via call or WhatsApp for a customized quote."
  },
  {
    question: "What are your operating hours? Are you open on weekends?",
    answer: "We are open 15 hours daily, from 8:00 AM to 11:00 PM, 7 days a week (Monday to Sunday) to ensure you always have access to healthcare. Please note that we are closed on alternate Fridays."
  },
  {
    question: "Do you offer discounts for regular customers?",
    answer: "Yes, we value our relationship with our regular patients. We offer a flat 10% discount on standard medicines for regular customers and chronic patient orders (e.g., monthly diabetes and blood pressure medication lists)."
  },
  {
    question: "Can I return unused medicines?",
    answer: "Returns are accepted on a condition basis. You can ask at the time of buying or later come within 7 days to get the confirmation. Unopened strips of medicines in their original packaging, with intact batch numbers and expiry dates, can be returned upon validation."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "rev-1",
    author: "Rakesh Chandrakar",
    rating: 5,
    date: "1 month ago",
    text: "Sharda Medical Store is the best in Kawardha. They started home delivery of medicines, which is extremely helpful for senior citizens like my parents. The ordering process on WhatsApp is so easy, just send prescription photo and they deliver within 2 hours.",
    role: "Local Resident"
  },
  {
    id: "rev-2",
    author: "Dr. A. K. Verma",
    rating: 5,
    date: "2 months ago",
    text: "As a practicing physician in Kawardha, I rely on Sharda Medicals for my clinic's wholesale supplies. Their inventory is unmatched, stocking major national brands and specialty drugs. Their temperature-controlled storage ensures we get active, highly effective medicines.",
    role: "Clinic Owner"
  },
  {
    id: "rev-3",
    author: "Savitri Sahu",
    rating: 5,
    date: "3 weeks ago",
    text: "Very polite staff and fast service. I couldn't find a specific thyroid medicine anywhere in Kawardha market, but Sharda Medical sourced it for me from Raipur within 24 hours. Highly recommended pharmacy in Naveen Bazar!",
    role: "Regular Customer"
  },
  {
    id: "rev-4",
    author: "Mohammad Imran",
    rating: 5,
    date: "3 months ago",
    text: "Reliable and computerized billing. They give clear discount receipt for every medicine. Plus, the pharmacists are qualified and explain the dosage clearly if you ask. Truly professional.",
    role: "Business Owner"
  }
];
