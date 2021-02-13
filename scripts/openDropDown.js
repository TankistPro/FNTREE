const items = document.querySelectorAll(".dropdowm-block p");

items.forEach( item => {
    item.addEventListener('click', () => {
        const dropDowm = item.closest('.dropdowm-block');
        // console.log(dropDowm)
        if (!dropDowm.classList.contains('open')) {
            dropDowm.classList.add("open")
        } else {
            dropDowm.classList.remove("open")
        }
    })
})