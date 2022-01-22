muncul()
function muncul(){
     let div = document.querySelector(".container")
     let nav = document.getElementById("atas")
     let dark = document.createElement("button")
        nav.appendChild(dark)
        dark.innerHTML= "Dark Mode"
        dark.addEventListener("click", function(){
            let dark = document.body
            dark.classList.toggle("dark-mode")
            nav.classList.toggle("dark-mode1")
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
    }

