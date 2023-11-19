/*
Calculate the final order price
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item.
*/

/* rs need to cal -> totalCost of item in custCart  
cstCart[{unitPrice ,quantity}]  
Implemnt ->  totalCost of items 
unit */

const calculateTotalCost = (cart) => {
    // Ensure the cart is not empty
    if (cart.length === 0) {
        return 0; // Return 0 if the cart is empty
    }

    // Calculate the total cost using the reduce function
    const totalCost = cart.reduce((accumulator, currentItem) => {
        // Calculate the cost for each item and add it to the accumulator
        return accumulator + currentItem.unitPrice * currentItem.quantity;
    }, 0); // The initial value of the accumulator is set to 0

    return totalCost;
};

// Example usage:
const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 8, quantity: 1 }
];

const totalCost = calculateTotalCost(customerCart);

console.log("Total Cost of Items: $" + totalCost);