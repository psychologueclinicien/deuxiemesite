// Loading page
var loaderPage = function() {
    $(window).load(function() {
    $(".animation-gif-loader").fadeOut("1000"); })
};
loaderPage();

// Page website after loading
$("#container").hide();
setTimeout(function() {
    $("#container").show()
},1000);