// 1. Initial product inventory
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// 2. Assign category badges using if...else and switch
function getCategory(price) {
    let category;

    if (price < 50) {
        category = "Budget";
    } else if (price < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

console.log("--- Initializing Inventory System ---");

// 3. Prompt for a new product
const productName = prompt("Enter the new product name:");
const priceInput = prompt("Enter the product price:");
const productPrice = Number(priceInput);

// 4. Validate input and add product
if (
    productName !== null &&
    productName.trim() !== "" &&
    priceInput !== null &&
    priceInput.trim() !== "" &&
    Number.isFinite(productPrice) &&
    productPrice > 0
) {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log(
        `Added product: ${productName.trim()} at $${productPrice}`
    );
} else {
    console.log("Invalid product name or price. Product not added.");
}

// 5. Display inventory using forEach()
console.log("--- Processing Inventory Roster (forEach) ---");

inventory.forEach(product => {
    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${getCategory(product.price)}`
    );
});

// 6. Search inventory using loops, continue, and break
const searchName = prompt("Enter a product name to search:");

if (searchName === null || searchName.trim() === "") {
    console.log("Search cancelled or product name is missing.");
} else {
    let found = false;

    for (const product of inventory) {
        if (!product.name) {
            continue;
        }

        if (
            product.name.toLowerCase() ===
            searchName.trim().toLowerCase()
        ) {
            console.log(
                `Product found: ${product.name} - $${product.price}`
            );
            found = true;
            break;
        }
    }

    if (!found) {
        console.log(
            `Product "${searchName.trim()}" was not found.`
        );
    }
}

// 7. Calculate total inventory value using a regular function
function calculateInventoryTotal(products) {
    let total = 0;

    for (const product of products) {
        total += product.price;
    }

    return total;
}

// 8. Calculate tax using an arrow function and default parameter
const calculateTax = (amount, taxRate = 10) => {
    const tax = amount * (taxRate / 100);
    return tax;
};

// 9. Calculate discount using an arrow function and default parameter
const calculateDiscount = (amount, discountRate = 5) => {
    const discount = amount * (discountRate / 100);
    return discount;
};

// 10. Display financial analytics and demonstrate local scope
function displayInventoryStatistics() {
    const total = calculateInventoryTotal(inventory);
    const tax = calculateTax(total);
    const discount = calculateDiscount(total);

    console.log("--- Financial Analytics ---");
    console.log(`Total Inventory Value: $${total}`);
    console.log(`Tax (10%): $${tax}`);
    console.log(`Discount (5%): $${discount}`);
    console.log(`Total After Tax: $${total + tax}`);
    console.log(`Total After Discount: $${total - discount}`);
}

displayInventoryStatistics();

// 11. Filter affordable products under $200
const affordableProducts = inventory.filter(
    product => product.price < 200
);

console.log("--- Filtered Affordable Items (Under $200) ---");
console.log(
    JSON.stringify(
        affordableProducts.map(product => product.name)
    )
);

// 12. Create a formatted inventory report using map()
const inventoryReport = inventory.map(
    product => `${product.name.toUpperCase()}: $${product.price}`
);

console.log("--- Formatted Report List ---");
console.log(inventoryReport);

// 13. Demonstrate secure local scope
function demonstrateLocalScope() {
    const localMessage = "This variable is local to this function.";
    console.log(localMessage);
}

demonstrateLocalScope();