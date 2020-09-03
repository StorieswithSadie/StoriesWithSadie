console.clear();


//ADD VIDEO IDS TO THE IDLIST ARRAY, IN THE FORMAT ,"[videoID]"
var idList = ["MG8WbK800U4", "AyiSoYyXpwQ", "Hi_qaGwi7jo", "gGDTGoDRy4Y", "kzde5cAihnE"];
var titleList = ["The Giving Tree", "Green Eggs and Ham", "Rain", "Room on the Broom", "What a Funny Bunny"];
var authorList = ["Shel Silverstein", "Dr. Seuss", "Wonder Starters", "Julia Donaldson Axel Scheffler", "ABC Adventures"];
var readerList = ["Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg"];
var genreList = ["Fiction", "Fiction", "Fiction", "Fiction", "Fiction"];

var videoPosters;
var node;
var address;

function imageGen() {
    //DYNAMICALLY CREATE TD ELEMENTS WITH IDLIST
    if (idList.length == titleList.length == authorList.length == readerList.length == genreList.length) {
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
            videoPosters[i].innerHTML = titleList[i] + " by " + authorList[i];
        }
    } else {
        alert("Data Error: Mismatching list lengths. This is a temporary issue. Error Code: " + idList.length + titleList.length + authorList.length + readerList.length + genreList.length);
    }

}

function redirect(e) {
    address = e.target.id;
    window.location = "https://www.youtube-nocookie.com/embed/" + address;
}
