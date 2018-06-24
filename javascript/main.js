
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// =================================

$('.sec1').mouseover(function(){
    $('.sec1').css({"background-color":"#5ABCF9", "color":"#FAFAFA"});
});
$('.sec1').mouseout(function(){
    $('.sec1').css({"background-color":"transparent", "color":"#000000"});
});

// ===========================

$('.sec2').mouseover(function(){
    $('.sec2').css({"background-color":"#FE99C5", "color":"#FAFAFA"});
});
$('.sec2').mouseout(function(){
    $('.sec2').css({"background-color":"transparent", "color":"#000000"});
});

// ===================================

$('.sec3').mouseover(function(){
    $('.sec3').css({"background-color":"#E8CB4D", "color":"#FAFAFA"});
});
$('.sec3').mouseout(function(){
    $('.sec3').css({"background-color":"transparent", "color":"#000000"});
});

// ================================