const listMenu = document.querySelector("#dropdown")
const defMenu = document.querySelector(".menu")
const infMenu = document.querySelectorAll(".menu li")
const newMenu = document.querySelector(".menuDropDown")
const infNewMenu = document.querySelectorAll(".menuDropDown li")
const signinLeft = document.querySelector("#signinLeft")
let newMenuActive = true

function hideMenu() {
    if (newMenuActive) {
        infNewMenu.forEach((element) => {
            element.setAttribute("hidden", "true")
        })
        newMenu.setAttribute("hidden", "true")
        return newMenuActive = false
    }

    infNewMenu.forEach((element) => {
        element.removeAttribute("hidden")
    })
    newMenu.removeAttribute("hidden")
    return newMenuActive = true
}
hideMenu();

//----------Esconder o mostrar botón signin según tamaño de pantalla-----
function watchSignLeft(watch) {
    if (signinLeft == null) {
        return;
    }

    if (watch) {
        signinLeft.style.display = "block";
    } else {
        signinLeft.style.display = "none";
    }
}

//--------Esconder o mostrar el menú según se presione---------
listMenu.addEventListener("click", () => {
    if (newMenuActive) {
        infNewMenu.forEach((element) => {
            element.setAttribute("hidden", "true")
        })
        newMenu.setAttribute("hidden", "true")
        return newMenuActive = false
    }

    infNewMenu.forEach((element) => {
        element.removeAttribute("hidden")
    })
    newMenu.removeAttribute("hidden")
    return newMenuActive = true
})

window.addEventListener("click", (e) => {
    if (e.target.id != "dropdown" && newMenuActive) {
        infNewMenu.forEach((element) => {
            element.setAttribute("hidden", "true")
        })
        newMenu.setAttribute("hidden", "true")
        return newMenuActive = false
    }
})
//------------Fin de ambos eventos----------------

//Según el tamaño de la pantalla elimina o vuelve a agregar los elementos de la lista
window.addEventListener('resize', () => {
    const widthW = window.innerWidth;
    if (widthW > 768) {
        watchSignLeft(false)
        infMenu.forEach((element) => {
            if (!newMenu.hasAttribute("hidden")) {
                newMenu.setAttribute("hidden", "true")
                infNewMenu.forEach((element) => {
                    element.setAttribute("hidden", "true")
                })
                defMenu.appendChild(element)
            }
        })
    } else {
        watchSignLeft(true)
    }
});

//Llamando función cada vez que se inicie página
if (window.innerWidth > 768) {
    watchSignLeft(false)
} else {
    watchSignLeft(true)
}