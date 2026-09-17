export interface NutritionFacts {
  energy: string;
  protein: string;
  carbs: string;
  fat?: string;
  fibre: string;
  sugars: string;
}

export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  category: 'snacks' | 'spices';
  snackType?: 'chakli' | 'sticks' | 'chips' | 'mixture' | 'bhujiya';
  flavor?: 'classic' | 'tomato' | 'masala' | 'periperi';
  flavorName?: string;
  subtitle: string;
  weight: string;
  image: string;
  badge?: string;
  description: string;
  highlights: string[];
  ingredients: string[];
  nutrition?: NutritionFacts;
}

export const BRAND_INFO = {
  name: 'NEVORA',
  tagline: 'New era of everyday food',
  motto: 'Wholesome millet snacks & authentic stone-grinded spices made with traditional purity and modern wellness.',
  phone: '+919893298279',
  phoneDisplay: '+91 98932 98279',
  email: 'srijanagrotech@gmail.com',
  website: 'www.nevorafoods.in',
  fssai: '20526050002006',
  company: 'Srijan Agrotech and Marketing LLP',
  address: 'Potiya Chowk, Durg, Chhattisgarh, India - 491001',
  instagram: '@NEVORA_FOODS',
  instagramUrl: 'https://instagram.com/NEVORA_FOODS',
  whatsappBaseUrl: 'https://wa.me/919893298279',
};

const COMMON_SNACK_NUTRITION: NutritionFacts = {
  energy: '495.06 kcal',
  protein: '10.61 g',
  carbs: '61.63 g',
  fibre: '8.50 g',
  sugars: '< 2 g',
};

const SNACK_HIGHLIGHTS = [
  'No Maida',
  'No Palm Oil',
  'High Fibre',
  'No Preservatives',
  'Pure Veg',
];

const SNACK_INGREDIENTS = [
  'Ragi (Finger Millet)',
  'Peanut',
  'Urad Dal',
  'Curry Leaves',
  'Salt',
  'Natural Spices',
  'Cold Pressed Oil',
];

