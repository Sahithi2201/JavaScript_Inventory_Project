
 // Assignment 6: Arrays, Objects, and Core Methods

const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// 1. Use forEach() to display all products
console.log("-- All Products --");

products.forEach(product => {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// 2. Use filter() to find products priced under $50
const affordableProducts = products.filter(
    product => product.price < 50
);

console.log("-- Filtered Products (Price < $50) --");
console.log(affordableProducts);

// 3. Use map() to create formatted product strings
const productReport = products.map(
    product => `${product.name.toUpperCase()} costs $${product.price}`
);

console.log("-- Mapped Product Tags (map) --");
console.log(productReport);