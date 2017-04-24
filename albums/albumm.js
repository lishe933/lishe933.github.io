var album_list = [
{
	"title" : "Age of Quarrel",
	"artistname" : "Cro-Mags"
},
{

	"title" : "For Those Who Were Crucified",
	"artistname" : "All Out War",
	"tracks" : [
	"Burning Season",
	"Resist",
	"For Those Who Were Crucified"
		]
}
];


album_list.forEach(function(the_single_album){
	console.log(the_single_album.title);	
	if (the_single_album.tracks) {
		console.log("has tracks:");
		console.log(the_single_album.tracks);
	}
	else {
		console.log("no tracks found");
	}
});

/* var container = document.querySelector(".saranwrap");

var thing_to_append = document.createElement("div"); 
var heading = document.createElement("h4");
heading.textContent = 
thing_to_append.textContent = the_single_album.artistname;
thing_to_append.appendChild(heading);

the_single_album.tracks.forEach(function(tr_name){
	var tr = document.createElement("p");
	tr.textContent = tr_name;
	thing_to_append.appendChild(tr);
});

container.appendChild(thing_to_append);

});

}

/*var album = {
	"artistname" : "Cro-Mags"
	"title" : "Age of Quarrel"
};

var album2 = {
	"artistname" : "All Out War"
	"albumtitle" : "For Those Who Were Crucified"
}

console.log(album2.artistname)


var albumtitles = {"Age of Quarrel", "For Those Who Were Crucified", "Destroy the Machines"};
console.log(albumtitles(0));

var albumartists = {"Cro-Mags", "All Out War", "Earth Crisis"}

albumtitles.forEach{function(element)} {
	console.log(element)
}};

albumartists.forEach{function(element)} {
	console.log(element)
}};

*/

