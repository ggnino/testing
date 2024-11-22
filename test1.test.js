
const { customerTotal, customerOrder, customerOrder2 } = require("./orderTotal")

it('works', () => { })

if (customerTotal(customerOrder) !== 808) { throw new Error("Test Failed! expected value of 808. Value is " + customerTotal(customerOrder)) }

if (customerTotal(customerOrder2) !== 60) { throw new Error("Test Failed! expected value of 60. Value is " + customerTotal(customerOrder2)) }