$("#gold").click(function() {
    $("#next").show();
    $("#gold").slideUp();
});

$("#chest").dblclick(function() {
    $(".gem").show();
    $(".gem").css("display","flex");
    $("#next").slideUp();
    $("#choose").fadeIn();
});

$(".ruby").mouseenter(function() {
    $(".ruby").fadeOut();
});

$(".sapphire").mouseenter(function() {
    $(".sapphire").slideUp();
});

$(".correct").mouseenter(function() {
    $("#touch").show();
    $(".gem").fadeOut();
    $("#choose").fadeOut();
});

$("#header").click(function() {
    $("#header").css("color","red");
    $("#header").css("background-color","blue");
    $("#header").text("Now click me two more times");
    $("#touch").hide();
});

$("#header").dblclick(function() {
    $("h1").text("YOU'VE BEEN GNOMED");
    $("h1").css("color","white");
    $("h1").css("background-color","red");
    $("#chest").css("display","none");
    $(".gnomed").fadeIn();
    $("#gottem").fadeIn();
});

$("#gottem").hover(function() {
    $("#gottem").css("text-decoration","underline");
});

$("#gottem").click(function() {
    $("h1").text("WE GOTTEM AGAIN");
    $("h1").css("border","20px groove white");
    $("h1").css("background-color","black");
    $("h1").css("color","white");
    $("body").css("background-color","black");
    $("#hand").slideDown();
    $(".gnomed").hide();
});
    