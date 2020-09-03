console.clear();


//ADD VIDEO IDS TO THE IDLIST ARRAY, IN THE FORMAT ,"[videoID]"
var idList = ["MG8WbK800U4", "AyiSoYyXpwQ", "Hi_qaGwi7jo", "gGDTGoDRy4Y", "kzde5cAihnE", "5_tlAu0Z5s8", "8lNJZ-C8_ik"];
var titleList = ["The Giving Tree", "Green Eggs and Ham", "Rain", "Room on the Broom", "What a Funny Bunny", "The Colors of Fall", "Birds"];
var authorList = ["Shel Silverstein", "Dr. Seuss", "Wonder Starters", "Julia Donaldson Axel Scheffler", "ABC Adventures", "Leslie Eckard", "Wonder Starters"];
var readerList = ["Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg"];
var genreList = ["Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction"];

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
        videoPosters[i].innerHTML = titleList[i] + " by " + authorList[i];
    }
}

function redirect(e) {
    address = e.target.id;
    window.location = "https://www.youtube-nocookie.com/embed/" + address;
}