export const PRODUCTS: Product[] = [
  // --- LOW RPM TRADITIONAL SPICES ---
  {
    id: 'kutta-mirchi',
    name: 'Kutta Mirchi',
    hindiName: 'कुट्टा मिर्ची',
    category: 'spices',
    subtitle: 'Coarse Red Chilli Powder',
    weight: '130 g',
    image: '/images/masala/kutta-mirchi.png',
    badge: 'Farm Fresh',
    description:
      'Stone-style low RPM grinding preserves the volatile essential capsicum oils and bold red colour. Coarsely pounded for the unmatched pungency and deep texture of home-pounded chillies.',
    highlights: [
      'Low RPM Grinded',
      'From Our Fields to Your Home',
      'Pure & Authentic',
      'No Artificial Colour',
      'Rich Natural Heat',
    ],
    ingredients: ['100% Sun-Dried Red Chillies (Low RPM Ground)'],
  },
  {
    id: 'kutta-haldi',
    name: 'Kutta Haldi',
    hindiName: 'कुट्टा हल्दी',
    category: 'spices',
    subtitle: 'Pure Turmeric Powder',
    weight: '180 g',
    image: '/images/masala/kutta-haldi.png',
    badge: 'High Curcumin',
    description:
      'Gently slow-ground at low revolutions to prevent heat buildup, locking in natural golden curcumin and earthy botanical warmth. Authentic aroma straight from sustainable farms.',
    highlights: [
      'Low RPM Grinded',
      'Retained Curcumin Goodness',
      'Zero Fillers or Starch',
      'Traditional Grinding',
      'Naturally Vibrant Golden',
    ],
    ingredients: ['100% Selected Turmeric Rhizomes (Slow Cold-Milled)'],
  },
  {
    id: 'kutta-dhaniya',
    name: 'Kutta Dhaniya',
    hindiName: 'कुट्टा धनिया',
    category: 'spices',
    subtitle: 'Fragrant Coriander Powder',
    weight: '130 g',
    image: '/images/masala/kutta-dhaniya.png',
    badge: 'Aromatic',
    description:
      'Crisp roasted coriander seeds pounded with care. Low RPM grinding retains the refreshing citrusy notes and herbal richness that define timeless Indian cuisine.',
    highlights: [
      'Low RPM Grinded',
      'Essential Aroma Preserved',
      '100% Pure Coriander Seeds',
      'Coarse Farm Texture',
      'No Added Flavours',
    ],
    ingredients: ['100% Premium Coriander Seeds (Low RPM Ground)'],
  },

  // --- MILLET SNACKS: CLASSIC SERIES ---
  {
    id: 'ragi-chakli-classic',
    name: 'Ragi Chakli',
    category: 'snacks',
    snackType: 'chakli',
    flavor: 'classic',
    flavorName: 'Classic Authentic',
    subtitle: 'Crisp Millet Spiral Crunch',
    weight: '130 g',
    image: '/images/snacks/chakli-classic.jpg',
    badge: 'Bestseller',
    description:
      'Traditional spiral chakli reimagined with nutrient-packed Ragi (Finger Millet). Crunchy, lightly seasoned with curry leaves and cold-pressed spices.',
    highlights: SNACK_HIGHLIGHTS,
    ingredients: SNACK_INGREDIENTS,
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-sticks-classic',
    name: 'Ragi Sticks',
    category: 'snacks',
    snackType: 'sticks',
    flavor: 'classic',
    flavorName: 'Classic Authentic',
    subtitle: 'Golden Millet Crunchy Fingers',
    weight: '100 g',
    image: '/images/snacks/sticks-classic.jpg',
    badge: 'High Fibre',
    description:
      'Slender, extra-crisp ragi snack sticks. 0% maida and 0% palm oil make this your guilt-free tea time partner.',
    highlights: SNACK_HIGHLIGHTS,
    ingredients: SNACK_INGREDIENTS,
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-chips-classic',
    name: 'Ragi Chips',
    category: 'snacks',
    snackType: 'chips',
    flavor: 'classic',
    flavorName: 'Classic Authentic',
    subtitle: 'Wafer-Thin Millet Chips',
    weight: '100 g',
    image: '/images/snacks/chips-classic.jpg',
    description:
      'Light, crunchy wafer chips crafted from nutrient-rich finger millet grains. Packed with dietary fibre and iron.',
    highlights: SNACK_HIGHLIGHTS,
    ingredients: SNACK_INGREDIENTS,
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-mixture-classic',
    name: 'Ragi Mixture',
    category: 'snacks',
    snackType: 'mixture',
    flavor: 'classic',
    flavorName: 'Classic Authentic',
    subtitle: 'Namkeen Medley with Peanuts',
    weight: '100 g',
    image: '/images/snacks/mixture-classic.jpg',
    badge: 'Crowd Favourite',
    description:
      'A crunchy namkeen mix of ragi strands, roasted peanuts, crisp curry leaves, and traditional mild spices.',
    highlights: SNACK_HIGHLIGHTS,
    ingredients: SNACK_INGREDIENTS,
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-bhujiya-classic',
    name: 'Ragi Bhujiya',
    category: 'snacks',
    snackType: 'bhujiya',
    flavor: 'classic',
    flavorName: 'Classic Authentic',
    subtitle: 'Fine Crispy Millet Strands',
    weight: '130 g',
    image: '/images/snacks/bhujiya-classic.jpg',
    description:
      'Delicate, savoury bhujiya made from stone-ground ragi and roasted lentils. Perfect sprinkle for salads, chaats, or solo munching.',
    highlights: SNACK_HIGHLIGHTS,
    ingredients: SNACK_INGREDIENTS,
    nutrition: COMMON_SNACK_NUTRITION,
  },

  // --- MILLET SNACKS: TOMATO TANGY SERIES ---
  {
    id: 'ragi-chakli-tomato',
    name: 'Ragi Chakli (Tomato Tangy)',
    category: 'snacks',
    snackType: 'chakli',
    flavor: 'tomato',
    flavorName: 'Tomato Tangy',
    subtitle: 'Tangy Sun-Ripened Tomato Twist',
    weight: '130 g',
    image: '/images/snacks/chakli-tomato.jpg',
    badge: 'Tangy Kick',
    description:
      'Crispy spirals infused with the mouth-watering zest of ripe tomatoes, subtle red chilli, and aromatic curry leaf powder.',
    highlights: [...SNACK_HIGHLIGHTS, 'Real Tomato Notes'],
    ingredients: [...SNACK_INGREDIENTS, 'Tomato Powder'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-sticks-tomato',
    name: 'Ragi Sticks (Tomato Tangy)',
    category: 'snacks',
    snackType: 'sticks',
    flavor: 'tomato',
    flavorName: 'Tomato Tangy',
    subtitle: 'Zesty Finger Crunch',
    weight: '100 g',
    image: '/images/snacks/sticks-tomato.jpg',
    description:
      'Savoury finger sticks tossed in a zesty sweet-tangy tomato glaze. The snack kids and adults both fall in love with.',
    highlights: [...SNACK_HIGHLIGHTS, 'Sweet & Tangy'],
    ingredients: [...SNACK_INGREDIENTS, 'Tomato Powder'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-chips-tomato',
    name: 'Ragi Chips (Tomato Tangy)',
    category: 'snacks',
    snackType: 'chips',
    flavor: 'tomato',
    flavorName: 'Tomato Tangy',
    subtitle: 'Tangy Millet Wafers',
    weight: '100 g',
    image: '/images/snacks/chips-tomato.jpg',
    description:
      'Ultra crisp finger millet chips coated with farm-fresh tomato seasoning. Bursting with zingy flavour in every crunch.',
    highlights: [...SNACK_HIGHLIGHTS, 'Zesty Crunch'],
    ingredients: [...SNACK_INGREDIENTS, 'Tomato Powder'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-mixture-tomato',
    name: 'Ragi Mixture (Tomato Tangy)',
    category: 'snacks',
    snackType: 'mixture',
    flavor: 'tomato',
    flavorName: 'Tomato Tangy',
    subtitle: 'Tangy Namkeen Fusion',
    weight: '100 g',
    image: '/images/snacks/mixture-tomato.jpg',
    badge: 'Snack of the Day',
    description:
      'A tangy carnival of crunchy ragi sev, crunchy nuts, and sweet-sour tomato spices. Completely free of palm oil.',
    highlights: [...SNACK_HIGHLIGHTS, 'Tangy Spice Blend'],
    ingredients: [...SNACK_INGREDIENTS, 'Tomato Powder'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-bhujiya-tomato',
    name: 'Ragi Bhujiya (Tomato Tangy)',
    category: 'snacks',
    snackType: 'bhujiya',
    flavor: 'tomato',
    flavorName: 'Tomato Tangy',
    subtitle: 'Tangy Thin Bhujiya',
    weight: '130 g',
    image: '/images/snacks/bhujiya-tomato.jpg',
    description:
      'Melt-in-mouth ragi sev seasoned with a bright tomato zing. Clean snacking without any preservatives.',
    highlights: [...SNACK_HIGHLIGHTS, 'Digestive Goodness'],
    ingredients: [...SNACK_INGREDIENTS, 'Tomato Powder'],
    nutrition: COMMON_SNACK_NUTRITION,
  },

  // --- MILLET SNACKS: DESI MASALA SERIES ---
  {
    id: 'ragi-chakli-masala',
    name: 'Ragi Chakli (Desi Masala)',
    category: 'snacks',
    snackType: 'chakli',
    flavor: 'masala',
    flavorName: 'Desi Masala',
    subtitle: 'Bold Indian Spice Spirals',
    weight: '130 g',
    image: '/images/snacks/chakli-masala.jpg',
    badge: 'Desi Flavour',
    description:
      'Tossed in an authentic blend of roasted cumin, star anise, cloves, and black pepper. Deeply comforting home-cooked Indian flavours.',
    highlights: [...SNACK_HIGHLIGHTS, 'Rich Indian Spices'],
    ingredients: [...SNACK_INGREDIENTS, 'Garam Masala Spices'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-sticks-masala',
    name: 'Ragi Sticks (Desi Masala)',
    category: 'snacks',
    snackType: 'sticks',
    flavor: 'masala',
    flavorName: 'Desi Masala',
    subtitle: 'Spicy Masala Sticks',
    weight: '100 g',
    image: '/images/snacks/sticks-masala.jpg',
    description:
      'Crunchy finger bites packed with the warmth of traditional ground condiments. Elevates your evening cup of chai instantly.',
    highlights: [...SNACK_HIGHLIGHTS, 'Tea-Time Special'],
    ingredients: [...SNACK_INGREDIENTS, 'Garam Masala Spices'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-chips-masala',
    name: 'Ragi Chips (Desi Masala)',
    category: 'snacks',
    snackType: 'chips',
    flavor: 'masala',
    flavorName: 'Desi Masala',
    subtitle: 'Chatpata Spice Crisps',
    weight: '100 g',
    image: '/images/snacks/chips-masala.jpg',
    badge: 'Chatpata',
    description:
      'Boldly seasoned ragi wafer chips with chatpata masala notes. Packed with 10.6g protein and 8.5g dietary fibre per 100g.',
    highlights: [...SNACK_HIGHLIGHTS, 'Chatpata Crunch'],
    ingredients: [...SNACK_INGREDIENTS, 'Garam Masala Spices'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-mixture-masala',
    name: 'Ragi Mixture (Desi Masala)',
    category: 'snacks',
    snackType: 'mixture',
    flavor: 'masala',
    flavorName: 'Desi Masala',
    subtitle: 'Classic Royal Indian Namkeen',
    weight: '100 g',
    image: '/images/snacks/mixture-masala.jpg',
    description:
      'A festive medley of spiced ragi noodles, golden roasted peanuts, and fragrant curry leaves in a secret spice blend.',
    highlights: [...SNACK_HIGHLIGHTS, 'Festive Classic'],
    ingredients: [...SNACK_INGREDIENTS, 'Garam Masala Spices'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-bhujiya-masala',
    name: 'Ragi Bhujiya (Desi Masala)',
    category: 'snacks',
    snackType: 'bhujiya',
    flavor: 'masala',
    flavorName: 'Desi Masala',
    subtitle: 'Fine Spiced Bhujiya',
    weight: '130 g',
    image: '/images/snacks/bhujiya-masala.jpg',
    description:
      'Spiced finger millet bhujiya created without maida or chemical preservatives. High in calcium and gut-friendly.',
    highlights: [...SNACK_HIGHLIGHTS, 'Calcium Rich'],
    ingredients: [...SNACK_INGREDIENTS, 'Garam Masala Spices'],
    nutrition: COMMON_SNACK_NUTRITION,
  },

  // --- MILLET SNACKS: PERI PERI SERIES ---
  {
    id: 'ragi-chakli-periperi',
    name: 'Ragi Chakli (Peri Peri)',
    category: 'snacks',
    snackType: 'chakli',
    flavor: 'periperi',
    flavorName: 'Peri Peri',
    subtitle: 'Fiery African Birdseye Twist',
    weight: '130 g',
    image: '/images/snacks/chakli-periperi.jpg',
    badge: 'Spicy & Hot',
    description:
      'Crispy spirals infused with spicy, zesty Peri Peri chilli, garlic, and herbs. Irresistibly zesty crunch with a warm lingering heat.',
    highlights: [...SNACK_HIGHLIGHTS, 'Fiery Kick'],
    ingredients: [...SNACK_INGREDIENTS, 'Peri Peri Seasoning'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-sticks-periperi',
    name: 'Ragi Sticks (Peri Peri)',
    category: 'snacks',
    snackType: 'sticks',
    flavor: 'periperi',
    flavorName: 'Peri Peri',
    subtitle: 'Bold Peri Peri Finger Bites',
    weight: '100 g',
    image: '/images/snacks/sticks-periperi.jpg',
    badge: 'Popular',
    description:
      'Crunchy ragi sticks dusted in fiery peri peri seasoning. Bold, tangy, and satisfyingly spicy without any palm oil.',
    highlights: [...SNACK_HIGHLIGHTS, 'Zesty & Fiery'],
    ingredients: [...SNACK_INGREDIENTS, 'Peri Peri Seasoning'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-chips-periperi',
    name: 'Ragi Chips (Peri Peri)',
    category: 'snacks',
    snackType: 'chips',
    flavor: 'periperi',
    flavorName: 'Peri Peri',
    subtitle: 'Spicy Millet Chips',
    weight: '100 g',
    image: '/images/snacks/chips-periperi.jpg',
    badge: 'Party Hit',
    description:
      'Thin, crispy ragi wafers smothered in zesty peri peri spices. The ultimate clean cheat-snack for movie nights.',
    highlights: [...SNACK_HIGHLIGHTS, 'Party Snack'],
    ingredients: [...SNACK_INGREDIENTS, 'Peri Peri Seasoning'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-mixture-periperi',
    name: 'Ragi Mixture (Peri Peri)',
    category: 'snacks',
    snackType: 'mixture',
    flavor: 'periperi',
    flavorName: 'Peri Peri',
    subtitle: 'Fiery Gourmet Mixture',
    weight: '100 g',
    image: '/images/snacks/mixture-periperi.jpg',
    description:
      'A modern global fusion: traditional millet namkeen tossed in hot and tangy peri peri spices with toasted peanuts.',
    highlights: [...SNACK_HIGHLIGHTS, 'Global Fusion'],
    ingredients: [...SNACK_INGREDIENTS, 'Peri Peri Seasoning'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
  {
    id: 'ragi-bhujiya-periperi',
    name: 'Ragi Bhujiya (Peri Peri)',
    category: 'snacks',
    snackType: 'bhujiya',
    flavor: 'periperi',
    flavorName: 'Peri Peri',
    subtitle: 'Fine Fire-Kissed Bhujiya',
    weight: '130 g',
    image: '/images/snacks/bhujiya-periperi.jpg',
    badge: 'Hot Pick',
    description:
      'Spicy, smoky, and dangerously addictive. Fine ragi bhujiya strands kissed with aromatic peri peri notes.',
    highlights: [...SNACK_HIGHLIGHTS, 'Smoky & Tangy'],
    ingredients: [...SNACK_INGREDIENTS, 'Peri Peri Seasoning'],
    nutrition: COMMON_SNACK_NUTRITION,
  },
];
