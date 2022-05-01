// start coding your function here!
function find_max(arr) {
    var biggest = arr[0]
    for(var i = 1; i < arr.length; i++) {
        biggest = biggest > arr[i] ? biggest : arr[i]  
      }
    return biggest
} 

console.log(find_max([1, 78, 12, 2, 5, 10]))
exports.find_max = find_max
