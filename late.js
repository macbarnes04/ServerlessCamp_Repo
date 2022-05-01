// start coding your function here!
function running_late(date) {
    if (hours >= 22 ){
        response = "It is late!"
    } else {
        response = "It is still early!"
    }
    return response
} 

exports.running_late = running_late;