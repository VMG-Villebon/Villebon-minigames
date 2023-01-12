export function typewritter(element, text, params, callback) {
    if (params.erase) element.innerHTML = "";

    let i = 0,
    typewritter_text = "",
    interval = setInterval(() => {
        if (i > text.length-2) {
            clearInterval(interval)
            callback()
        }

        let span = document.createElement("span")
        span.innerHTML = text[i]
        element.appendChild(span)

        i++
    }, params.interval)
}