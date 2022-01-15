$(document).ready(function(){
    $("#hasil").hide();
    $("#batu").hide();
    $("#gunting").hide();
    $("#kertas").hide();
    $("#poke").hide();
    $("#go").hide();

    $("#ready").click(function(){
        $("#ready").hide();
        $("#go").show();
        $("#poke").show();
    })

    $("#go").click(function(){
        if (document.getElementById("poke").value != ''){
            $("#go").hide();
            $("#poke").hide();
            $("#hasil").show();
            $("#batu").show();
            $("#gunting").show();
            $("#kertas").show();
            for (j=1; j<899; j++){
                $.getJSON('https://pokeapi.co/api/v2/pokemon/'+j+'/', (result) => {
                    let namapoke = result.name;
                    if (document.getElementById('poke').value == namapoke){
                        $('#gambar1').html('<img src="'+result.sprites.front_default+'" alt="">');
                        $('#name1').html(result.name);
                    }
                })
            }
            let random = Math.floor(Math.random()*898)+1;
            $.getJSON('https://pokeapi.co/api/v2/pokemon/'+random+'/', (result) => {
                $('#gambar2').html('<img src="'+result.sprites.front_default+'" alt="">');
                $('#name2').html(result.name);
            })
            $('#hp1').html('HP : 1000/1000');
            $('#hp2').html('HP : 1000/1000');
        }
        else {
            alert('Choose Your Pokemon First!');
        }
    })
let hp1 = 1000;
let hp2 = 1000;
function win (){
    hp2 -= 100;
    $('#hp2').html('HP : '+hp2+'/1000');
}
function lose (){
    hp1 -= 100;
    $('#hp1').html('HP : '+hp1+'/1000');
}
function alertwin (){
    let conf1 = confirm("You Win, Play Again?");
    if (conf1){
        window.location.reload();
    }
    else {
        $("#batu").off('click');
        $("#gunting").off('click');
        $("#kertas").off('click');
    }
}
function alertlose (){
    let conf2 = confirm("You Lose, Play Again?");
    if (conf2){
        window.location.reload();
    }
    else {
        $("#batu").off('click');
        $("#gunting").off('click');
        $("#kertas").off('click');
    }
}
$("#batu").click(function(){
    random = Math.floor(Math.random()*3);
    if (random == 0){
        $("#hasil").append("Rock(Player) vs Rock(Com), Draw<br>");
    }
    else if (random == 1){
        $("#hasil").append("Rock(Player) vs Scissor(Com), You Win<br>");
        if (hp2 == 100){
            let win1 = setTimeout(win(), 1000);
            let alertwin1 = setTimeout(alertwin(), 2000);
        }
        else {
            let wina = setTimeout(win(), 1000);
        }
    }
    else if (random == 2){
        $("#hasil").append("Rock(Player) vs Paper(Com), You Lose<br>");
        if (hp1 == 100){
            let lose1 = setTimeout(lose, 1000);
            let alertlose1 = setTimeout(alertlose, 2000);
        }
        else {
            let losea = setTimeout(lose, 1000);
        }
    }
});
$("#gunting").click(function(){
    random = Math.floor(Math.random()*3);
    if (random == 0){
        $("#hasil").append("Scissor(Player) vs Rock(Com), You Lose<br>");
        if (hp1 == 100){
            let lose1 = setTimeout(lose, 1000);
            let alertlose1 = setTimeout(alertlose, 2000);
        }
        else {
            let losea = setTimeout(lose, 1000);
        }
    }
    else if (random == 1){
        $("#hasil").append("Scissor(Player) vs Scissor(Com), Draw<br>");
    }
    else if (random == 2){
        $("#hasil").append("Scissor(Player) vs Paper(Com), You Win<br>");
        if (hp2 == 100){
            let win1 = setTimeout(win, 1000);
            let alertwin1 = setTimeout(alertwin, 2000);
        }
        else {
            let wina = setTimeout(win, 1000);
        }
    }
});
$("#kertas").click(function(){
    random = Math.floor(Math.random()*3);
    if (random == 0){
        $("#hasil").append("Paper(Player) vs Rock(Com), You Win<br>");
        if (hp2 == 100){
            let win1 = setTimeout(win, 1000);
            let alertwin1 = setTimeout(alertwin, 2000);
        }
        else {
            let wina = setTimeout(win, 1000);
        }
    }
    else if (random == 1){
        $("#hasil").append("Paper(Player) vs Scissor(Com), You Lose<br>");
        if (hp1 == 100){
            let lose1 = setTimeout(lose, 1000);
            let alertlose1 = setTimeout(alertlose, 2000);
        }
        else {
            let losea = setTimeout(lose, 1000);
        }
    }
    else if (random == 2){
        $("#hasil").append("Paper(Player) vs Paper(Com), Draw<br>");
    }
});
})
