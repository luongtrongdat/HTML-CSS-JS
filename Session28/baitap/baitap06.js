function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        let itemTotal = item.price * item.quantity;
        return total + itemTotal;
    }, 0);
}

const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

console.log(calculateTotal(cart));