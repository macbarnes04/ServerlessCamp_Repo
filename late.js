// start coding your function here!
date = new Date().getHours
date
function running_late(date) {
    if (date >= 22 ){
        return "It is late!"
    } 
    if (date < 22) {
        return "It is still early!"
    } 
} 

exports.running_late = running_late;