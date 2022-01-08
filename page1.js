function SelectPoke (){
    for (j=1; j<899; j++){
        $.getJSON('https://pokeapi.co/api/v2/pokemon/'+j+'/', (result) => {
            let namapoke = result.name;
            if (document.getElementById('poke').value == namapoke){
                $('#gambar').html('<img src="'+result.sprites.front_default+'" alt="">');
                $('#pokename').html(result.name);
                let type = [];
                let ability = [];
                for (i=0; i<result.types.length; i++){
                    type.push(result.types[i].type.name);
                    type.push(", ");
                }
                type.pop();
                $('#b1').html(type);
                $('#b2').html(result.height + " ft");
                $('#b3').html(result.weight + " lbs");
                for (i=0; i<result.abilities.length; i++){
                    ability.push(result.abilities[i].ability.name);
                    ability.push(", ");
                }
                ability.pop();
                $('#b4').html(ability);
            }
        })
    }
}
function gambarpoke (){
    let random = Math.floor(Math.random()*898)+1;
    $.getJSON('https://pokeapi.co/api/v2/pokemon/'+random+'/', (result) => {
        $('#gambar').html('<img src="'+result.sprites.front_default+'" alt="">');
        $('#pokename').html(result.name);
        let type = [];
        let ability = [];
        for (i=0; i<result.types.length; i++){
            type.push(result.types[i].type.name);
            type.push(", ");
        }
        type.pop();
        $('#b1').html(type);
        $('#b2').html(result.height + " ft");
        $('#b3').html(result.weight + " lbs");
        for (i=0; i<result.abilities.length; i++){
            ability.push(result.abilities[i].ability.name);
            ability.push(", ");
        }
        ability.pop();
        $('#b4').html(ability);
    })
}
