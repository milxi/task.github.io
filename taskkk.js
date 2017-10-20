// your data
var speakersArray = [
["1", "Netsky" + '<a href="#netsky">URL">https://open.spotify.com/artist/5TgQ66WuWkoQ2xYxaSTnVP</a>'],
["2", "Mark Knight"],
["3", "Deadmau5"],
["4", "Nora En Pure"],
["5", "View"]
];



// find your div in the html with ID="speakerscontainer"
var container = document.getElementById('musiccontainer');

// loop over the data
for(var i = 0; i < speakersArray.length; i++) {
	// for each speaker, add a new div to container (a.k.a speakerscontainer). The new div will have the the second (index: 1) value of the speakers-array (the name) as content.
	container.innerHTML += "<div class='speaker'>" + speakersArray[i][1] + "</div>";
}