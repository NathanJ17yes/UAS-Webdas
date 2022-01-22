function myFunction(i) {
    var dots = document.getElementById("dots"+i+"");
    var moreText = document.getElementById("more"+i+"");
    var btnText = document.getElementById("myBtn"+i+"");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }
    else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}
