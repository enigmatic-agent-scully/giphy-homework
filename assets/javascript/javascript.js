var topics = ["The X-Files", "Person of Interest", "Wynonna Earp", "Warehouse 13", "Buffy", "Star Trek Voyager",];
var buttonDiv = $(".buttons");
var i = 0;
var results;

$(window).on("load", buildButtons());

function buildButtons() {
    topics.forEach(function () {
        var startingButton = $(`<button class = "show" data-name = "${topics[i]}">${topics[i]}</button>`);
        buttonDiv.append(startingButton);
        i++;
    });
};

$("#add-button").on("click", function addButton(event) {
    event.preventDefault();
    var showName = $("#add-a-show").val();
    if (showName != null && showName != "") {
    topics.push(showName);
    console.log(topics);
        var button = $(`<button class = "show" data-name = "${showName}">${showName}</button>`);
        buttonDiv.append(button);
    }
    else {
        alert('Please enter text');
    }
}
    );


$("div.buttons").on("click", "button", function displayGifs() {
    var show = $(this).attr("data-name");
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=X2ToNs7htvQOI64Ox9NXIbmeiLqOPTsT&q=${show}&limit=10&rating=PG&lang=en`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        results = response;
        console.log(results);
        var newGifDiv = $("<div class='display'>");
        $(".gifs").empty();
        $(".gifs").append(newGifDiv);
        for (var i = 0; i < results.data.length; i++) {
            var rating = (results.data[i].rating);
            rating = rating.toUpperCase();
            var gifDisplay = $(`
            <figure>
            <img src="${results.data[i].images.fixed_height_still.url}" alt="${results.data[i].title}" data-still="${results.data[i].images.fixed_height_still.url}" data-animate="${results.data[i].images.fixed_height.url}" data-state="still">
            <figcaption>Rating: ${rating}</figcaption>
            </figure>
            `);
            newGifDiv.append(gifDisplay);
        }
    }
    )
});



$("div.gifs").on("click", "img", function animate() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});



