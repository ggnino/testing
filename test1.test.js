
import { customerTotal, customerOrder, customerOrder2 } from "./orderTotal";

test('Order Total', () => {
    expect(customerTotal(customerOrder)).toBe(808);
})

test('Order Total 2', () => {
    expect(customerTotal(customerOrder2)).toBe(60)
})

