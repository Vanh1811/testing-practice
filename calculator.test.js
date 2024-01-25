import Calculator from "./calculator";

let calculator = new Calculator()

describe('calculator', () => {
    test ('1 + 2 = 3', () => {
        expect(calculator.add(1, 2)).toBe(3)
    })

    test ('1 - 2 = -1', () => {
        expect(calculator.subtract(1, 2)).toBe(-1)
    })

    test('3 / 1 = 3', () => {
        expect(calculator.divide(3, 1)).toBe(3)
    })

    test ('1 * 2 = 2', () => {
        expect(calculator.multiply(1, 2)).toBe(2)
    })
})