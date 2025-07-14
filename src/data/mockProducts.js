const mockProducts = [
  {
    _id: "1",
    name: "Powerful Laptop Pro",
    description: "High-performance laptop with the latest processor and graphics card, perfect for professionals and gamers alike.",
    price: 1499.99,
    category: "Laptops",
    image: "https://picsum.photos/seed/laptop1/800/800",
    isFeatured: true
  },
  {
    _id: "2",
    name: "Lightweight Laptop Air",
    description: "Ultra-portable laptop with all-day battery life and stunning Retina display.",
    price: 999.99,
    category: "Laptops",
    image: "https://picsum.photos/seed/laptop2/800/800",
    isFeatured: false
  },
  {
    _id: "3",
    name: "Latest iPad Mini",
    description: "Compact tablet with powerful performance and stunning display for work and play.",
    price: 599.99,
    category: "iPads",
    image: "https://picsum.photos/seed/ipad1/800/800",
    isFeatured: true
  },
  {
    _id: "4",
    name: "iPad Pro 12.9",
    description: "Professional-grade tablet with M1 chip and Liquid Retina XDR display.",
    price: 1099.99,
    category: "iPads",
    image: "https://picsum.photos/seed/ipad2/800/800",
    isFeatured: false
  },
  {
    _id: "5",
    name: "Smartphone Ultra",
    description: "Flagship smartphone with professional camera system and all-day battery life.",
    price: 899.99,
    category: "Phones",
    image: "https://picsum.photos/seed/phone1/800/800",
    isFeatured: true
  },
  {
    _id: "6",
    name: "Smartwatch Series 7",
    description: "Advanced smartwatch with health monitoring and always-on Retina display.",
    price: 399.99,
    category: "Watches",
    image: "https://picsum.photos/seed/watch1/800/800",
    isFeatured: false
  },
  {
    _id: "7",
    name: "Wireless Earbuds Pro",
    description: "Premium wireless earbuds with active noise cancellation and spatial audio.",
    price: 199.99,
    category: "Audio",
    image: "https://picsum.photos/seed/earbuds1/800/800",
    isFeatured: true
  },
  {
    _id: "8",
    name: "Noise Cancelling Headphones",
    description: "Over-ear headphones with industry-leading active noise cancellation.",
    price: 349.99,
    category: "Audio",
    image: "https://picsum.photos/seed/headphones1/800/800",
    isFeatured: false
  },
  {
    _id: "9",
    name: "4K Smart TV 55\"",
    description: "Stunning 4K HDR smart TV with built-in streaming and voice control.",
    price: 799.99,
    category: "TVs",
    image: "https://picsum.photos/seed/tv1/800/800",
    isFeatured: true
  },
  {
    _id: "10",
    name: "Gaming Console",
    description: "Next-gen gaming console with ultra-high-speed SSD and ray tracing.",
    price: 499.99,
    category: "Gaming",
    image: "https://picsum.photos/seed/console1/800/800",
    isFeatured: false
  },
  {
    _id: "11",
    name: "Wireless Keyboard & Mouse",
    description: "Ergonomic wireless keyboard and mouse combo for comfortable typing.",
    price: 129.99,
    category: "Accessories",
    image: "https://picsum.photos/seed/keyboard1/800/800",
    isFeatured: false
  },
  {
    _id: "12",
    name: "External SSD 1TB",
    description: "Lightning-fast external SSD with read/write speeds up to 2000MB/s.",
    price: 199.99,
    category: "Storage",
    image: "https://picsum.photos/seed/ssd1/800/800",
    isFeatured: true
  },
  {
    _id: "13",
    name: "Foldable Smartphone",
    description: "Revolutionary foldable smartphone with flexible OLED display and long-lasting battery.",
    price: 1099.99,
    category: "Phones",
    image: "https://picsum.photos/seed/phone2/800/800",
    isFeatured: true
  },
  {
    _id: "14",
    name: "Classic Watch Leather",
    description: "Elegant leather-strap watch with precision movement and water resistance.",
    price: 249.99,
    category: "Watches",
    image: "https://picsum.photos/seed/watch2/800/800",
    isFeatured: false
  },
  {
    _id: "15",
    name: "Smart Home Security Camera",
    description: "High-definition security camera with night vision and two-way audio.",
    price: 199.99,
    category: "Smart Home",
    image: "https://picsum.photos/seed/security1/800/800",
    isFeatured: true
  },
  {
    _id: "16",
    name: "Wireless Over-Ear Headphones",
    description: "Premium over-ear headphones with crystal-clear sound and 30-hour battery life.",
    price: 299.99,
    category: "Audio",
    image: "https://picsum.photos/seed/headphones3/800/800",
    isFeatured: false
  },
  {
    _id: "17",
    name: "Smart Speaker with Alexa",
    description: "Voice-controlled smart speaker with premium sound quality and smart home control.",
    price: 129.99,
    category: "Smart Home",
    image: "https://picsum.photos/seed/speaker2/800/800",
    isFeatured: false
  },
  {
    _id: "18",
    name: "USB-C Hub Adapter",
    description: "Multi-port USB-C hub with 4K HDMI, USB-A, and SD card reader.",
    price: 59.99,
    category: "Accessories",
    image: "https://picsum.photos/seed/adapter1/800/800",
    isFeatured: false
  },
  {
    _id: "19",
    name: "Fitness Tracker Band",
    description: "Advanced fitness tracker with heart rate monitoring and sleep analysis.",
    price: 99.99,
    category: "Wearables",
    image: "https://picsum.photos/seed/tracker1/800/800",
    isFeatured: true
  },
  {
    _id: "20",
    name: "Smartphone Case Pro",
    description: "Dual-layer protective case with shock absorption and raised bezels.",
    price: 29.99,
    category: "Accessories",
    image: "https://picsum.photos/seed/case1/800/800",
    isFeatured: false
  }
]

export default mockProducts
