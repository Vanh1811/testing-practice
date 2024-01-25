export default function analyzeArray (array){
    const length = array.length

    const average = array.reduce((prev, current) => {
        return prev + current
    }) / length

    const min = array.reduce((prev, current) => {
        return prev < current ? prev : current
    })

    const max = array.reduce((prev, current) => {
        return prev > current ? prev : current
    })

    return {
        average,
        min,
        max,
        length,
    }
}