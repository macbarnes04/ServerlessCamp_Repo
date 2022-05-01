// start coding your function here!
function running_late(date) {
    if (date.getHours() <= 22 ){
        return "It is still early!";
    } 
    else {
        return "It is late!";
    } 
} 

console.log(running_late(new Date()));
