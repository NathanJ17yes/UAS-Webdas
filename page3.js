muncul()
function muncul(){
     let div = document.querySelector(".container")
     let cont = document.getElementById("contain")
     let nav = document.getElementById("atas")
     let dark = document.createElement("div")
     let normal = document.createElement("div")
        normal.id = "normal"
        dark.id="dark";
        cont.appendChild(dark)
        cont.appendChild(normal)
        normal.innerHTML= "Normal Mode"
        dark.innerHTML= "Dark Mode"
        dark.addEventListener("click", function(){
            let body = document.body
            body.className="dark-mode"
            nav.className="dark-mode1"
        })
        normal.addEventListener("click", function(){
            let body= document.body
            body.className="light-mode"
            nav.className="light-mode1"
        })
        $("#button").hide()
            for(let i=1; i<=30; i++){
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
