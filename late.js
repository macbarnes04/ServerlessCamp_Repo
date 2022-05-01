// start coding your function here!
function running_late(date) {
    if (date.getHours <= 22 ){
        return "It is still early!"
    } 
    else {
        return "It is late!"
    } 
} 
running_late(new Date())
exports.running_late = running_late;