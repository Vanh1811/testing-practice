export default function caesarCipher (string, shift){
    function shiftChar(char, shift){
        if (char.match(/[a-z]/i)) {
            const charCodeStart = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0)
            const shiftedCharCode = ((char.charCodeAt(0) + shift - charCodeStart) % 26 + 26) % 26 + charCodeStart
            return String.fromCharCode(shiftedCharCode)
        }
        return char
    }

    const result = string.split('').map(char => shiftChar(char, shift)).join('')
    return result
}