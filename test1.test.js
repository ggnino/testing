
const { customerTotal, customerOrder, customerOrder2 } = require("./orderTotal")

it('Order Total', () => {
    expect(customerTotal(customerOrder)).toBe(808);
})

it('Order Total 2', () => {
    expect(customerTotal(customerOrder2)).toBe(60)
})

