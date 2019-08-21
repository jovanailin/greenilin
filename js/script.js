


window.onscroll = function () {
    $("#mynavbar").removeClass("mynavbar")
    $("#mynavbar").addClass("nav-scroll")
    if ($(window).scrollTop() == 0) {
        $("#mynavbar").removeClass("nav-scroll")
        $("#mynavbar").addClass("mynavbar")
    }

    
    }


window.onload = function () {
    $("#home").height($("#home").height() - $("#mynavbar").height());
}

 new WOW().init();



