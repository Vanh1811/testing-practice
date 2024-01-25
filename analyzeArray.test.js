import analyzeArray from "./analyzeArray";

describe('Analyze Array', () => {
    test('Analyze Array with one element', () => {
        expect(analyzeArray([4])).toEqual({
            average: 4,
            min: 4,
            max: 4,
            length: 1,
        })
    })

    test('Analyze Array with four element', () => {
        expect(analyzeArray([4, 2, 6, 0])).toEqual({
            average: 3,
            min: 0,
            max: 6,
            length: 4,
        })
    })

    test('Analyze Array with six element', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        })
    })
})