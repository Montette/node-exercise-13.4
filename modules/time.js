function setTime(current) {

    if (isNaN(current)) {
        current = parseInt(current.split(" ")[0]);
    }
    var seconds = current;
    var days = Math.floor(seconds / (24 * 60 * 60));
    seconds -= days * (24 * 60 * 60);
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);
    var minutes = Math.floor(seconds / (60));
    seconds = Math.floor(seconds - minutes * (60));
    if (days > 0) {
        console.log(days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ")
        } else if (hours > 0) {
        console.log(hours + " hours " + minutes + " minutes " + seconds + " seconds ")
    } else if (minutes > 0) {
        console.log(minutes + " minutes " + seconds + " seconds ")
    } else {
        console.log(seconds + " seconds ")
    }
}


exports.print = setTime;
