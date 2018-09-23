var topics = ["The X-Files", "Person of Interest", "Wynonna Earp", "Warehouse 13", "Buffy", "Wentworth",];
var buttonDiv = $(".buttons");
var i = 0;

topics.forEach(function buildButtons(show) {
    console.log(show);
    var button = $(`<button class = "show" data-name = "${topics[i]}">${topics[i]}</button>`);
    buttonDiv.append(button);
    i++;
} );

function displayGifs() {
    var show = $(this).attr("data-name");
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=X2ToNs7htvQOI64Ox9NXIbmeiLqOPTsT&q=${show}&limit=10&rating=PG&lang=en`;

    $.ajax({
        url: queryURL;
        method: "GET"
    }).then(function)

}