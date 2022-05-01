// start coding your function here!
function running_late(date) {
    date = new Date(date)
    if (date.getHours() <= 22 ){
        return "It is still early!";
    } 
    else {
        return "It is late!";
    } 
}
exports.running_late = running_late;

console.log(running_late('December 17, 1995 03:24:00'))  
