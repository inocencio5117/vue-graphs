function generateRandomSales() {
  return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);
}

export default {
  categories: [
    {
      name: "Electronics",
      brands: [
        {
          name: "Samsung",
          models: [
            { name: "Galaxy S21", sales: generateRandomSales(), price: 1000 },
            { name: "Galaxy Note 20", sales: generateRandomSales(), price: 800 },
            { name: "Galaxy A52", sales: generateRandomSales(), price: 600 },
            { name: "Galaxy Z Flip 3", sales: generateRandomSales(), price: 1200 }
          ]
        },
        {
          name: "Apple",
          models: [
            { name: "iPhone 12", sales: generateRandomSales(), price: 1200 },
            { name: "iPhone 11", sales: generateRandomSales(), price: 1000 },
            { name: "iPhone SE", sales: generateRandomSales(), price: 700 },
            { name: "iPhone 13", sales: generateRandomSales(), price: 1400 }
          ]
        },
        {
          name: "Google",
          models: [
            { name: "Pixel 5", sales: generateRandomSales(), price: 900 },
            { name: "Pixel 4a", sales: generateRandomSales(), price: 700 },
            { name: "Pixel 6", sales: generateRandomSales(), price: 1100 },
            { name: "Pixel 6 Pro", sales: generateRandomSales(), price: 1300 }
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
            { name: "T-shirt", sales: generateRandomSales(), price: 50 },
            { name: "Sneakers", sales: generateRandomSales(), price: 120 },
            { name: "Shorts", sales: generateRandomSales(), price: 40 },
            { name: "Hoodie", sales: generateRandomSales(), price: 100 }
          ]
        },
        {
          name: "Adidas",
          models: [
            { name: "Pants", sales: generateRandomSales(), price: 80 },
            { name: "Hoodie", sales: generateRandomSales(), price: 100 },
            { name: "Sweatshirt", sales: generateRandomSales(), price: 90 },
            { name: "Sneakers", sales: generateRandomSales(), price: 120 }
          ]
        },
        {
          name: "Puma",
          models: [
            { name: "Jacket", sales: generateRandomSales(), price: 110 },
            { name: "Socks", sales: generateRandomSales(), price: 10 },
            { name: "Shorts", sales: generateRandomSales(), price: 40 },
            { name: "T-shirt", sales: generateRandomSales(), price: 50 }
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
            { name: "Book A", sales: generateRandomSales(), price: 15 },
            { name: "Book B", sales: generateRandomSales(), price: 20 },
            { name: "Book C", sales: generateRandomSales(), price: 18 },
            { name: "Book D", sales: generateRandomSales(), price: 22 }
          ]
        },
        {
          name: "Penguin",
          models: [
            { name: "Book X", sales: generateRandomSales(), price: 18 },
            { name: "Book Y", sales: generateRandomSales(), price: 22 },
            { name: "Book Z", sales: generateRandomSales(), price: 25 },
            { name: "Book W", sales: generateRandomSales(), price: 20 }
          ]
        },
                {
          name: "HarperCollins",
          models: [
            { name: "Book E", sales: generateRandomSales(), price: 25 },
            { name: "Book F", sales: generateRandomSales(), price: 30 },
            { name: "Book G", sales: generateRandomSales(), price: 20 },
            { name: "Book H", sales: generateRandomSales(), price: 18 }
          ]
        },
        {
          name: "Scholastic",
          models: [
            { name: "Book I", sales: generateRandomSales(), price: 20 },
            { name: "Book J", sales: generateRandomSales(), price: 22 },
            { name: "Book K", sales: generateRandomSales(), price: 18 },
            { name: "Book L", sales: generateRandomSales(), price: 25 }
          ]
        }
      ]
    },
    {
      name: "Beauty",
      brands: [
        {
          name: "L'Oreal",
          models: [
            { name: "Lipstick", sales: generateRandomSales(), price: 25 },
            { name: "Mascara", sales: generateRandomSales(), price: 18 },
            { name: "Eyeshadow", sales: generateRandomSales(), price: 20 },
            { name: "Foundation", sales: generateRandomSales(), price: 30 }
          ]
        },
        {
          name: "Maybelline",
          models: [
            { name: "Lip Balm", sales: generateRandomSales(), price: 10 },
            { name: "Blush", sales: generateRandomSales(), price: 15 },
            { name: "Concealer", sales: generateRandomSales(), price: 18 },
            { name: "Highlighter", sales: generateRandomSales(), price: 22 }
          ]
        },
                {
          name: "Revlon",
          models: [
            { name: "Lip Gloss", sales: generateRandomSales(), price: 20 },
            { name: "Eyeliner", sales: generateRandomSales(), price: 15 },
            { name: "Blush Palette", sales: generateRandomSales(), price: 25 },
            { name: "Nail Polish", sales: generateRandomSales(), price: 10 }
          ]
        },
        {
          name: "Covergirl",
          models: [
            { name: "Mascara", sales: generateRandomSales(), price: 18 },
            { name: "Foundation", sales: generateRandomSales(), price: 30 },
            { name: "Eyeshadow Palette", sales: generateRandomSales(), price: 22 },
            { name: "Lipstick", sales: generateRandomSales(), price: 20 }
          ]
        }
      ]
    }
  ]
};
