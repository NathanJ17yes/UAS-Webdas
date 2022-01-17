muncul()
function muncul(){
     let div = document.querySelector(".container")
        $("#button").hide()
            for(let i=1; i<=9; i++){
                let gambar=document.createElement("img")
                gambar.src = "assets/" + i + ".jpg"
                gambar.setAttribute("class", "zoom")
                div.appendChild(gambar)
        }
        mediumZoom(document.querySelectorAll('.zoom'),{
            margin : 55,
            background : 'whitesmoke',
            scrollOffset : 0,
})
    } 
function dark(){
    let dark = document.body
    dark.classList.toggle("dark-mode")
}
