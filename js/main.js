import { typewritter } from "./typewritter.js"
import { show } from "./layouts.js"

show("list")

const dialog = document.querySelector(".dialog")

window.dialogtest = () => {
    dialog.classList.add("open")
    dialog.classList.add("writing")

    typewritter(dialog.querySelector(".text"), "Welcome to Villebon Mini-games.", { interval: 20, erase: true }, () => {
        dialog.classList.remove("writing")
    })
}