var topics = ["The X-Files", "Person of Interest", "Wynonna Earp", "Warehouse 13", "Buffy", "Wentworth",];
var buttonDiv = $(".buttons");
var i = 0;

$(Window).on("load", buildButtons());

function buildButtons() {
    topics.forEach(function () {
    var button = $(`<button class = "show" data-name = "${topics[i]}">${topics[i]}</button>`);
    buttonDiv.append(button);
    i++;
} );}

$(".show").click(function displayGif() {
    var show = $(this).attr("data-name");
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=X2ToNs7htvQOI64Ox9NXIbmeiLqOPTsT&q=${show}&limit=10&rating=PG&lang=en`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        var newGifDiv = $("<div class='display'>");
        $(".gifs").empty();
        $(".gifs").append(newGifDiv);
        for (var i = 0; i < response.data.length; i++) {
            var rating = response.data[i].rating;
            var gifDisplay = $(`
            <figure>
            <img src="${response.data[i].images.fixed_height_still.url}" alt="${response.data[i].title}">
            <figcaption>Rating: ${rating}</figcaption>
            </figure>
            `);
            newGifDiv.append(gifDisplay);
        }
        
    }
    )
});

$("#add-button").on("click", function addButton(event) {
    event.preventDefault();
    var showName = $("#add-a-show").val();
    topics.push(showName);
    console.log(topics);
    buttonDiv.empty();
    for (var j = 0; j < topics.length; i++)
        var button = $(`<button class = "show" data-name = "${topics[i]}">${topics[i]}</button>`);
        buttonDiv.append(button);
    }
    );

$("figure").on("click", function animate(event) {
    event.preventDefault();
    var that = $(this);
    console.log(that);
    if (that.src == `"${response.data[i].images.fixed_height_still.url}"`) {
        that.attr("src") `"${response.data[i].images.fixed_height.url}"`;
    }
    else if (that.src == `"${response.data[i].images.fixed_height.url}"`) {
        that.src = `"${response.data[i].images.fixed_height_still.url}"`
    }
})



