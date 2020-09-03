console.clear();

//ADD VIDEO IDS TO THE IDLIST ARRAY, IN THE FORMAT ,"[videoID]"
var idList = ["MG8WbK800U4", "AyiSoYyXpwQ", "Hi_qaGwi7jo", "gGDTGoDRy4Y", "kzde5cAihnE", "xS8S6RzRM_k", "bvkxj3VRoWs", "5_tlAu0Z5s8", "8lNJZ-C8_ik", "4n6-7NA9LNc", "GPWrmekih9g",
             "CWl2PRpAP_s", "CSvF7UD1loU"];
var titleList = ["The Giving Tree", "Green Eggs and Ham", "Rain", "Room on the Broom", "What a Funny Bunny", "Oh, the Places You'll Go", "Music of the Meadow", "The Colors of Fall",
                 "Birds", "Fox in Socks", "Wocket in my Pocket", "Goodnight Moon", "The King, the Mice, and the Cheese"];
var authorList = ["Shel Silverstein", "Dr. Seuss", "Wonder Starters", "Julia Donaldson Axel Scheffler", "ABC Adventures", "Dr. Seuss", "Susan Ring", "Leslie Eckard", "Wonder Starters",
                  "Dr. Seuss", "Dr. Seuss", "Margaret Brown", "Nancy and Eric Gurney"];
var readerList = ["Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg",
                 "Sadie Sahhlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg"];
var genreList = ["Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction"];

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
    
    if (idList.length + titleList.length + authorList.length + readerList.length + genreList.length != idList.length * 5) {
        alert("Data Error: Mismatching list lengths. This is a temporary issue. Error Code: " + idList.length + titleList.length + authorList.length + readerList.length + genreList.length);
    }

}

function redirect(e) {
    address = e.target.id;
    window.location = "https://www.youtube-nocookie.com/embed/" + address;
}

function search(e) {
    searchTerm = e.value;
    searchTerm = searchTerm.toLowerCase();
     for (i = 0; i < idList.length; i++) {
        if (titleList[i].toLowerCase().indexOf(searchTerm) > -1) {
            document.getElementById(idList[i]).style.display = "inline-block";
        } else if (authorList[i].toLowerCase().indexOf(searchTerm) > -1) {
            document.getElementById(idList[i]).style.display = "inline-block";
        } else if (readerList[i].toLowerCase().indexOf(searchTerm) + genreList[i].toLowerCase().indexOf(searchTerm) > -2) {
            document.getElementById(idList[i]).style.display = "inline-block";
        } else {
            document.getElementById(idList[i]).style.display = "none";
        }
    }
}    

