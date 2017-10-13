
function getName() {
    var cards = [];
    for (var i = 1; i <= 3; i++){
        var fullPath = document.getElementById("card" + i).src;
        var index = fullPath.lastIndexOf("/");
        var filename = fullPath;
        if(index !== -1) {     
            filename = fullPath.substring(index+1,fullPath.length);
        }
        cards.push(filename)
    }
}

