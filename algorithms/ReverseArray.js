function reverseArray(a) {
    let Array = []
    let Items = a.length
    
    for (let i = Items-1; i >= 0; i--) {
        Array.push(a[i])
        
    }    
    return Array.slice('')
}

let array = [1,2,3,4,5]

console.log(reverseArray(array))
