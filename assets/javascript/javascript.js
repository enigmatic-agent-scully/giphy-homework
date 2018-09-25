var topics = ["The X-Files", "Person of Interest", "Wynonna Earp", "Warehouse 13", "Buffy", "Wentworth",];
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
}

$(".show").click(function displayGif() {
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
            var rating = results.data[i].rating;
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

$("#add-button").on("click", function addButton() {
    var showName = $("#add-a-show").val();
    topics.push(showName);
    console.log(topics);
    topics.forEach(function () {
        var button = $(`<button class = "show" data-name = "${topics[i]}">${topics[i]}</button>`);
        buttonDiv.append(button);
        i++;
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



