//  write a program to search the index of the element on an array

let linearSearch = (arr, element) => {
    let index = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element)
            return index=i
    }
    return index
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 4, 5, 6], 11))


// here complexcity is O(n) so binary search will reduce the complexcity
