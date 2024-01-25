export default function capitalize (string){
    let firstLetter= string.charAt(0)
    firstLetter = firstLetter.toUpperCase()
    string = string.slice(1)
    return firstLetter + string
}

