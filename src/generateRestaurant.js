const fs = require("fs");

const cuisineList = [
  "American",
  "BBQ",
  "Breakfast",
  "Burgers",
  "Cafe",
  "Chinese",
  "Desserts",
  "French",
  "Greek",
  "Healthy",
  "Indian",
  "Italian",
  "Japanese",
  "Mexican",
  "Noodles",
  "Organic",
  "Pasta",
  "Pizza",
  "Salads",
  "Seafood",
  "Spanish",
  "Steak",
  "Sushi",
  "Tacos",
  "Tapas",
  "Vegan",
];

const firstNames = [
  "John",
  "Jane",
  "Michael",
  "Emily",
  "Chris",
  "Katie",
  "David",
  "Sarah",
  "Alex",
  "Lauren",
];
const lastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Williams",
  "Jones",
  "Miller",
  "Davis",
  "Garcia",
  "Martinez",
  "Wilson",
];
const restaurantPrefixes = [
  "Golden",
  "Happy",
  "Urban",
  "Green",
  "Red",
  "Royal",
  "Spicy",
  "Blue",
  "Elegant",
  "Sunny",
];
const restaurantSuffixes = [
  "Grill",
  "Bistro",
  "Kitchen",
  "Café",
  "Diner",
  "Restaurant",
  "House",
  "Place",
  "Spot",
  "Corner",
];
const menuItems = {
  American: ["Burger", "Hotdog", "Fries", "BBQ Ribs", "Steak", "Apple Pie"],
  BBQ: [
    "Smoked Brisket",
    "Pulled Pork",
    "BBQ Chicken",
    "Ribs",
    "Cornbread",
    "Coleslaw",
  ],
  Breakfast: [
    "Pancakes",
    "Waffles",
    "Omelette",
    "French Toast",
    "Bacon",
    "Hash Browns",
  ],
  Burgers: [
    "Classic Burger",
    "Cheese Burger",
    "Veggie Burger",
    "Bacon Burger",
    "Double Burger",
  ],
  Cafe: ["Latte", "Cappuccino", "Muffin", "Croissant", "Sandwich", "Bagel"],
  Chinese: [
    "Kung Pao Chicken",
    "Sweet and Sour Pork",
    "Spring Rolls",
    "Dumplings",
    "Fried Rice",
  ],
  Desserts: [
    "Chocolate Cake",
    "Cheesecake",
    "Ice Cream",
    "Brownies",
    "Fruit Tart",
    "Pudding",
  ],
  French: [
    "Croissant",
    "Baguette",
    "Crepes",
    "Quiche",
    "Ratatouille",
    "Bouillabaisse",
  ],
  Greek: [
    "Gyro",
    "Souvlaki",
    "Moussaka",
    "Greek Salad",
    "Spanakopita",
    "Baklava",
  ],
  Healthy: [
    "Salad Bowl",
    "Grilled Chicken",
    "Smoothie",
    "Quinoa Salad",
    "Vegetable Wrap",
  ],
  Indian: [
    "Butter Chicken",
    "Tandoori Chicken",
    "Biryani",
    "Paneer Tikka",
    "Naan",
  ],
  Italian: [
    "Pasta Carbonara",
    "Margherita Pizza",
    "Lasagna",
    "Risotto",
    "Tiramisu",
  ],
  Japanese: ["Sushi", "Ramen", "Tempura", "Sashimi", "Miso Soup"],
  Mexican: ["Tacos", "Burrito", "Quesadilla", "Nachos", "Enchiladas"],
  Noodles: ["Spaghetti", "Ramen", "Lo Mein", "Pad Thai", "Udon"],
  Organic: [
    "Organic Salad",
    "Organic Smoothie",
    "Grilled Vegetables",
    "Organic Wrap",
  ],
  Pasta: [
    "Spaghetti Bolognese",
    "Fettuccine Alfredo",
    "Penne Arrabbiata",
    "Pesto Pasta",
  ],
  Pizza: ["Margherita", "Pepperoni", "Four Cheese", "BBQ Chicken", "Hawaiian"],
  Salads: [
    "Caesar Salad",
    "Greek Salad",
    "Cobb Salad",
    "Caprese Salad",
    "Quinoa Salad",
  ],
  Seafood: [
    "Grilled Salmon",
    "Shrimp Cocktail",
    "Lobster Roll",
    "Fish Tacos",
    "Seafood Paella",
  ],
  Spanish: ["Paella", "Tapas", "Churros", "Gazpacho", "Tortilla Española"],
  Steak: [
    "Ribeye Steak",
    "T-bone Steak",
    "Sirloin Steak",
    "Steak Frites",
    "Filet Mignon",
  ],
  Sushi: [
    "California Roll",
    "Spicy Tuna Roll",
    "Salmon Nigiri",
    "Dragon Roll",
    "Eel Roll",
  ],
  Tacos: [
    "Beef Taco",
    "Chicken Taco",
    "Fish Taco",
    "Veggie Taco",
    "Carnitas Taco",
  ],
  Tapas: [
    "Patatas Bravas",
    "Jamón Ibérico",
    "Croquetas",
    "Gambas al Ajillo",
    "Tortilla Española",
  ],
  Vegan: [
    "Vegan Burger",
    "Vegan Salad",
    "Vegan Wrap",
    "Grilled Tofu",
    "Vegan Smoothie",
  ],
};

// List of US cities
const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

function generateUserName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName}${lastName}`;
}

function generateRestaurantName() {
  const prefix =
    restaurantPrefixes[Math.floor(Math.random() * restaurantPrefixes.length)];
  const suffix =
    restaurantSuffixes[Math.floor(Math.random() * restaurantSuffixes.length)];
  return `${prefix} ${suffix}`;
}

function generateMenuItems(cuisine) {
  const items = [];
  const cuisineItems = menuItems[cuisine];
  const itemCount = Math.floor(Math.random() * 5) + 3; // Between 3 and 7 items

  for (let i = 0; i < itemCount; i++) {
    const name = cuisineItems[Math.floor(Math.random() * cuisineItems.length)];
    const price = Math.floor(Math.random() * 2000) + 500; // Prices between 500 and 2500
    items.push({
      name,
      price,
      _id: {
        $oid: Math.random().toString(16).slice(2) + Date.now().toString(16),
      },
    });
  }

  return items;
}

function generateRestaurant() {
  const cuisines = [];
  const cuisineCount = Math.floor(Math.random() * 4) + 2; // Between 2 and 5 cuisines

  for (let i = 0; i < cuisineCount; i++) {
    const randomCuisine =
      cuisineList[Math.floor(Math.random() * cuisineList.length)];
    if (!cuisines.includes(randomCuisine)) {
      cuisines.push(randomCuisine);
    }
  }

  const city = cities[Math.floor(Math.random() * cities.length)];

  return {
    user: generateUserName(),
    restaurantName: generateRestaurantName(),
    city,
    country: "US",
    deliveryPrice: Math.floor(Math.random() * 500) + 100, // Between 100 and 600
    estimatedDeliveryTime: Math.floor(Math.random() * 60) + 10, // Between 10 and 70 minutes
    cuisines,
    menuItems: cuisines.flatMap((cuisine) => generateMenuItems(cuisine)),
    imageUrl: "https://placehold.co/1600x400",
    lastUpdated: new Date().toISOString(),
  };
}

function generateRestaurantsData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(generateRestaurant());
  }
  return data;
}

const restaurantData = generateRestaurantsData(10000);
fs.writeFileSync("restaurants.json", JSON.stringify(restaurantData, null, 2));

console.log("Generated restaurants.json with random data.");
