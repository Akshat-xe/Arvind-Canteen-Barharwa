// Named imports for key product/venue images used across the site
import cakeDisplay from "@/assets/Pasted image.png";
import shopExterior from "@/assets/Pasted image (2).png";
import shopInterior from "@/assets/Pasted image (3).png";
import shopInterior2 from "@/assets/Pasted image (7).png";
import flowerPeda from "@/assets/Pasted image (8).png";
import gulabJamun from "@/assets/Pasted image (13).png";
import saffronBarfi from "@/assets/Pasted image (14).png";
import creamRolls from "@/assets/Pasted image (5).png";
import motichoorLadoo from "@/assets/Pasted image (18).png";
import golgappa from "@/assets/Pasted image (25).png";
import roseSweets from "@/assets/Pasted image (50).png";
import soanPapdi from "@/assets/Pasted image (46).png";

export { shopExterior, shopInterior, shopInterior2 };

export type MenuItem = {
  name: string;
  description?: string;
  dietary?: string[];
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const highlights = [
  {
    name: "Gulab Jamun",
    tag: "Most Loved",
    image: gulabJamun,
    blurb: "Soft, perfectly soaked in light sugar syrup. A timeless Barharwa classic.",
  },
  {
    name: "Birthday Cakes",
    tag: "Festive Favourite",
    image: cakeDisplay,
    blurb: "Custom celebration cakes freshly made for every occasion.",
  },
  {
    name: "Saffron Barfi",
    tag: "Heritage Sweet",
    image: saffronBarfi,
    blurb: "Golden milk barfi with saffron and rose petals — a traditional favourite.",
  },
  {
    name: "Cream Rolls",
    tag: "Fresh Daily",
    image: creamRolls,
    blurb: "Freshly filled cream rolls made every morning at the bakery counter.",
  },
  {
    name: "Motichoor Ladoo",
    tag: "Classic Sweet",
    image: motichoorLadoo,
    blurb: "Fine gram flour pearls formed into fragrant, golden laddoos.",
  },
  {
    name: "Rose Sweets",
    tag: "Seasonal Pick",
    image: roseSweets,
    blurb: "Delicate rose-shaped sweets — beautiful, fragrant, and fresh.",
  },
  {
    name: "Golgappa",
    tag: "Popular Snack",
    image: golgappa,
    blurb: "Crispy pani puri shells with tangy, spiced filling — irresistible.",
  },
  {
    name: "Soan Papdi",
    tag: "Bakery Pick",
    image: soanPapdi,
    blurb: "Flaky, melt-in-mouth layered sweet — light, buttery, and addictive.",
  },
  {
    name: "Flower Peda",
    tag: "Signature Sweet",
    image: flowerPeda,
    blurb: "Handcrafted milk peda shaped into flowers — soft, fragrant, and fresh.",
  },
];

// Dynamic gallery — loads all product images from assets
const _galleryModules = import.meta.glob<{ default: string }>(
  "../assets/*.png",
  { eager: true }
);

const _galleryLabels: Record<string, string> = {
  "Pasted image.png": "Cake Display",
  "Pasted image (2).png": "Arvind Canteen",
  "Pasted image (3).png": "Our Shop",
  "Pasted image (4).png": "Fresh Barfi",
  "Pasted image (5).png": "Cream Rolls",
  "Pasted image (6).png": "Barfi Selection",
  "Pasted image (7).png": "Sweets Counter",
  "Pasted image (8).png": "Flower Peda",
  "Pasted image (9).png": "Gift Box",
  "Pasted image (10).png": "Fresh Pastries",
  "Pasted image (11).png": "Bakery Items",
  "Pasted image (12).png": "Namkeen Counter",
  "Pasted image (13).png": "Gulab Jamun",
  "Pasted image (14).png": "Saffron Barfi",
  "Pasted image (15).png": "Baklava Sweets",
  "Pasted image (16).png": "Shop Interior",
  "Pasted image (17).png": "Chikki",
  "Pasted image (18).png": "Motichoor Ladoo",
  "Pasted image (19).png": "Coconut Rolls",
  "Pasted image (20).png": "Chocolate Collection",
  "Pasted image (21).png": "Almond Cake",
  "Pasted image (22).png": "Shop Display",
  "Pasted image (23).png": "Heritage Mithai",
  "Pasted image (24).png": "Special Box",
  "Pasted image (25).png": "Golgappa",
  "Pasted image (26).png": "Savoury Bites",
  "Pasted image (27).png": "Chaat Corner",
  "Pasted image (28).png": "Snack Platter",
  "Pasted image (29).png": "Street Snacks",
  "Pasted image (30).png": "Chaat Cups",
  "Pasted image (31).png": "Mithai Corner",
  "Pasted image (32).png": "Shop Collection",
  "Pasted image (33).png": "Daily Fresh",
  "Pasted image (34).png": "Traditional Fare",
  "Pasted image (35).png": "Arvind Canteen Sign",
  "Pasted image (36).png": "Til Ladoo",
  "Pasted image (37).png": "Mixed Mithai",
  "Pasted image (38).png": "Assorted Sweets",
  "Pasted image (39).png": "Sweet Assortment",
  "Pasted image (40).png": "Fruit Candy",
  "Pasted image (41).png": "Colourful Sweets",
  "Pasted image (42).png": "Festive Mithai",
  "Pasted image (43).png": "Handmade Treats",
  "Pasted image (44).png": "Classic Sweets",
  "Pasted image (45).png": "Pinwheel Biscuits",
  "Pasted image (46).png": "Soan Papdi",
  "Pasted image (47).png": "Sweet Platter",
  "Pasted image (48).png": "Fresh Bakes",
  "Pasted image (49).png": "Premium Sweets",
  "Pasted image (50).png": "Rose Sweets",
  "Pasted image (51).png": "Mithai Box",
  "Pasted image (52).png": "Coconut Sweets",
  "Pasted image (53).png": "Flavoured Barfi",
  "Pasted image (54).png": "Special Selection",
  "Pasted image (55).png": "Malai Barfi",
  "Pasted image (56).png": "Special Cake",
  "Pasted image (57).png": "Sweet Box",
  "Pasted image (58).png": "Gift Collection",
  "Pasted image (59).png": "Butter Cookies",
};

function _naturalNum(path: string): number {
  const m = path.match(/\((\d+)\)/);
  return m ? parseInt(m[1]) : 0;
}

export const galleryImages = Object.entries(_galleryModules)
  .map(([path, mod]) => {
    const filename = path.split("/").pop() || "";
    return {
      src: mod.default,
      label: _galleryLabels[filename] || "Sweet Delight",
      _sort: _naturalNum(path),
    };
  })
  .sort((a, b) => a._sort - b._sort)
  .map(({ src, label }) => ({ src, label }));

export const food: MenuCategory[] = [
  {
    title: "Traditional Sweets",
    items: [
      { name: "Gulab Jamun", description: "Soft milk-solid balls soaked in light rose-flavoured syrup." },
      { name: "Rasgulla", description: "Spongy cottage cheese balls in sugar syrup — melt-in-mouth texture." },
      { name: "Motichoor Ladoo", description: "Fine gram flour pearls formed into fragrant golden laddoos." },
      { name: "Malai Barfi", description: "Creamy milk-based sweet with a delicate, rich texture." },
      { name: "Kaju Katli", description: "Premium cashew fudge, smooth and distinctly nutty." },
      { name: "Saffron Barfi", description: "Golden milk barfi with saffron strands and rose petal garnish." },
      { name: "Flower Peda", description: "Soft, fragrant milk peda handcrafted in flower shapes." },
      { name: "Soan Papdi", description: "Flaky, melt-in-mouth layered sweet — light and buttery." },
      { name: "Til Ladoo", description: "Sesame seed and jaggery balls, rich and warming." },
      { name: "Seasonal Varieties", description: "Many more sweets made fresh daily — ask us for today's counter." },
    ],
  },
  {
    title: "Savory Snacks",
    items: [
      { name: "Samosa", description: "Crispy fried pastry filled with spiced potato and peas." },
      { name: "Golgappa / Pani Puri", description: "Crispy shells with tangy tamarind water and spiced filling." },
      { name: "Chaat", description: "Savoury chaat cups with fresh toppings and green chutneys." },
      { name: "Namkeen", description: "Assorted savoury fried snacks — crispy, flavorful, and addictive." },
      { name: "Kachori", description: "Deep-fried pastry with spiced lentil filling." },
      { name: "Chikki", description: "Crunchy peanut and jaggery brittle — a traditional bite." },
    ],
  },
  {
    title: "Bakery & Cakes",
    items: [
      { name: "Birthday Cakes", description: "Custom celebration cakes freshly made to order for every occasion." },
      { name: "Cream Rolls", description: "Light pastry rolls filled with fresh cream, made daily." },
      { name: "Pastries", description: "Assorted fresh pastries from the bakery counter." },
      { name: "Biscuits & Cookies", description: "Traditional and baked biscuit varieties — butter, pinwheel, and more." },
      { name: "Almond Cake", description: "Traditional-style almond cake, deliciously rich and moist." },
    ],
  },
];

export const drinks: MenuCategory[] = [
  {
    title: "Beverages",
    items: [
      { name: "Chai (Tea)", description: "Hot, freshly brewed Indian tea." },
      { name: "Coffee", description: "Hot fresh coffee, available daily." },
    ],
  },
];

export const business = {
  name: "Arvind Canteen",
  tagline: "70 Years of Trust & Legacy",
  established: "Since 1956",
  type: "Sweets · Snacks · Bakery",
  address: "Main Road, near UCO Bank, in front of Patanjali, Barharwa, Jharkhand 816101",
  addressLine1: "Arvind Canteen",
  addressLine2: "Main Road, near UCO Bank",
  addressLine3: "Barharwa, Jharkhand 816101",
  phone: "9955227700",
  phone2: "7870928585",
  phoneHref: "tel:+919955227700",
  email: "ar31751@gmail.com",
  rating: 4.3,
  reviews: 152,
  priceRange: "₹1–200 per person",
  instagram: "https://www.instagram.com/arvind_canteen1956/",
  facebook: "https://www.facebook.com/",
  instagramHandle: "@arvind_canteen1956",
  mapsUrl: "https://www.google.com/maps?q=VQ4C%2BG5+Barharwa,+Jharkhand",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Arvind+Canteen+Main+Road+near+UCO+Bank+Barharwa+Jharkhand+816101",
  mapsEmbed:
    "https://www.google.com/maps?q=VQ4C%2BG5+Barharwa,+Jharkhand&output=embed",
};

export const amenityGroups = [
  {
    title: "Service options",
    items: ["Dine-in", "Takeaway", "Delivery", "Outdoor seating"],
  },
  {
    title: "Highlights",
    items: ["Great dessert", "Great tea selection"],
  },
  {
    title: "Popular for",
    items: ["Breakfast", "Solo dining", "Family visits"],
  },
  {
    title: "Offerings",
    items: ["Coffee", "Tea", "Quick bite", "Small plates", "Vegetarian options only"],
  },
  {
    title: "Dining",
    items: ["Breakfast", "Brunch", "Lunch", "Dessert", "Catering", "Table service"],
  },
  {
    title: "Atmosphere",
    items: ["Casual", "Quiet", "Upmarket"],
  },
  {
    title: "Payments",
    items: ["Cash only"],
  },
  {
    title: "Parking",
    items: ["Free parking lot", "Free street parking"],
  },
  {
    title: "Accessibility",
    items: ["Wheelchair-accessible seating"],
  },
  {
    title: "Children",
    items: ["Good for kids", "Kids' menu"],
  },
];
