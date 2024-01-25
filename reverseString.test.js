import reverseString from "./reverseString";

describe('Reverse String', () => {
    test('hello becomes olleh', () => {
        expect(reverseString('hello')).toBe('olleh')
    })

    test('morning becomes gninrom', () => {
        expect(reverseString('morning')).toBe('gninrom')
    })
})