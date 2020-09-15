console.clear();

//ADD VIDEO IDS TO THE IDLIST ARRAY, IN THE FORMAT ,"[videoID]"
var idList = ["MG8WbK800U4", "AyiSoYyXpwQ", "Hi_qaGwi7jo", "gGDTGoDRy4Y", "kzde5cAihnE", "xS8S6RzRM_k", "bvkxj3VRoWs", "5_tlAu0Z5s8", "8lNJZ-C8_ik", "4n6-7NA9LNc", "GPWrmekih9g",
             "CWl2PRpAP_s", "CSvF7UD1loU", "zM-6us2rm94", "2dF-d8XDsGA", "Xbu0XFbHPfA", "l68PHV6uQ1I", "9JZ07vPLv6o", "WRv9Tgcb-Aw", "BjbMhM6KIBk"];


var titleList = ["The Giving Tree", "Green Eggs and Ham", "Rain", "Room on the Broom", "What a Funny Bunny", "Oh, the Places You'll Go", "Music of the Meadow", "The Colors of Fall",
                 "Birds", "Fox in Socks", "Wocket in my Pocket", "Goodnight Moon", "The King, the Mice, and the Cheese", "The Mitten", "Elephant and Piggie: I Will Take a Nap", 
                 "Elephant and Piggie: I Got Invited To a Party", "Baby Bear, Baby Bear, What Do You See?", "The Whales Go By", "Mermaid School", "The Berenstain Bears: Honey Hunt"];


var authorList = ["Shel Silverstein", "Dr. Seuss", "Wonder Starters", "Julia Donaldson Axel Scheffler", "ABC Adventures", "Dr. Seuss", "Susan Ring", "Leslie Eckard", "Wonder Starters",
                  "Dr. Seuss", "Dr. Seuss", "Margaret Brown", "Nancy and Eric Gurney", "Jan Brett", "Mo Willems", "Mo Willems", "Bill Martin Jr.", "Fred Phleger", "Joanne Wetzel",
                 "Jan and Mike Berenstain"];


var readerList = ["Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg",
                 "Sadie Sahhlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg", "Sadie Sahlberg",
                 "Sadie Sahlberg"];


var genreList = ["Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", 
                 "Fiction", "Fiction", "Fiction", "Fiction", "Fiction", "Fiction"];

var videoPosters;
var node;
var address;

var searchText = "Search for books, authors, or readers here!"

function imageGen() {
  
    //Alert if wrong list lengths have been declared. Users should NEVER see this alert, fix the issues
    if (idList.length + titleList.length + authorList.length + readerList.length + genreList.length != idList.length * 5) {
        alert("Data Error: Mismatching list lengths. This is a temporary issue. Error Code: " + idList.length + titleList.length + authorList.length + readerList.length + genreList.length);
    }
  
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

function searchClick() {
  if (document.getElementById("searchBox").value == searchText) {
    document.getElementById("searchBox").value = "";
  }
}

function keyUp(event) {
  //if (event.keyCode == 13) {
    search();
  //}
}

function search() {
    searchTerm = document.getElementById("searchBox").value;
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

document.getElementById("searchBox").value = searchText;
