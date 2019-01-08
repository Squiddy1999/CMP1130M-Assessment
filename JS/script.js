$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide"
    });
    nowPlaying = "null";
    customiserBtn();
    musicPreview();
    console.log("Window Ready");
    
})

function customiserBtn() {
    $("#create_album_button_section ").mouseover(function () {
        $(this).css("background-color", "#875b36")
    });
    $("#create_album_button_section ").mouseleave(function () {
        $(this).css("background-color", "#DC965A")
    });
}

function musicPreview() {    
    $(".song").click(function () {
        if (nowPlaying == "null") {
            nowPlaying = $(this);
            $(this).css("font-weight", "bold");
        }
        else {
            $(nowPlaying).css("font-weight", "normal");
            nowPlaying = $(this);
            $(this).css("font-weight", "bold");
        }
        
    });
}