let searchString = (long, short) => {
    let count =0
    for (let i = 0; i < long.length; i++){
        for (let j = 0; j < short.length; j++) {
            if (short[j] != long[i + j])      //i+j because we dont need to compare j with i from from the begining
                break
            if (j == short.length-1)
                count++
        }
    }
    return count
}

console.log(searchString('silan','an'));