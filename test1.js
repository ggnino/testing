class ShoppingItem {
    constructor(item, cost) {
        this.name = item;
        this.price = cost;
    }
}

const item1 = new ShoppingItem('Dragon Food', 8);
const item2 = new ShoppingItem('Dragon cage(small)', 800);
const item3 = new ShoppingItem('Dragon chew toy', 40);
const item4 = new ShoppingItem('Dragon collar', 20);

const shoppingCart = [item1, item2];
const shoppingCart2 = [item3, item4];

const customerOrder = { items: shoppingCart };
const customerOrder2 = { items: shoppingCart2 };

const customerTotal = order => {
    let total = 0;
    if (order.items) {

        total = order.items.reduce((previousItem, currentItem) => previousItem + currentItem.price, total);
    }
    return total;
}

if (customerTotal(customerOrder) !== 808) { throw new Error("Test Failed! expected value of 808. Value is " + customerTotal(customerOrder)) } else console.log("Test 1 passed!")

if (customerTotal(customerOrder2) !== 60) { throw new Error("Test Failed! expected value of 60. Value is " + customerTotal(customerOrder2)) } else console.log("Test 2 passed!")