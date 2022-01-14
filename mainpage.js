function show (){
    $('.sidebar').css('left','0');
    $('#cancel').css('left','195px');
    $(section).css('margin-left','250px');
}
function hide (){
    $('.sidebar').css('left','-250px');
    $('#cancel').css('left','-195px');
    $(section).css('margin-left','0');
}
function readmore(i) {
    let dots = document.getElementById("dots"+i);
    let moreText = document.getElementById("more"+i);
    let btnText = document.getElementById("myBtn"+i);
    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More"; 
        moreText.style.display = "none";
    } 
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less"; 
        moreText.style.display = "inline";
    }
}
