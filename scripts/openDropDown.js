const items = document.querySelectorAll(".dropdowm-block");

items.forEach( item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('open')) {
            item.classList.add("open")
        } else {
            item.classList.remove("open")
        }
    })
})