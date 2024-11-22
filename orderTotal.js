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

export const customerOrder = { items: shoppingCart };
export const customerOrder2 = { items: shoppingCart2 };

export const customerTotal = order => {
    let total = 0;
    if (order.items) {

        total = order.items.reduce((previousItem, currentItem) => previousItem + currentItem.price, total);
    }
    return total;
}

