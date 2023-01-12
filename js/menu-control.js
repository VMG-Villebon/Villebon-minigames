const MENU_ELEMENT = document.querySelector(".menu");

export function fSizeControl(params, callback) {
    if (params.width) MENU_ELEMENT.style.width = params.width + "px"
    if (params.height) MENU_ELEMENT.style.height = params.height + "px"
    if (params.transition) MENU_ELEMENT.style.transition = "0.5s"
    else MENU_ELEMENT.style.transition = "none";

    if (callback) setTimeout(() => callback(), 500)
    
}

export function fDivControl(params, callback) {
    const DIV = document.querySelector("." + params.class);
    const CURRENT = MENU_ELEMENT.querySelector(".open")

    CURRENT.classList.remove("open")
    DIV.classList.add("open")

    if (callback) setTimeout(() => callback(), 500)
}