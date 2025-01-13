import {
  p_img1,
  p_img2_1,
  p_img2_2,
  p_img2_3,
  p_img2_4,
  p_img3,
  p_img4,
  p_img5,
  p_img6,
  p_img7,
  p_img8,
  p_img9,
  p_img10,
  p_img11,
  p_img12,
  p_img13,
  p_img14,
  p_img15,
  p_img16,
  p_img17,
  p_img18,
  p_img19,
  p_img20,
  p_img21,
  p_img22,
  p_img23,
  p_img24,
  p_img25,
  p_img26,
  p_img28,
  p_img31,
  p_img34,
  p_img35,
  p_img36,
  p_img39,
  p_img40,
  p_img41,
  p_img43,
  p_img44,
  p_img45,
  p_img46,
  p_img47,
  p_img48,
  p_img49,
  p_img50,
} from "../assets";
export const products = [
  {
    _id: "p001",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 100,
    image: [p_img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p002",
    name: "Men Round Neck Cotton Top",
    description:
      "A comfortable cotton top for casual or home wear. Lightweight and breathable.",
    price: 200,
    image: [p_img11],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p003",
    name: "Kids Printed T-Shirt",
    description:
      "Soft t-shirt with colorful prints for kids. Great for playtime or daily use.",
    price: 80,
    image: [p_img14],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p004",
    name: "Women Denim Jacket",
    description:
      "A classic denim jacket for women, perfect for layering over casual outfits.",
    price: 500,
    image: [p_img26],
    category: "Women",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p005",
    name: "Men Leather Jacket",
    description:
      "Premium leather jacket with a sleek design. Great for cool weather.",
    price: 800,
    image: [p_img28],
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["L", "XL", "XXL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p006",
    name: "Women Floral Maxi Dress",
    description:
      "Flowing maxi dress with floral prints. Great for summer or casual events.",
    price: 400,
    image: [p_img1],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p007",
    name: "Men Formal Shirt",
    description:
      "High-quality formal shirt for office wear or special occasions.",
    price: 250,
    image: [p_img39],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["M", "L", "XL", "XXL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p008",
    name: "Kids Shorts",
    description:
      "Durable denim shorts for kids, perfect for playtime or outings.",
    price: 120,
    image: [p_img23],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["XS", "S", "M"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p09",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "Stylish and comfortable sneakers for casual wear. Suitable for daily use.",
    price: 280,
    image: [p_img36],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p010",
    name: "Men Casual Shirt",
    description:
      "Trendy and durable sneakers for men. Great for casual outings.",
    price: 320,
    image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p011",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "Soft and stretchable yoga pants for women. Ideal for workouts or lounging.",
    price: 180,
    image: [p_img47],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p012",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 150,
    image: [p_img3],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p0013",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A comfortable cotton top for casual or home wear. Lightweight and breathable.",
    price: 200,
    image: [p_img15],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p014",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 70,
    image: [p_img50],
    category: "Bottomwear",
    subCategory: "Kids",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p015",
    name: "Women Yoga Pants",
    description:
      "Soft and stretchable yoga pants for women. Ideal for workouts or lounging.",
    price: 180,
    image: [p_img20],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p016",
    name: "Men Round Neck Cotton Top",
    description:
      "A comfortable cotton top for casual or home wear. Lightweight and breathable.",
    price: 200,
    image: [p_img41],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p017",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 100,
    image: [p_img5],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p018",
    name: "Men Round Neck Cotton Top",
    description:
      "A comfortable cotton top for casual or home wear. Lightweight and breathable.",
    price: 200,
    image: [p_img12],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p019",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 70,
    image: [p_img6],
    category: "Kids",
    subCategory: "Topwear",
    sizes: [],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p020",
    name: "Men Round Neck Cotton Top",
    description:
      "A comfortable cotton top for casual or home wear. Lightweight and breathable.",
    price: 200,
    image: [p_img4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p021",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 100,
    image: [p_img5],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p022",
    name: "Men Tapered Fit Flat-Front Trousers",
    description: "High-quality pant for office wear or special occasions.",
    price: 250,
    image: [p_img7],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL", "XXL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p023",
    name: "Men Round Neck Cotton Top",
    description:
      "A comfortable cotton top for casual or home wear. Lightweight and breathable.",
    price: 200,
    image: [p_img8],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p024",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 150,
    image: [p_img9],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p025",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A comfortable cotton top for casual or home wear. Lightweight and breathable.",
    price: 200,
    image: [p_img10],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p026",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 100,
    image: [p_img13],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p027",
    name: "Kids Shorts",
    description:
      "Durable denim shorts for kids, perfect for playtime or outings.",
    price: 120,
    image: [p_img16],
    category: "Kids",
    subCategory: "Bottomwear",
    sizes: ["XS", "S", "M"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p028",
    name: "Men Tapered Fit Flat-Front Trousers",
    description: "High-quality pant for office wear or special occasions.",
    price: 250,
    image: [p_img17],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL", "XXL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p029",
    name: "Kids T-Shirt",
    description:
      "Durable denim shorts for kids, perfect for playtime or outings.",
    price: 120,
    image: [p_img18],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p030",
    name: "Kids Printed T-Shirt",
    description:
      "Soft t-shirt with colorful prints for kids. Great for playtime or daily use.",
    price: 80,
    image: [p_img19],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p031",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 150,
    image: [p_img21],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p032",
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 100,
    image: [p_img22],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p033",
    name: "Kids T-Shirt",
    description:
      "Durable denim shorts for kids, perfect for playtime or outings.",
    price: 120,
    image: [p_img24],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p034",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 150,
    image: [p_img25],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p035",
    name: "Men Round Neck Cotton Top",
    description:
      "A comfortable cotton top for casual or home wear. Lightweight and breathable.",
    price: 200,
    image: [p_img31],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p036",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect as an undershirt or outer garment.",
    price: 100,
    image: [p_img34],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p037",
    name: "Women Denim Jacket",
    description:
      "A classic denim jacket for women, perfect for layering over casual outfits.",
    price: 500,
    image: [p_img35],
    category: "Women",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p038",
    name: "Men Leather Jacket",
    description:
      "Premium leather jacket with a sleek design. Great for cool weather.",
    price: 800,
    image: [p_img40],
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["L", "XL", "XXL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p039",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A comfortable cotton top for casual or home wear. Lightweight and breathable.",
    price: 200,
    image: [p_img43],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p040",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "Stylish and comfortable sneakers for casual wear. Suitable for daily use.",
    price: 280,
    image: [p_img44],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p041",
    name: "Men Leather Jacket",
    description:
      "Premium leather jacket with a sleek design. Great for cool weather.",
    price: 800,
    image: [p_img45],
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["L", "XL", "XXL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p042",
    name: "Men Leather Jacket",
    description:
      "Premium leather jacket with a sleek design. Great for cool weather.",
    price: 800,
    image: [p_img46],
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["L", "XL", "XXL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p043",
    name: "Men Denim Jacket",
    description:
      "A classic denim jacket for women, perfect for layering over casual outfits.",
    price: 500,
    image: [p_img48],
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "p044",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 70,
    image: [p_img49],
    category: "Bottomwear",
    subCategory: "Kids",
    sizes: ["S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "p045",
    name: "Men Denim Jacket",
    description:
      "A classic denim jacket for women, perfect for layering over casual outfits.",
    price: 500,
    image: [p_img50],
    category: "Men",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
];
