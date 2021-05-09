let factorial = num => {
    if (num == 1) return 1  // base casse. this is very very important otherwise it will go to stack over flow
    return num * factorial(num-1)
}
console.log(factorial(5));