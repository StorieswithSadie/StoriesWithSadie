console.clear();


//ADD VIDEO IDS TO THE IDLIST ARRAY, IN THE FORMAT ,"[videoID]"
var idList = ["wDrrG3IukbM", "qANUKka9-UA", "ieGCkFmTQ80", "u-D-j94uipo", "n30i9lIrg9I"];

var videoPosters;
var node;
var address;

function imageGen() {
    //DYNAMICALLY CREATE TD ELEMENTS WITH IDLIST
    for (i = 0; i < idList.length; i++) {
        node = document.createElement("TD");
        node.id = idList[i];
        node.addEventListener("click", redirect);
        node.classList.add("videoPoster");
        document.getElementById("videoPosterContain").appendChild(node);
    }

    //ADD IMAGES AND TITLE TO EACH VIDEOPOSTER ELEMENT
    videoPosters = document.getElementsByClassName("videoPoster");
    for (i = 0; i < videoPosters.length; i++) {
        videoPosters[i].style.backgroundImage = "url('https://img.youtube.com/vi/" + videoPosters[i].id + "/sddefault.jpg')";
        videoPosters[i].innerHTML = "Video ID: " + videoPosters[i].id;
    }
}

function redirect(e) {
    address = e.target.id;
    window.location = "https://www.youtube-nocookie.com/embed/" + address;
}