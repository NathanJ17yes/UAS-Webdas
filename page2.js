let hp = 1000;
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
                }
            })
        }
        setTimeout(1000, randompoke());
    })
})
function randompoke(){
    let random = Math.floor(Math.random()*898)+1;
    $.getJSON('https://pokeapi.co/api/v2/pokemon/'+random+'/', (result) => {
        $('#gambar2').html('<img src="'+result.sprites.front_default+'" alt="">');
    })
}
$("#batu").click(function(){
    random = Math.floor(Math.random()*3);
    if (random == 0){
        $("#hasil").append("Batu(Player) vs Batu(Com), Draw<br>");
    }
    else if (random == 1){
        $("#hasil").append("Batu(Player) vs Gunting(Com), You Win<br>");
    }
    else if (random == 2){
        $("#hasil").append("Batu(Player) vs Kertas(Com), You Lose<br>");
    }
});
$("#gunting").click(function(){
    random = Math.floor(Math.random()*3);
    if (random == 0){
        $("#hasil").append("Gunting(Player) vs Batu(Com), You Lose<br>");
    }
    else if (random == 1){
        $("#hasil").append("Gunting(Player) vs Gunting(Com), Draw<br>");
    }
    else if (random == 2){
        $("#hasil").append("Gunting(Player) vs Kertas(Com), You Win<br>");
    }
});
$("#kertas").click(function(){
    random = Math.floor(Math.random()*3);
    if (random == 0){
        $("#hasil").append("Kertas(Player) vs Batu(Com), You Win<br>");
    }
    else if (random == 1){
        $("#hasil").append("Kertas(Player) vs Gunting(Com), You Lose<br>");
    }
    else if (random == 2){
        $("#hasil").append("Kertas(Player) vs Kertas(Com), Draw<br>");
    }
});
