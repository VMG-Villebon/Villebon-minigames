const layouts = document.querySelector("body .layouts");

export function show(id) {
    const layout = layouts.querySelector("#" + id)
    layout.classList.add("show")
    layout.style.zIndex = layout.style.zIndex ? (parseInt(layout.style.zIndex) + 1).toString() : "1"
}

export function focus(id) {

}

export function showAndFocus(id) {
    show(id)
    focus(id)
}

export function hide(id) {

}