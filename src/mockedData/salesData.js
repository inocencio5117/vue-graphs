export default {
  categories: [
    {
      name: "Electronics",
      brands: [
        {
          name: "Samsung",
          models: [
            { name: "Galaxy S21", sales: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], price: 1000 },
            { name: "Galaxy Note 20", sales: [40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50], price: 800 },
            { name: "Galaxy A52", sales: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140], price: 600 },
            { name: "Galaxy Z Flip 3", sales: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130], price: 1200 }
          ]
        },
        {
          name: "Apple",
          models: [
            { name: "iPhone 12", sales: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180], price: 1200 },
            { name: "iPhone 11", sales: [60, 70, 80, 90, 100, 110, 120, 110, 100, 90, 80, 70], price: 1000 },
            { name: "iPhone SE", sales: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], price: 700 },
            { name: "iPhone 13", sales: [80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190], price: 1400 }
          ]
        },
        {
          name: "Google",
          models: [
            { name: "Pixel 5", sales: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], price: 900 },
            { name: "Pixel 4a", sales: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140], price: 700 },
            { name: "Pixel 6", sales: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170], price: 1100 },
            { name: "Pixel 6 Pro", sales: [70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180], price: 1300 }
          ]
        }
      ]
    },
    {
      name: "Clothing",
      brands: [
        {
          name: "Nike",
          models: [
            { name: "T-shirt", sales: [50, 110, 120, 130, 10, 150, 165, 170, 180, 190, 200, 210], price: 50 },
            { name: "Sneakers", sales: [80, 40, 100, 110, 120, 130, 140, 130, 120, 110, 10, 90], price: 120 },
            { name: "Shorts", sales: [60, 70, 180, 90, 190, 110, 20, 130, 40, 150, 160, 70], price: 40 },
            { name: "Hoodie", sales: [70, 80, 90, 100, 110, 120, 130, 25, 170, 100, 90, 80], price: 100 }
          ]
        },
        {
          name: "Adidas",
          models: [
            { name: "Pants", sales: [90, 100, 110, 120, 130, 140, 150, 140, 130, 120, 110, 100], price: 80 },
            { name: "Hoodie", sales: [70, 80, 90, 100, 110, 120, 130, 120, 110, 100, 90, 80], price: 100 },
            { name: "Sweatshirt", sales: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], price: 90 },
            { name: "Sneakers", sales: [80, 90, 100, 110, 120, 130, 140, 130, 120, 110, 100, 90], price: 120 }
          ]
        },
        {
          name: "Puma",
          models: [
            { name: "Jacket", sales: [80, 90, 100, 110, 120, 130, 140, 130, 120, 110, 100, 90], price: 110 },
            { name: "Socks", sales: [70, 80, 90, 100, 110, 120, 130, 120, 110, 100, 90, 80], price: 10 },
            { name: "Shorts", sales: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170], price: 40 },
            { name: "T-shirt", sales: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210], price: 50 }
          ]
        }
      ]
    },
    {
      name: "Books",
      brands: [
        {
          name: "Random House",
          models: [
            { name: "Book A", sales: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], price: 15 },
            { name: "Book B", sales: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], price: 20 },
            { name: "Book C", sales: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96], price: 18 },
            { name: "Book D", sales: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144], price: 22 }
          ]
        },
        {
          name: "Penguin",
          models: [
            { name: "Book X", sales: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125], price: 18 },
            { name: "Book Y", sales: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96], price: 22 },
            { name: "Book Z", sales: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240], price: 25 },
            { name: "Book W", sales: [18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216], price: 20 }
          ]
        },
        // Add more book brands as needed...
      ]
    },
    {
      name: "Beauty",
      brands: [
        {
          name: "L'Oreal",
          models: [
            { name: "Lipstick", sales: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], price: 25 },
            { name: "Mascara", sales: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140], price: 18 },
            { name: "Eyeshadow", sales: [25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135], price: 20 },
            { name: "Foundation", sales: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], price: 30 }
          ]
        },
        {
          name: "Maybelline",
          models: [
            { name: "Lip Balm", sales: [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180], price: 10 },
            { name: "Blush", sales: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240], price: 15 },
            { name: "Concealer", sales: [35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200], price: 18 },
            { name: "Highlighter", sales: [45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210], price: 22 }
          ]
        },
        // Add more beauty brands as needed...
      ]
    }
  ]
};
