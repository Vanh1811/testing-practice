import caesarCipher from './caesarCipher.js';

describe("caesarCipher", () => {
    test ('vanh becomes uzmg with shift -1', () => {
        expect(caesarCipher('vanh', -1)).toBe('uzmg')
    })

    test(`yzZ becomes zaA with shift 1`, () => {
        expect(caesarCipher(`yzZ`, 1)).toBe(`zaA`);
    });

    test(`b3wbz becomes e3zec with shift 3`, () => {
        expect(caesarCipher(`b3wbz`, 3)).toBe(`e3zec`);
    });

    test(`Veobanh becomes Xgqdcpj with shift 2"`, () => {
        expect(caesarCipher(`Veobanh`, 2)).toBe(`Xgqdcpj`);
    });
});
