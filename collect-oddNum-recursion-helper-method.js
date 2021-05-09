let collectOdd = arr => {
    let result = []
    function helper(input) {
        if (input.length == 0) return
        if (input[0] % 2 != 0)
            result.push(input[0])
        helper(input.slice(1))
    }
    helper(arr)
    return result
}

console.log(collectOdd([1, 3, 4, 5, 6, 7, 3, 5, 8]))


//alternate method which is pure recusrion

let collectOdd1 = arr => {
    let result = []
    if (arr.length == 0) return result
    if (arr[0] % 2 != 0)
        result.push(arr[0])
    result = result.concat(collectOdd1(arr.slice(1)))
    return result
}

console.log(collectOdd1([1, 3, 4, 5, 6, 7, 3, 5, 8]))

