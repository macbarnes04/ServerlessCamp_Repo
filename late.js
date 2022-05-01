// start coding your function here!
date = new Date().getHours
function running_late(date) {
    if (date <= 22 ){
        return "It is late!"
    } else {
        return "It is still early!"
    } 
} 
running_late(date);
exports.running_late = running_late;