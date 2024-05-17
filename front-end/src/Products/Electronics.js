const Electronics = [
  // Product 1
  {
    name: "Logitech MX Master 3",
    description: "Advanced Wireless Mouse for Mac - Ultrafast Scrolling, Ergonomic Design, 4000 DPI, Customizable Buttons, USB-C, Bluetooth - Grey",
    category: "Electronics",
    images: [
      "https://m.media-amazon.com/images/I/71sWjgq1SuL._AC_SX425_.jpg",
      "https://m.media-amazon.com/images/I/71gR9xxvjBL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71U4QCfETEL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71FQckvJRqL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/7192+LwkZ5L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81ocTbLt8aL._AC_SX466_.jpg"
    ],
    brand: "Logitech",
    rating: 4.8,
    discount: 10,
    numberOfReviews: 0,
    color: ["Gray", "Black"],
    variants: [
      {
        size: "Standard",
        price: 8999.99, // pesos
        stock: 100,
      },
      {
        size: "Large",
        price: 9999.99, // pesos
        stock: 50,
      },
      {
        size: "Small",
        price: 7999.99, // pesos
        stock: 150,
      }
    ],
  },
  // Product 2
  {
    name: "Corsair K95 RGB Platinum",
    description: "Mechanical Gaming Keyboard - USB Passthrough and Media Controls - Tactile and Clicky - Cherry MX Blue - RGB LED Backlit",
    category: "Electronics",
    images: [
      "https://m.media-amazon.com/images/I/81o8Tzb64SL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91VXuDPOQNL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81L255of8TL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91ECMypvoDL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91E+oIw39LL._AC_SX679_.jpg"
    ],
    brand: "Corsair",
    rating: 4.7,
    discount: 15,
    numberOfReviews: 0,
    color: ["Black", "Gunmetal", "Silver"],
    variants: [
      {
        size: "Standard",
        price: 12999.99, // pesos
        stock: 50,
      },
      {
        size: "Full Size",
        price: 13999.99, // pesos
        stock: 30,
      }
    ],
  },
  // Product 3
  {
    name: "HyperX Cloud II",
    description: "Gaming Headset - 7.1 Surround Sound - Memory Foam Ear Pads - Durable Aluminum Frame - Detachable Microphone",
    category: "Electronics",
    images: [
      "https://m.media-amazon.com/images/I/71ybtvmLmDL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81mnL-yG0qL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81l4p+3ks8L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81Za8H-jXNL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71TAZzvh8YL._AC_SX466_.jpg"

    ],
    brand: "HyperX",
    rating: 4.6,
    discount: 20,
    numberOfReviews: 0,
    color: ["Red", "Black", "White"],
    variants: [
      {
        size: "Standard",
        price: 7999.99, // pesos
        stock: 80,
      },
      {
        size: "Large",
        price: 8999.99, // pesos
        stock: 60,
      },
      {
        size: "Small",
        price: 6999.99, // pesos
        stock: 100,
      }
    ],
  },
  // Product 4
  {
    name: "Razer DeathAdder V2",
    description: "Gaming Mouse - 20K DPI Optical Sensor - Chroma RGB Lighting - 8 Programmable Buttons - Mechanical Switches",
    category: "Electronics",
    images: [
        "https://m.media-amazon.com/images/I/51XO3LBZEJL._AC_SY679_.jpg",
        "https://m.media-amazon.com/images/I/71qUnllNCXL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/81lNctVFTDL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/71BBXw7X8pL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/61gqTEG1QdL._AC_SX466_.jpg",
    ],
    brand: "Razer",
    rating: 4.9,
    discount: 25,
    numberOfReviews: 0,
    color: ["Black", "White"],
    variants: [
      {
        size: "Standard",
        price: 4999.99, // pesos
        stock: 200,
      },
      {
        size: "Mini",
        price: 3999.99, // pesos
        stock: 150,
      }
    ],
  },
  // Product 5
  {
    name: "SteelSeries Arctis 7",
    description: "Wireless Gaming Headset - DTS Headphone:X v2.0 Surround - Steel-Reinforced Headband - ClearCast Microphone - 24-Hour Battery Life",
    category: "Electronics",
    images: [
     "https://m.media-amazon.com/images/I/71exY5PBroL._AC_SX466_.jpg",
     "https://m.media-amazon.com/images/I/81PRkEmbHNL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81g0J7G3ahL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/71bewiXXOFL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/71WJcQl06bL._AC_SX466_.jpg"

      

    ],
    brand: "SteelSeries",
    rating: 4.5,
    discount: 30,
    numberOfReviews: 0,
    color: ["Black", "White", "Blue"],
    variants: [
      {
        size: "Standard",
        price: 10999.99, // pesos
        stock: 70,
      },
      {
        size: "Pro",
        price: 12999.99, // pesos
        stock: 40,
      }
    ],
  },
  {
    name: "Asus ROG Strix Flare",
    description: "Mechanical Gaming Keyboard - Aura Sync RGB Lighting - Cherry MX Switches - Dedicated Media Controls",
    category: "Electronics",
    images: [
      "https://m.media-amazon.com/images/I/914fLOxM0hL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/91WIi5aTXnL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/91H1G+SYaTL._AC_SX466_.jpg ",
      "https://m.media-amazon.com/images/I/811WE4PawWL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/91iiqBTsuAL._AC_SX466_.jpg"
    ],
    brand: "Asus",
    rating: 4.7,
    discount: 20,
    numberOfReviews: 0,
    color: ["Black", "Red"],
    variants: [
      {
        size: "Standard",
        price: 9999.99, // pesos
        stock: 60,
      },
      {
        size: "Full Size",
        price: 10999.99, // pesos
        stock: 40,
      },
      {
        size: "Compact",
        price: 8999.99, // pesos
        stock: 80,
      }
    ],
  },
  // Product 7
  {
    name: "Sony WH-1000XM4",
    description: "Wireless Noise-Cancelling Over-Ear Headphones - 30 Hours Battery Life - Touch Sensor Controls - Built-in Mic for Phone Calls",
    category: "Electronics",
    images: [
      "https://m.media-amazon.com/images/I/51SKmu2G9FL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/61Q37LX6IyL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71N0XNBX1yL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71f-F7YtRcL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61lfTKfLawL._AC_SX466_.jpg"

    ],
    brand: "Sony",
    rating: 4.8,
    discount: 10,
    numberOfReviews: 0,
    color: ["Black", "Silver", "Blue"],
    variants: [
      {
        size: "Standard",
        price: 14999.99, // pesos
        stock: 50,
      },
      {
        size: "Limited Edition",
        price: 16999.99, // pesos
        stock: 30,
      }
    ],
  },
  // Product 8
  {
    name: "Logitech G502 Hero",
    description: "High Performance Gaming Mouse - 16,000 DPI - Adjustable Weights - RGB Lighting - 11 Programmable Buttons",
    category: "Electronics",
    images: [
      "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71BYvNUoumL._AC_SX466_.jpg" ,
      "https://m.media-amazon.com/images/I/71sgEIlSvfL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61Z49vScNSL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61vThyaOrHL._AC_SX466_.jpg"
    ],
    brand: "Logitech",
    rating: 4.7,
    discount: 15,
    numberOfReviews: 0,
    color: ["Black", "White"],
    variants: [
      {
        size: "Standard",
        price: 6999.99, // pesos
        stock: 150,
      },
      {
        size: "Special Edition",
        price: 7999.99, // pesos
        stock: 100,
      }
    ],
  },
  // Product 9
  {
    name: "Bose QuietComfort 35 II",
    description: "Wireless Bluetooth Headphones - Noise-Cancelling - Alexa Voice Control - Balanced Audio Performance",
    category: "Electronics",
    images: [
        "https://m.media-amazon.com/images/I/51QeS0jkx-L._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/61Vu4iPFvYL._AC_SX466_.jpg"  ,
        "https://m.media-amazon.com/images/I/71GwrH-pdbL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/61JY8Eci-LL._AC_SX466_.jpg",
        "https://m.media-amazon.com/images/I/61sRChZHrrL._AC_SX466_.jpg"
    ],
    brand: "Bose",
    rating: 4.6,
    discount: 20,
    numberOfReviews: 0,
    color: ["Black", "Silver", "Rose Gold"],
    variants: [
      {
        size: "Standard",
        price: 15999.99, // pesos
        stock: 80,
      },
      {
        size: "Limited Edition",
        price: 17999.99, // pesos
        stock: 50,
      }
    ],
  },
  // Product 10
  {
    name: "HyperX Alloy Elite 2",
    description: "Mechanical Gaming Keyboard - RGB LED Backlit - HyperX Red Switches - Dedicated Media Controls",
    category: "Electronics",
    images: [
      "https://m.media-amazon.com/images/I/71cQYybJC7L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71i21Vwrp1L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71+hr28liUL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61KSms5M+lL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51Al1rDT6FL._AC_SX466_.jpg"
    ],
    brand: "HyperX",
    rating: 4.7,
    discount: 15,
    numberOfReviews: 0,
    color: ["Black", "White", "Red"],
    variants: [
      {
        size: "Standard",
        price: 11999.99, // pesos
        stock: 60,
      },
      {
        size: "Full Size",
        price: 12999.99, // pesos
        stock: 40,
      },
      {
        size: "Compact",
        price: 10999.99, // pesos
        stock: 80,
      }
    ],
  }
];

export default Electronics;