// start coding your function here!
function running_late(date) {
    if (date.getHours() <= 22 ){
        return "It is still early!";
    } 
    else {
        return "It is late!";
    } 
} 
module.exports = running_late;

